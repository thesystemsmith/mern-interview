//using res.send 

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
    res.send(htmlContent);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}); 
