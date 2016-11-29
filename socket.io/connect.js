module.exports.sockets = function(socket,io) {

  connections.push(socket);
  console.log('Connected : %s socket',connections.length);

  //Disconnect
  socket.on('disconnect',function(data) {
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected : %s socket',connections.length);
  });


}
