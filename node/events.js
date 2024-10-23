const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Event listener for 'message' event
eventEmitter.on('message', (msg) => {
    console.log('Message received:', msg);
});

// Emitting 'message' event
eventEmitter.emit('message', 'Hello, Node.js!');
