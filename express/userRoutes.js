const express = require('express');
const router = express.Router();
const postRoutes = require('./postRoutes')

router.get('/', (req, res) => {
    res.send('user routes accessed')
})

router.get('/:id', (req, res) => {
    const userId = req.params.id
    res.send(`user id is: ${userId}`)
})

//nest the post router
router.use('/:id/posts', postRoutes)

module.exports = router