const filesData = require('../data/files')

const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')

const getFile = (socket, data) => {
    const files = getProjectContent(getUserProject(socket))?.content.files || null

    if (!files) return socket.emit('file', null)

    const foundFile = files.find(file => file.id === data) || null
    const foundFileData = filesData.find(file => file.id === data) || null

    if (!foundFile || !foundFileData) return socket.emit('file', null)

    const response = {
        file: foundFile,
        type: foundFileData.type,
        data: foundFileData.data
    }

    socket.emit('file', response)
}

module.exports = getFile