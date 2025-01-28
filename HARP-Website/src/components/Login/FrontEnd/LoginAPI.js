// LoginAPI.js
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

export default (pool) => {
    // Register new user
    router.post('/register', async (req, res) => {
        const { email, password } = req.body;

        try {
            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Insert new user
            const newUser = await pool.query(
                'INSERT INTO "Login" (email, password) VALUES ($1, $2) RETURNING email, created_at',
                [email, hashedPassword]
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

    // Social login endpoint
    router.post('/social-login/:provider', async (req, res) => {
        const { provider } = req.params;
        res.status(501).json({ message: `${provider} login not implemented yet` });
    });

    return router;
};