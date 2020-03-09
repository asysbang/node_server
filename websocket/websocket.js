const http = require('http');

const host = '127.0.0.1';

const port = 3000;

const io = require('socket.io');

let server = http.createServer((req, res) => {


});

let wsServer = io.listen(server);

wsServer.on('connection', sock => {

	console.log('connection');

	sock.on('aaa', function(a){

		console.log(a);

	})

});

server.listen(port, host, ()=>{

	console.log('server start : %s:%d', host, port);

});


