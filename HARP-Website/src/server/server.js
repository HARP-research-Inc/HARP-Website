import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection (Temporary using the Neon DB, will be changed to HARP DB once it is deployed)
const pool = new Pool({
  connectionString: "postgresql://teamMembersDB_owner:npg_TW2amo6dINZF@ep-holy-unit-a8aq9e5m-pooler.eastus2.azure.neon.tech/teamMembersDB?sslmode=require",
  ssl: {
    rejectUnauthorized: false
  }
});

// API Endpoint to fetch all team members from the team_members table
app.get("/api/team-members", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM team_members");
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ error: error.message });
  }
});


// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
