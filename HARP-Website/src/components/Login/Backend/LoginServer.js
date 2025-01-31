// LoginServer.js
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pg from 'pg';
const { Pool } = pg;

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure PostgreSQL connection with Neon
const pool = new Pool({
    connectionString: `postgresql://Articles_owner:npg_Na3VpiL2RBCG@ep-square-king-a80hiral.eastus2.azure.neon.tech/Articles?sslmode=require`,
    ssl: {
        rejectUnauthorized: false
    }
});

// Create users table if it doesn't exist
const initializeDatabase = async () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS "public"."Login" (
                email TEXT PRIMARY KEY,
                password TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP WITH TIME ZONE,
                is_active BOOLEAN DEFAULT true,
                reset_token TEXT,
                reset_token_expiry TIMESTAMP WITH TIME ZONE
            );
        `;
        await pool.query(createTableQuery);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

initializeDatabase();


// Import routes (we'll need to modify this part too)
import loginRoutes from './LoginAPI.js';  // Make sure to add .js extension
app.use('/', loginRoutes(pool));
app.use('/api', loginRoutes(pool));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});