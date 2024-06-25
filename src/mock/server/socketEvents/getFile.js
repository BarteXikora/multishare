const filesData = require('../data/files')

const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')

const { responde, respondeError } = require('../functions/responde')

const getFile = (socket, data) => {
    const files = getProjectContent(getUserProject(socket))?.content.files || null

    if (!files) respondeError(socket, 'file', 'Nie udało się wczytać pliku.', true)

    const foundFile = files.find(file => file.id === data) || null
    const foundFileData = filesData.find(file => file.id === data) || null

    if (!foundFile || !foundFileData) return respondeError(socket, 'file', 'Nie udało się wczytać pliku.', true)
    const response = {
        file: foundFile,
        type: foundFileData.type,
        data: foundFileData.data
    }

    responde(socket, 'file', response)
}

module.exports = getFile