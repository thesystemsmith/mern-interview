// Streams in NodeJS are a way to move data from a source to a destination in a bit-by-bit (or let’s say, in chunks), to avoid any Out-of-Memory Errors.
// buffer and pipe - water and 2 buckets analogy

// read streams - data, end, error / binary, strings, objects

const fs = require('fs')

const readStream = fs.createReadStream('./someVideo.MOV')

readStream.on('data', chunk => {
    console.log(`size: ${chunk.length}`)
})

readStream.on('end', () => {
    console.log(`read stream finished`)
})

readStream.on('error', error => {
    console.log(`error: ${error}`)
})

// flowing to non flowing and vice versa - stream mode
readStream.pause()

process.stdin.on('data', chunk => {
    if(chunk.toString().trim() === 'finish'){
        readStream.resume()
    }
    readStream.read()
})


// write streams - write, end
// backpressure - funnel is full 
// high watermark - how much water can funnel accomodate

// handling backpressure example

const highWaterMark = 1024

const readable = fs.createReadStream('./someVideo.MOV')
const writable = fs.createWriteStream('./copy.mp4', {highWaterMark})

const backpressureCount = 0 

readable.on('data', chunk => {
    const result = writable.write(chunk) // checks if there is space 
    if(!result){
        backpressureCount++
        readable.pause() // stop reading to gain space
    }
})

// write now
writable.on('drain', ()=>{
    readable.resume()
})

readable.on('end', () => {
    console.log(`read stream finished`)
    writable.end()
})

readable.on('error', error => {
    console.log(`error: ${error}`)
})


// reduce this code complexity by using pipe
process.stdin.pipe(writable).on('error', err => {
    console.log(`error: ${err}`)
})

// duplex stream
// Duplex streams represent the middle section of the pipelines, meaning, a duplex stream can be piped in between a readable and a writable stream.

//Transform streams are special kind of duplex streams. Instead of simply passing the data from the read stream to the write stream, transform streams change the data