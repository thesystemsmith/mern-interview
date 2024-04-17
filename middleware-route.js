const express = require('express');
const app = express();

const startTime = (req, res, next) => {
    req.reqBeginningTime = Date.now();
    console.log(`Request ${req.url}  ${req.method} started at: ${req.reqBeginningTime}`);
    next();
};

app.get('/v1', (req, res) => {
    console.log('I am in V1 request');
    console.log(`req beginning time: ${req.reqBeginningTime}`);
    console.log('------------------------');
    
    res.send('success');
});

app.get('/v2', startTime, (req, res) => {
    console.log('I am in v2 request');
    console.log(`req beginning time: ${req.reqBeginningTime}`);
    req.timeTaken = Date.now() - req.reqBeginningTime;
    console.log(`Request ${req.url}  ${req.method} total time taken: ${req.timeTaken}`);
    console.log('------------------------');
    res.send('success');
});

app.listen(8000,(req,res)=>{
    console.log('server running on port 8000');
});