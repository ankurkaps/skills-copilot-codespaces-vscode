// Create web server
// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Use the express.urlencoded middleware to parse the body of a POST request
app.use(express.urlencoded({extended: true}));

// Use the express.json middleware to parse the body of a POST request
app.use(express.json());

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Set the application to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Import the comments module
const comments = require('./comments');

// Create a GET request to /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST request to /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Create a DELETE request to /comments
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json(comments);
});

// Create a PUT request to /comments
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments[id] = req.body;
    res.json(comments);
});

// Create a GET request to /comments/:id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.json(comments[id]);
});

// Create a GET request to /comments/length
app.get('/comments/length', (req, res) => {
    res.json(comments.length);
});
