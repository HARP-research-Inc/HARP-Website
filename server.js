const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = 5000;

// PostgreSQL connection
// const pool = new Pool({
//   user: 'postgres', 
//   host: 'localhost', 
//   database: 'form_data',
//   password: '0000',
//   port: 5432,
// });

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HARP-Website',
  password: 'harpresearch',
  port: 5432,
}); 

app.use(cors());
app.use(bodyParser.json());


// Serve static files from the Vue app's build folder
app.use(express.static(path.join(__dirname, 'HARP-Website', 'dist')));

// Redirect all other requests to Vue app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'HARP-Website', 'dist', 'index.html'));
});

// User login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the email exists in the users table
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];

    // Optional: Validate password with bcrypt
    const isPasswordValid = password === user.password; // Replace this with bcrypt if using hashed passwords
    // const isPasswordValid = await bcrypt.compare(password, user.password); // Uncomment for hashed passwords

    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    // Return success response with user details (excluding the password)
    res.status(200).send({
      message: 'Login successful!',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});



// Route to handle "Got Questions" form
// app.post('/submit-form', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     await pool.query(
//       'INSERT INTO questions_form (name, email, message) VALUES ($1, $2, $3)',
//       [name, email, message]
//     );
//     res.status(200).send({ message: 'Form submitted successfully!' });
//   } catch (error) {
//     console.error('Error inserting form data:', error);
//     res.status(500).send({ error: 'Failed to save form data.' });
//   }
// });

// // Route to handle "Partner with Us" form
// app.post('/submit-partner-form', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     await pool.query(
//       'INSERT INTO partner_form (name, email, message) VALUES ($1, $2, $3)',
//       [name, email, message]
//     );
//     res.status(200).send({ message: 'Partner form submitted successfully!' });
//   } catch (error) {
//     console.error('Error inserting partner form data:', error);
//     res.status(500).send({ error: 'Failed to save partner form data.' });
//   }
// });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
