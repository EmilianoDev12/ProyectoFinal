module.exports = function (io) {

  let nicknames = [];

  io.on('connection', (socket) => {
    io.sockets.emit('registrar');

    socket.on('new user', (data, cb) => {
      socket.nickname = data;
      if(nicknames.indexOf(data) != -1) {
        cb(false);
        actualizar();
      }else {
        cb(true);
        nicknames.push(socket.nickname);
        console.log(nicknames);
        actualizar();
      }
    });

    socket.on('send message', datos => {
      io.sockets.emit('new message', {
        msg: datos.msg,
        destino: datos.destino,
        nick: socket.nickname
      });
    });

    socket.on('disconnect', data => {
      if(!socket.nickname) return;
      nicknames.splice(nicknames.indexOf(socket.nickname),1);
      actualizar();
    });

    function actualizar() {
      io.sockets.emit('nicknames', nicknames);
    }
  });
}