const express = require('express')
const app = express()

// without router
app.get('/about', (req, res) => {
    res.send('home page')
})

// with router

// Middleware that logs the request details
router.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}, Time: ${new Date().toISOString()}`);
    next();
});

const router = express.Router()
router.get('/', (req, res) => {
    res.send('about home page')
})

module.exports = router;
