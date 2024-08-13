// create a simple server using node
let http = require('http')

http.createServer((req, res)=> {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.end('hello world')
}).listen(3000)


// ESLint can be used with any IDE to ensure a consistent coding style which further helps in maintaining the codebase. 


// callback hell
async_A(function () {
    async_B(function () {
        async_C(function () {
            async_D(function () {
                // some processing
            });
        });
    });
});


// synchronous code
const listItems = function (items) {
    items.forEach(function (item) {
        console.log(item)
    })
}

const items = ["Buy milk", "Buy coffee"]

listItems(items)


// asynchronous code
setTimeOut(function(){
    return( console.log("Hello World!") )
}, 3000)



// how to implement concurrency in Node.js using the async module? 
const async = require('async')

async.parallel([
    function(callback){
        // api request 1
    },
    function(callback){
        // api request 2
    },
    function(callback){
        // api request 3
    },
],function(err, results){
    // process results
})


// clustering in node
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const numWorkers = os.cpus().length;

    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died');
        cluster.fork();
    });
} else {
    // Start server
}


