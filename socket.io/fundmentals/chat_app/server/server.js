// Imported libraries
const express = require('express');
const cors = require('cors');
const socket = require('socket.io')

// Global variables
const app = express();
const port = 8000;

// Express middleware
app.use(cors());

// Express server
const server = app.listen(8000, () => 
    console.log(`Listening on port: ${port}`));

// Socket creation
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

// Array for storing joined users
let users = []

// Built-in event. Activates when a user connects
io.on('connection', socket => {
    console.log('socket id: ' + socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Listening for event from client and receiving data, i.e., username
    socket.on('join-server', username => {
        console.log('Username:', username);
        // create user object and add to users array
        let newUser = {
            id: socket.id,
            username
        }
        users.push(newUser);
        console.log(users);
        // Send users array to all clients, including the client that just connected
        io.emit('new-user-joined', users);
    });

    // Listening for messages from users
    socket.on('send-message', data => {
        console.log(data)
        io.emit('send-message-to-all-clients', data);
    });
})