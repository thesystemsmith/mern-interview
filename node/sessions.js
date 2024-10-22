const express = require('express');
const session = require('express-session');
const app = express();

// Session middleware
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));

// Route handler for setting session data
app.get('/set-session', (req, res) => {
    req.session.username = 'john_doe';
    res.send('Session data set');
});

// Route handler for getting session data
app.get('/get-session', (req, res) => {
    const username = req.session.username || 'Guest';
    res.send('Session data: ' + username);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});