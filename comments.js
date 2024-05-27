// Create a web server
// Create a GET route /comments
// Create a POST route /comments
// Create a DELETE route /comments
// Create a PUT route /comments

const express = require('express');
const app = express();

app.use(express.json());

app.get('/comments', (req, res) => {
    res.send('GET comments');
});

app.post('/comments', (req, res) => {
    res.send('POST comments');
});

app.delete('/comments', (req, res) => {
    res.send('DELETE comments');
});

app.put('/comments', (req, res) => {
    res.send('PUT comments');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
