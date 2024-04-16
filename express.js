const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is listening at port :${PORT}`);
}); 


// Simple user validation middleware 
const validateUser = (req, res, next) => {
    const user = req.user;

    // Check if the user object is present 
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized - User not found' });
    }

    // If the user is valid, move to the next middleware or route handler 
    next();
};

// Example of using the middleware in an Express route 
app.get('/profile', validateUser, (req, res) => {
    const user = req.user;
    res.json({ message: 'Profile page', username: user.username });
});


//  Scaffolding in Express JS?
// npm install -g yo
// npm install -g generator-express
// yo appname

