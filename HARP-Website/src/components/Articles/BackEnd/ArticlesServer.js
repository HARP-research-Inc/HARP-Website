const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection configuration
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'articles_db',
    password: 'your_password',
    port: 5432,
});

// GET all articles
app.get('/api/articles', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM articles ORDER BY date DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// Search articles
app.get('/api/articles/search', async (req, res) => {
    try {
        const { query } = req.query;
        const { rows } = await pool.query(
            `SELECT * FROM articles 
       WHERE search_vector @@ plainto_tsquery($1)
       ORDER BY date DESC`,
            [query]
        );
        res.json(rows);
    } catch (error) {
        console.error('Error searching articles:', error);
        res.status(500).json({ error: 'Search failed' });
    }
});

// Add a new article
app.post('/api/articles', async (req, res) => {
    try {
        const { title, intro, date, read_time, image_url, link } = req.body;
        const { rows } = await pool.query(
            `INSERT INTO articles (title, intro, date, read_time, image_url, link) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
            [title, intro, date, read_time, image_url, link]
        );
        res.json(rows[0]);
    } catch (error) {
        console.error('Error adding article:', error);
        res.status(500).json({ error: 'Failed to add article' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});