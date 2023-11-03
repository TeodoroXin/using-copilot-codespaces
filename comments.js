// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set up GET request
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'comments.html'));
});

// Set up POST request
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  res.send(`Thank you for your comment, ${name}!`);
});

// Set up port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));