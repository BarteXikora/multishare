const util = require('util')

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, { cors: { origin: 'http://localhost:3000' } })

const getUserProject = require('./functions/getUserProject')
const setProjectContent = require('./functions/setProjectContent')
const getProjectContent = require('./functions/getProjectContent')
const getPath = require('./functions/getPath')

const projects = require('./data/projects')
const projectsContent = []
projectsContent.push({ id: projects[0].id, content: require('./data/contentDefault') })
projectsContent.push({ id: projects[1].id, content: require('./data/contentProject1') })

// const projects = require('./data/projects')
// const contentDefaultCopy = require('./data/contentDefault')
// const contentProject1Copy = require('./data/contentProject1')
// const filesCopy = require('./data/files')

// let contentDefault = contentDefaultCopy
// let contentProject1 = contentProject1Copy

// io.on('connection', (socket) => {
//     console.log('user logged in, id:', socket.id)

//     socket.on('get_projects', () => {
//         socket.emit('projects', projects)
//     })

//     socket.on('enter_project', data => {
//         socket.leaveAll()

//         let response = {
//             project: data === 0 ? projects[0] : data === 1 ? projects[1] : null,
//             content: data === 0 ? contentDefault : data === 1 ? contentProject1 : null
//         }

//         if (data === 0 || data === 1) socket.join(data, { roomID: data })
//         console.log('joined', socket.rooms)

//         socket.emit('content', response)
//     })

//     socket.on('get_file', data => {
//         let files = contentDefaultCopy.files

//         let foundFile = files.filter(f => f.id === data)
//         if (foundFile.length === 0) foundFile = null

//         let foundFileData = filesCopy.filter(f => f.id === data)
//         if (foundFileData.length === 0) foundFileData = null

//         if (foundFile === null || foundFileData === null) return socket.emit('file', null)

//         let response = {
//             file: foundFile[0],
//             type: foundFileData[0].type,
//             data: foundFileData[0].data
//         }

//         socket.emit('file', response)
//     })

//     socket.on('add_folder', data => {
//         data.id = Math.floor(Math.random() * 999999999)
//         data.details = {
//             createdDate: new Date().toLocaleString(),
//             lastModificationDate: new Date().toLocaleString()
//         }

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1

//         if (room === 0) contentDefault.content.folders.push(data)
//         else if (room === 1) contentProject1.content.folders.push(data)

//         socket.to(room).emit('new_folder', data)
//     })

//     socket.on('move_to_trash', data => {
//         console.log('move_to_trash', data)

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
//         if (room === -1) return socket.emit('moved_to_trash', null)

//         let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

//         const allToTrash = { view: { folders: data.folders, files: data.files }, contained: { folders: [], files: [] } }

//         allToTrash.view.folders.forEach(element => {
//             currentContent.content.folders.forEach(folder => {
//                 if (getPath(currentContent.content.folders, folder.id).includes(element))
//                     allToTrash.contained.folders.push(folder.id)
//             })

//             currentContent.content.files.forEach(file => {
//                 if (getPath(currentContent.content.folders, file.parentFolder).includes(element))
//                     allToTrash.contained.files.push(file.id)
//             })
//         })

//         allToTrash.contained.folders.forEach(element => {
//             if (allToTrash.view.folders.includes(element))
//                 allToTrash.contained.folders.splice(allToTrash.contained.folders.indexOf(element), 1)
//         })

//         // ---

//         allToTrash.view.folders.forEach(folderId => {
//             let folder = currentContent.content.folders.find(f => f.id === folderId)

//             if (folder) {
//                 currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
//                 currentContent.trash.view.folders.push(folder)
//             }
//         })

//         allToTrash.view.files.forEach(fileId => {
//             let file = currentContent.content.files.find(f => f.id === fileId)

//             if (file) {
//                 currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
//                 currentContent.trash.view.files.push(file)
//             }
//         })

//         allToTrash.contained.folders.forEach(folderId => {
//             let folder = currentContent.content.folders.find(f => f.id === folderId)

//             if (folder) {
//                 currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
//                 currentContent.trash.contained.folders.push(folder)
//             }
//         })

//         allToTrash.contained.files.forEach(fileId => {
//             let file = currentContent.content.files.find(f => f.id === fileId)

//             if (file) {
//                 currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
//                 currentContent.trash.contained.files.push(file)
//             }
//         })

//         // ---

//         if (room === 0) contentDefault = currentContent
//         else contentProject1 = currentContent

//         socket.to(room).emit('moved_to_trash', allToTrash)
//     })

//     socket.on('delete_forever', data => {
//         console.log('delete_forever', data)

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
//         if (room === -1) return socket.emit('deleted_forever', null)

//         let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

//         const allContent = {
//             folders: [...currentContent.content.folders, ...currentContent.trash.contained.folders],
//             files: [...currentContent.content.files, ...currentContent.trash.contained.files]
//         }

//         data.folders.forEach(folder => {
//             allContent.folders.forEach(element => {
//                 let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.id)
//                 path.shift()

//                 if (path.includes(folder)) data.folders.push(element.id)
//             })

//             allContent.files.forEach(element => {
//                 let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.parentFolder)

//                 if (path.includes(folder)) data.files.push(element.id)
//             })
//         })

//         data.folders.forEach(folder => {
//             let found = currentContent.content.folders.find(f => f.id === folder)
//             if (found) return currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

//             found = currentContent.trash.view.folders.find(f => f.id === folder)
//             if (found) return currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)

//             found = currentContent.trash.contained.folders.find(f => f.id === folder)
//             if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
//         })

//         data.files.forEach(file => {
//             let found = currentContent.content.files.find(f => f.id === file)
//             if (found) return currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

//             found = currentContent.trash.view.files.find(f => f.id === file)
//             if (found) return currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)

//             found = currentContent.trash.contained.files.find(f => f.id === file)
//             if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
//         })

//         if (room === 0) contentDefault = currentContent
//         else contentProject1 = currentContent

//         socket.to(room).emit('deleted_forever', data)
//     })

//     socket.on('restore_from_trash', data => {
//         data = {
//             folders: data.folders.map(f => f.id),
//             files: data.files.map(f => f.id)
//         }

//         console.log('restore_from_trash', data)

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
//         if (room === -1) return socket.emit('restored_from_trash', null)

//         let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

//         // console.log('\n\n before: ', util.inspect(currentContent, false, null, true))

//         const allFolders = [
//             ...currentContent.content.folders,
//             ...currentContent.trash.view.folders,
//             ...currentContent.trash.contained.folders
//         ]

//         let foldersBuffer = []

//         data.folders.forEach(folderId => {
//             const found = currentContent.trash.view.folders.find(f => f.id === folderId)

//             if (found) foldersBuffer.push(found)
//         })

//         currentContent.trash.contained.folders.forEach(folder => {
//             const path = getPath(allFolders, folder.id)
//             path.shift()

//             // console.log('\n\n', folder.name, 'whole path: ', path)

//             let isToRestore = false

//             data.folders.forEach(folderId => {
//                 if (!path.includes(folderId)) return

//                 let indexOfCurrent = path.indexOf(folderId)
//                 path.splice(indexOfCurrent, path.length - indexOfCurrent)

//                 // console.log(folder.name, 'path to current', path)

//                 let includesParentInTrash = false
//                 path.forEach(element => {
//                     if (currentContent.trash.view.folders.find(f => f.id === element)) includesParentInTrash = true
//                 })

//                 // console.log('includesParentInTrash:', includesParentInTrash)

//                 if (!includesParentInTrash) isToRestore = true
//             })

//             if (isToRestore) foldersBuffer.push(folder)
//         })

//         // console.log('\n\nfolders effect: ', foldersBuffer, '\n\n')

//         let filesBuffer = []

//         data.files.forEach(fileId => {
//             const found = currentContent.trash.view.files.find(f => f.id === fileId)

//             if (found) filesBuffer.push(found)
//         })

//         currentContent.trash.contained.files.forEach(file => {
//             if (foldersBuffer.find(f => f.id === file.parentFolder)) filesBuffer.push(file)
//         })

//         // console.log('files effect', filesBuffer)

//         // ====================================================================

//         let response = { folders: [], files: [] }

//         foldersBuffer.forEach(folder => {
//             let found = currentContent.trash.view.folders.find(f => f.id === folder.id)

//             if (found) currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)
//             else {
//                 found = currentContent.trash.contained.folders.find(f => f.id === folder.id)

//                 if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
//             }

//             if (![...currentContent.content.folders, ...foldersBuffer].find(f => f.id === folder.parentFolder)) folder.parentFolder = -1
//             currentContent.content.folders.push(folder)

//             response.folders.push({ id: folder.id, parentFolder: folder.parentFolder })
//         })

//         filesBuffer.forEach(file => {
//             let found = currentContent.trash.view.files.find(f => f.id === file.id)

//             if (found) currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)
//             else {
//                 found = currentContent.trash.contained.files.find(f => f.id === file.id)

//                 if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
//             }

//             if (![...currentContent.content.folders, ...foldersBuffer].find(f => f.id === file.parentFolder)) file.parentFolder = -1
//             currentContent.content.files.push(file)

//             response.files.push({ id: file.id, parentFolder: file.parentFolder })
//         })

//         // console.log('\n\n after: ', util.inspect(currentContent, false, null, true))

//         if (room === 0) contentDefault = { ...currentContent }
//         else contentProject1 = { ...currentContent }

//         socket.to(room).emit('restored_from_trash', response)
//     })

//     socket.on('update_content', data => {
//         console.log('update_content', data)

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
//         if (room === -1) return socket.emit('updated_content', null)

//         let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

//         // console.log('\n\n before: ', util.inspect(currentContent.content, false, null, true))

//         data.folders.forEach(folder => {
//             let found = currentContent.content.folders.find(f => f.id === folder.id)
//             if (!found) return

//             currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

//             found = { ...found, ...folder }

//             currentContent.content.folders.push(found)
//         })

//         data.files.forEach(file => {
//             let found = currentContent.content.files.find(f => f.id === file.id)
//             if (!found) return

//             currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

//             found = { ...found, ...file }

//             currentContent.content.files.push(found)
//         })

//         // console.log('\n\n after: ', util.inspect(currentContent.content, false, null, true))

//         if (room === 0) contentDefault = { ...currentContent }
//         else contentProject1 = { ...currentContent }

//         socket.to(room).emit('updated_content', data)
//     })

//     socket.on('download_request', data => {
//         console.log('download_request', data)

//         socket.emit('download_response', { type: 'RES', data: { data: 'Work in progress...', name: 'Work in progress.txt' } })
//     })

//     socket.on('upload_request', data => {
//         console.log('upload_request' /*, util.inspect(data, false, null, true)*/)

//         const room = socket.rooms.has(0) ? 0 : socket.rooms.has(1) ? 1 : -1
//         if (room === -1) return socket.emit('upload_response', null)

//         let currentContent = room === 0 ? { ...contentDefault } : { ...contentProject1 }

//         let uploadedFiles = []

//         data.data.forEach(f => {
//             uploadedFiles.push({
//                 id: Math.floor(Math.random() * 999999999),
//                 parentFolder: data.location,
//                 name: f.name,
//                 extension: f.extension.toUpperCase(),
//                 details: {},
//                 star: false
//             })
//         })

//         // console.log(util.inspect(uploadedFiles, false, null, true))

//         currentContent.content.files = [...currentContent.content.files, ...uploadedFiles]

//         if (room === 0) contentDefault = { ...currentContent }
//         else contentProject1 = { ...currentContent }

//         socket.to(room).emit('upload_response', uploadedFiles)
//     })
// })

server.listen(3001, () => console.log('server is listening on port 3001'))