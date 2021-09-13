//importo server
const app = require('./server')
//Socket.io
const SocketIo = require('socket.io')


//llamo al a variable port que defini en server <3
const server = app.listen(app.get('port'),() => {
    console.log('Puerto : ' + 'http://localhost:'+app.get('port'));
})

//a socket le paso el servidor (server) para que usen el mismo puerto
//configuracion de socket-io
const io = SocketIo(server)

//espera un evento, (connection) que espera que le llegue un socket
//cuando llegue un socket, imprime por pantalla el id
io.on('connection', (socket) => {
    console.log('[+] New connection : ' + socket.id );
    //espero un evento (mensaje)
    socket.on('entrar', () => {
        socket.join('Sala1')
        console.log('[+] Entrando en la sala')
    })
    //recibo al evento message, que trae con el, al obj_message.
    //Luego, emitimos el obj_messaje en la sala 1, con el evento push_message
    socket.on('message', (obj_message) => {
            io.in('Sala1').emit('push_message', obj_message)
        })
    

})
















