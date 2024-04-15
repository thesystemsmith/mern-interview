/**
*  Simply put, a Buffer is a way to store and manipulate binary data in Node.js.
*  Binary data refers to data that consists of binary values, as opposed to text data, which consists of characters and symbols.
*  Examples of binary data include images, audio and video files, and raw data from a network.
*/

const myBuffer = Buffer.from('Hello, world!');
const slice = myBuffer.slice(0, 5);
console.log(slice.toString()); // Output: "Hello"

const firstBuffer = Buffer.from('Hello, ');
const secondBuffer = Buffer.from('world!');
const combinedBuffer = Buffer.concat([firstBuffer, secondBuffer]);
console.log(combinedBuffer.toString()); // Output: "Hello, world!"

