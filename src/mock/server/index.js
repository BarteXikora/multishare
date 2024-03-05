const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, { cors: { origin: 'http://localhost:3000' } })

io.on('connection', (socket) => {
    console.log('user logged in, id:', socket.id)
})

server.listen(3001, () => console.log('server is listening on port 3001'))