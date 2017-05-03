// Import the Express module
var express = require('express');

// Import the 'path' module (packaged with Node.js)
var path = require('path');

// Create a new instance of Express
var app = express();

// Import the AWS module
var aws = require("aws-sdk");

// Import the game files
var poker = require('./poker');

// Serve static html, js, css, and image files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Create a node.js based http server on port 8080
var server = require('http').createServer(app).listen(process.env.PORT || 8080);

// Create a Socket.IO server and attach it to the http server
var io = require('socket.io').listen(server);
console.log("Server Started");

// Listen for Socket.IO connections. Once connected, start the game logic.
io.sockets.on('connection', function(socket) {
    console.log('Client Connected');

    // Handle login
    socket.on('login', function(login_info) {
        console.log('Client attempting login...');
        if(login_info.username == "user" && login_info.password == "pass") {
            socket.emit('login', { message: 'success', session: login_info.username });
        }
        else {
            socket.emit('login', { message: 'Wrong username or password', session: ''});
        }
    });

    // Handle the creation of a new account
    socket.on('newAccount', function() {
        console.('Client attempting to create a new account');
    })

    // Listen for Socket.IO disconections.
    socket.on('disconnect', function() {
        console.log('Client Disconnected');
    });
});
