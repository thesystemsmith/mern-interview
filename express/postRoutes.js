const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of user posts');
});

router.get('/:postId', (req, res) => {
    const { postId } = req.params;
    res.send(`Post ID: ${postId}`);
});

module.exports = router;