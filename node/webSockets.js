// Server-side WebSocket setup with Socket.io
const io = require('socket.io')(httpServer);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('Message:', msg);
        io.emit('chat message', msg);
    });
});