import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
import 'dotenv/config'

//console.log('Database URL:', process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: 'postgresql://Articles_owner:npg_Na3VpiL2RBCG@ep-square-king-a80hiral.eastus2.azure.neon.tech/Articles?sslmode=require',
    ssl: {
        rejectUnauthorized: false // Required for Neon
    }
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.query('SELECT NOW()', (err, res) => {
    console.log("Processing Query");
    if (err) {
        console.error('Database connection error:', err.message);
        console.error('Error code:', err.code);
    } else {
        console.log('Database connected successfully at:', res.rows[0].now);
    }
});

app.get('/articles', async (req, res) => {
    console.log('Received GET request to /articles');
    try {
        console.log('Attempting to query database');
        const { rows } = await pool.query('SELECT * FROM articles ORDER BY date DESC');
        console.log(`Query successful. Retrieved ${rows.length} articles`);
        res.json(rows);
    } catch (error) {
        console.error('Detailed error in /articles route:', error);
        res.status(500).json({
            error: 'Database error',
            details: error.message
        });
    }
});

app.get('/articles/search', async (req, res) => {
    try {
        const { query } = req.query;
        const { rows } = await pool.query(
            `SELECT * FROM articles 
       WHERE title ILIKE $1 OR intro ILIKE $1
       ORDER BY date DESC`,
            [`%${query}%`]
        );
        res.json(rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Search failed' });
    }
});

app.get('/api/test', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT COUNT(*) FROM articles');
        res.json({
            success: true,
            message: 'Database connected successfully',
            articleCount: rows[0].count
        });
    } catch (error) {
        console.error('Test endpoint error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            hint: 'Check if your articles table exists'
        });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Backend is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
