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
        socket.leaveAll()

        let response = {
            project: data === 0 ? projects[0] : data === 1 ? projects[1] : null,
            content: data === 0 ? contentDefault : data === 1 ? contentProject1 : null
        }

        if (data === 0 || data === 1) socket.join(data)
        console.log('joined', socket.rooms)

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

    socket.on('add_folder', data => {
        data.id = Math.floor(Math.random() * 999999999)
        data.details = {
            createdDate: new Date().toLocaleString(),
            lastModificationDate: new Date().toLocaleString()
        }

        const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1

        if (room === 0) contentDefault.folders.push(data)
        else if (room === 1) contentProject1.folders.push(data)

        socket.to(room).emit('new_folder', data)
    })

    const getPath = (content, folderId) => {
        let path = []
        let lastFolder = folderId

        while (lastFolder !== -1) {
            const folderFound = content.filter(element => element.id === lastFolder)

            if (folderFound.length !== 1) return []

            if (path.filter(p => p === folderFound[0].id).length !== 0) return []

            path.push(folderFound[0].id)
            lastFolder = folderFound[0].parentFolder
        }

        return path
    }

    socket.on('move_to_trash', data => {
        console.log('move_to_trash', data)

        const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1

        let currentContent = room === 0 ? { ...contentDefault } : room === 1 ? { ...contentProject1 } : null
        if (currentContent === null) return socket.emit('moved_to_trash', null)

        const allElementsToChange = { folders: data.folders, files: data.files }
        data.folders.forEach(element => {
            currentContent.folders.forEach(folder =>
                getPath(currentContent.folders, folder.id).includes(element) && allElementsToChange.folders.push(folder.id)
            )

            currentContent.files.forEach(file =>
                getPath(currentContent.folders, file.parentFolder).includes(element) && allElementsToChange.files.push(file.id)
            )
        })

        console.log('ALL', allElementsToChange)

        allElementsToChange.folders.forEach(element => {
            let newFolders = currentContent.folders.map(f => f.id === element ? { ...f, isInTrash: true } : f)

            currentContent.folders = newFolders

            if (room === 0) contentDefault.folders = newFolders
            else contentProject1.folders = newFolders
        })

        allElementsToChange.files.forEach(element => {
            let newFiles = currentContent.files.map(f => f.id === element ? { ...f, isInTrash: true } : f)

            currentContent.files = newFiles

            if (room === 0) contentDefault.files = newFiles
            else contentProject1.files = newFiles
        })

        socket.to(room).emit('moved_to_trash', data)
    })
})

server.listen(3001, () => console.log('server is listening on port 3001'))