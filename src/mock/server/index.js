const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, { cors: { origin: 'http://localhost:3000' } })

const socketEvents = require('./socketEvents')

io.on('connection', socket => {
    socketEvents.forEach(event => socket.on(event.name, data => event.callback(socket, data)))
})

server.listen(3001, () => console.log('server is listening on port 3001'))