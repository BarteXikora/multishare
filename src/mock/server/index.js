const util = require('util')

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, { cors: { origin: 'http://localhost:3000' } })

const getPath = require('./functions/getPath')

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

        if (room === 0) contentDefault.content.folders.push(data)
        else if (room === 1) contentProject1.content.folders.push(data)

        socket.to(room).emit('new_folder', data)
    })

    socket.on('move_to_trash', data => {
        console.log('move_to_trash', data)

        const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
        if (room === -1) return socket.emit('moved_to_trash', null)

        let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

        const allToTrash = { view: { folders: data.folders, files: data.files }, contained: { folders: [], files: [] } }

        allToTrash.view.folders.forEach(element => {
            currentContent.content.folders.forEach(folder => {
                if (getPath(currentContent.content.folders, folder.id).includes(element))
                    allToTrash.contained.folders.push(folder.id)
            })

            currentContent.content.files.forEach(file => {
                if (getPath(currentContent.content.folders, file.parentFolder).includes(element))
                    allToTrash.contained.files.push(file.id)
            })
        })

        allToTrash.contained.folders.forEach(element => {
            if (allToTrash.view.folders.includes(element))
                allToTrash.contained.folders.splice(allToTrash.contained.folders.indexOf(element), 1)
        })

        // ---

        allToTrash.view.folders.forEach(folderId => {
            let folder = currentContent.content.folders.find(f => f.id === folderId)

            if (folder) {
                currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
                currentContent.trash.view.folders.push(folder)
            }
        })

        allToTrash.view.files.forEach(fileId => {
            let file = currentContent.content.files.find(f => f.id === fileId)

            if (file) {
                currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
                currentContent.trash.view.files.push(file)
            }
        })

        allToTrash.contained.folders.forEach(folderId => {
            let folder = currentContent.content.folders.find(f => f.id === folderId)

            if (folder) {
                currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
                currentContent.trash.contained.folders.push(folder)
            }
        })

        allToTrash.contained.files.forEach(fileId => {
            let file = currentContent.content.files.find(f => f.id === fileId)

            if (file) {
                currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
                currentContent.trash.contained.files.push(file)
            }
        })

        // ---

        if (room === 0) contentDefault = currentContent
        else contentProject1 = currentContent

        socket.to(room).emit('moved_to_trash', allToTrash)
    })

    socket.on('delete_forever', data => {
        console.log('delete_forever', data)

        const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
        if (room === -1) return socket.emit('deleted_forever', null)

        let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

        const allContent = {
            folders: [...currentContent.content.folders, ...currentContent.trash.contained.folders],
            files: [...currentContent.content.files, ...currentContent.trash.contained.files]
        }

        data.folders.forEach(folder => {
            allContent.folders.forEach(element => {
                let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.id)
                path.shift()

                if (path.includes(folder)) data.folders.push(element.id)
            })

            allContent.files.forEach(element => {
                let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.parentFolder)

                if (path.includes(folder)) data.files.push(element.id)
            })
        })

        data.folders.forEach(folder => {
            let found = currentContent.content.folders.find(f => f.id === folder)
            if (found) return currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

            found = currentContent.trash.view.folders.find(f => f.id === folder)
            if (found) return currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)

            found = currentContent.trash.contained.folders.find(f => f.id === folder)
            if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
        })

        data.files.forEach(file => {
            let found = currentContent.content.files.find(f => f.id === file)
            if (found) return currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

            found = currentContent.trash.view.files.find(f => f.id === file)
            if (found) return currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)

            found = currentContent.trash.contained.files.find(f => f.id === file)
            if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
        })

        if (room === 0) contentDefault = currentContent
        else contentProject1 = currentContent

        socket.to(room).emit('deleted_forever', data)
    })
})

server.listen(3001, () => console.log('server is listening on port 3001'))