function socketClient() { 
    var io = require('socket.io-client'); 
    var socket = io.connect('127.0.0.1:2000'); 
    socket.on('connect', function () { 
        console.log('connect'); 
    });
    socket.emit('qw'); 
}

socketClient();