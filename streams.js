const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();


const server = require('http').createServer();

server.on('request', (req, res) => {

    // this will result in high memory consumption

    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;

    //     res.end(data);
    // });

    // better approach - streams
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);



// magic line
readableSrc.pipe(writableDest)

// readable.pipe(writable) 

// equals the below event based code

// readable.on('data', (chunk) => {
//     writable.write(chunk);
// });
// readable.on('end', () => {
//     writable.end();
// });



// read from one and write to another
const readable = fs.createReadStream('source.txt')
const writable = fs.createWriteStream('destination.txt')
readable.pipe(writable)

// Listening to Events
readable.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readable.on('end', () => {
    console.log('There is no more data to read.');
});

readable.on('error', (err) => {
    console.error('There was an error', err);
});

writable.on('finish', () => {
    console.log('Finished writing data.');
});