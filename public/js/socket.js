$(function () {
    
    const socket = io();

    //Obteniendo los elementos del DOM
    const $messageFrom = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    const $nickname = $('#nickname');
    const $destino = $('#destino');

    const $users = $('#usernames');

    //eventos
    $messageFrom.submit(e => {
        e.preventDefault();
        socket.emit('send message', {
            msg: $messageBox.val(),
            destino: $destino.val()
        });
        $messageBox.val('');
    });

    socket.on('new message', function (datos) {
        if(datos.destino == $nickname.val() || datos.nick == $nickname.val()) {
            $chat.append('<b>' + datos.nick + '</b>: ' + datos.msg + '<br>');
        }
    });

    socket.on('registrar', function () {
        console.log($nickname.val());
        socket.emit('new user', $nickname.val(), data => {
        });
    });

    socket.on('nicknames', data => {
        if(data.indexOf($destino.val()) == -1){
            $users.html(`<p>${$destino.val()} desconectado</P`);
        }else {
            $users.html(`<p>${$destino.val()} conectado</P`);
        }
    });
});