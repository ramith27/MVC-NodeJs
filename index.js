var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')().listen(server);
var path = require('path')
var fs = require('fs');

users=[];
connections = [];
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Routes Directory Access
fs.readdirSync('./routes').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./routes/' + file);
      route.routes(app);
  }
});

//Controller Directory Access
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

//Socket.io Directory Access
io.sockets.on('connection',function(socket){
	fs.readdirSync('./socket.io').forEach(function (file) {
		if(file.substr(-3) == '.js') {
				route = require('./socket.io/' + file);
				route.sockets(socket,io);
		}
	});
});

var PORT = process.env.PORT || 3000;
server.listen(PORT, function(){
    console.log("Listening on PORT " + process.env.PORT);
})
