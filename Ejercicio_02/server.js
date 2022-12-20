/* Importamos nuestras dependencias */
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

/* Escribir funcionalidades del servidor */
app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('mensaje', data => {
        io.sockets.emit('mensajes', data);
    })
})

/* Configurar el servidor */
const PORT = 8080
const srv = server.listen(PORT, function() {
    console.log('Servidor HTTP con WebSockets escuchando en el puerto: ', PORT);
}) 
srv.on('error', error => console.log('Error en servidor: ', error))