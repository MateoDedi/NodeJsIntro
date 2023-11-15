const express = require('express');
const app = express();
const port = 3000; // or any port you prefer

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set up your routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});