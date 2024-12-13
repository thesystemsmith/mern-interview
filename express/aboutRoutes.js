const express = require('express')
const app = express()

// without router
app.get('/about', (req, res) => {
    res.send('home page')
})

// with router
const router = express.Router()
router.get('/', (req, res) => {
    res.send('home page')
})

module.exports = router;
