//funcion para enviar msj


function msj(){
    event.preventDefault()
    let message = document.getElementById('message').value
    //emito el evento message, que defini previamente en index.js
    socket.emit('message', message)
    document.getElementById('message').value = ""
}

