const express = require('express');
const app = express();

// http://localhost:8000/user?name=ram
app.get('/user', (req, res, next) => {
    if (!req.query.name) {
        const err = new Error("Please provide user name");
        return next(err);
    }
    console.log('User name: ', req.query.name);
    res.send('success');
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(400);
    res.send(err.message)
});

app.listen(8000, (req, res) => {
    console.log('server running on port 8000');
});