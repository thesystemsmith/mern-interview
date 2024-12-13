const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user routes accessed')
})

router.get('/:id', (req, res) => {
    const userId = req.params.id
    res.send(`user id is: ${userId}`)
})

module.exports = router