//Conexion al socket
const socket = io('http://localhost:5000')

//Conexion a una sala
socket.emit('entrar')

//obtengo el primer elemento del documento con el id chat (le pongo el NUMERAL antes)
const DivChat = document.querySelector('#chat')
const AppendMessage = (message) => {
    DivChat.innerHTML += `<ul>${message}</ul>`
}

socket.on('push_message', AppendMessage)



