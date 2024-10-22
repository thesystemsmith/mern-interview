const express = require('express');
const multer = require('multer');
const app = express();

// Multer middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Route handler for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    // File uploaded successfully
    res.send('File uploaded');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});