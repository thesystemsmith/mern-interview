// application level middleware
const express = require('express');
const app = express();

const startTime = (req, res, next) => {
    console.log(`Request ${req.url}  ${req.method} started at: ${new Date()}`);
    next();
};

app.use(startTime);

app.get('/v1', (req, res) => {
    console.log('I am in V1 request');
    res.send('success');
});

app.get('/v2', (req, res) => {
    console.log('I am in v2 request');
    res.send('success');
});

app.listen(8000, (req, res) => {
    console.log('server running on port 8000');
});