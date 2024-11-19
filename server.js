const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/submit-form', (req, res) => {
  const newData = req.body; // New data to append
  console.log('Received data:', newData);

  // Path to the JSON file
  const filePath = path.resolve(__dirname, 'formData.json');

  // Check if the file exists, and initialize if needed
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  }

  // Read the existing file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send({ message: 'Failed to read data.' });
    }

    let jsonData = [];
    try {
      console.log('Raw file content:', data); // Debug log
      jsonData = JSON.parse(data);
      if (!Array.isArray(jsonData)) {
        throw new Error('Data is not an array');
      }
    } catch (parseErr) {
      console.error('Error parsing JSON or data not an array:', parseErr);
      jsonData = []; // Reset to empty array
    }

    // Append new data
    jsonData.push(newData);

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return res.status(500).send({ message: 'Failed to save data.' });
      }

      console.log('Data saved successfully:', jsonData);
      res.status(200).send({ message: 'Data saved successfully!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
