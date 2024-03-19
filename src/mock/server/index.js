const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, { cors: { origin: 'http://localhost:3000' } })

const projects = require('./data/projects')
const contentDefaultCopy = require('./data/contentDefault')
const contentProject1Copy = require('./data/contentProject1')
const filesCopy = require('./data/files')

let contentDefault = contentDefaultCopy
let contentProject1 = contentProject1Copy

io.on('connection', (socket) => {
    console.log('user logged in, id:', socket.id)

    socket.on('get_projects', () => {
        socket.emit('projects', projects)
    })

    socket.on('enter_project', data => {
        let response = {
            project: data === 0 ? projects[0] : data === 1 ? projects[1] : null,
            content: data === 0 ? contentDefault : data === 1 ? contentProject1 : null
        }

        if (data === 0 || data === 1) socket.join(data)

        socket.emit('content', response)
    })

    socket.on('get_file', data => {
        let files = contentDefaultCopy.files

        let foundFile = files.filter(f => f.id === data)
        if (foundFile.length === 0) foundFile = null

        let foundFileData = filesCopy.filter(f => f.id === data)
        if (foundFileData.length === 0) foundFileData = null

        if (foundFile === null || foundFileData === null) return socket.emit('file', null)

        let response = {
            file: foundFile[0],
            type: foundFileData[0].type,
            data: foundFileData[0].data
        }

        socket.emit('file', response)
    })
})

server.listen(3001, () => console.log('server is listening on port 3001'))