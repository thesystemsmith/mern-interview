if (cluster.isPrimary) {
    // fork()
} else {
    //do work
}

// example
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

// output
// $ node index.js
// Primary 3596 is running
// Worker 4324 started
// Worker 4520 started
// Worker 6056 started
// Worker 5644 started


// with pm2 
// npm install pm2 -g
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);

// sudo pm2 start index.js -i 4
// sudo pm2 start index.js -i max
