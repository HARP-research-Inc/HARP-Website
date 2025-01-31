// LoginAPI.js
import express from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const router = express.Router();

export default (pool) => {
    // Enhanced register endpoint
    router.post('/register', async (req, res) => {
        const { email, password, fullName } = req.body;

        // Input validation
        if (!email || !password || !fullName) {
            return res.status(400).json({
                error: 'Email, password, and full name are required'
            });
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid email format'
            });
        }

        // Password strength validation
        if (password.length < 8) {
            return res.status(400).json({
                error: 'Password must be at least 8 characters long'
            });
        }

        try {
            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Insert new user with full name
            const newUser = await pool.query(
                'INSERT INTO "Login" (email, password, full_name) VALUES ($1, $2, $3) RETURNING email, full_name, created_at',
                [email, hashedPassword, fullName]
            );

            res.status(201).json({
                message: 'User registered successfully',
                user: newUser.rows[0]
            });
        } catch (error) {
            if (error.code === '23505') {
                return res.status(400).json({ error: 'Email already registered' });
            }
            console.error('Registration error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    router.post('/social-register/:provider', async (req, res) => {
        const { provider } = req.params;
        const { email, fullName } = req.body; // These would come from the social provider

        try {
            // Check if user already exists
            const existingUser = await pool.query(
                'SELECT * FROM "Login" WHERE email = $1',
                [email]
            );

            if (existingUser.rows.length > 0) {
                // If user exists, treat it as a login
                return res.json({
                    message: 'User already registered, logged in successfully',
                    user: {
                        email: existingUser.rows[0].email,
                        full_name: existingUser.rows[0].full_name,
                        created_at: existingUser.rows[0].created_at
                    }
                });
            }

            // Generate a random secure password for social users
            // They can reset it later if they want to use password login
            const randomPassword = Math.random().toString(36).slice(-12);
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            // Insert new social user
            const newUser = await pool.query(
                'INSERT INTO "Login" (email, password, full_name) VALUES ($1, $2, $3) RETURNING email, full_name, created_at',
                [email, hashedPassword, fullName]
            );

            res.status(201).json({
                message: 'Social registration successful',
                user: newUser.rows[0]
            });
        } catch (error) {
            console.error(`${provider} registration error:`, error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Login user
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = await pool.query(
                'SELECT * FROM "Login" WHERE email = $1',
                [email]
            );

            if (result.rows.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const user = result.rows[0];
            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            await pool.query(
                'UPDATE "Login" SET last_login = CURRENT_TIMESTAMP WHERE email = $1',
                [email]
            );

            const { password: _, ...userData } = user;
            res.json({
                message: 'Login successful',
                user: userData
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    router.post('/forgot-password', async (req, res) => {
        const { email } = req.body;
        console.log('Received forgot password request for email:', email);

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        try {
            // Check if user exists
            console.log('Querying database for user...');
            const userResult = await pool.query(
                'SELECT * FROM "Login" WHERE email = $1',
                [email]
            );
            console.log('User query completed. Rows found:', userResult.rows.length);

            if (userResult.rows.length === 0) {
                console.log('No user found with email:', email);
                return res.status(404).json({ error: 'No account found with this email' });
            }

            // Generate reset token
            console.log('Generating reset token...');
            const resetToken = crypto.randomBytes(32).toString('hex');

            // Set expiry to exactly 1 hour from now using PostgreSQL's timestamp
            console.log('Updating user with reset token...');
            const result = await pool.query(
                `UPDATE "Login" 
                 SET reset_token = $1, 
                     reset_token_expiry = CURRENT_TIMESTAMP + INTERVAL '1 hour'
                 WHERE email = $2 
                 RETURNING reset_token_expiry`,
                [resetToken, email]
            );
            console.log('Update completed. Rows affected:', result.rowCount);

            const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

            res.json({
                message: 'Password reset link generated successfully',
                resetLink: resetLink
            });

        } catch (error) {
            console.error('Detailed error in forgot-password:', {
                message: error.message,
                stack: error.stack,
                code: error.code,
                detail: error.detail
            });
            res.status(500).json({
                error: 'Internal server error',
                details: error.message
            });
        }
    });

    // Reset password with token
    router.post('/reset-password/:token', async (req, res) => {
        const { token } = req.params;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'New password is required' });
        }

        if (password.length < 8) {
            return res.status(400).json({
                error: 'Password must be at least 8 characters long'
            });
        }

        try {
            // Find user with valid reset token using PostgreSQL's CURRENT_TIMESTAMP
            const user = await pool.query(
                `SELECT * FROM "Login" 
                 WHERE reset_token = $1 
                 AND reset_token_expiry > CURRENT_TIMESTAMP`,
                [token]
            );

            if (user.rows.length === 0) {
                return res.status(400).json({
                    error: 'Invalid or expired reset token'
                });
            }

            // Hash new password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Update password and clear reset token
            await pool.query(
                `UPDATE "Login" 
                 SET password = $1, 
                     reset_token = NULL, 
                     reset_token_expiry = NULL 
                 WHERE reset_token = $2`,
                [hashedPassword, token]
            );

            res.json({ message: 'Password has been reset successfully' });

        } catch (error) {
            console.error('Password reset error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Social login endpoint
    router.post('/social-login/:provider', async (req, res) => {
        const { provider } = req.params;
        res.status(501).json({ message: `${provider} login not implemented yet` });
    });

    return router;
};