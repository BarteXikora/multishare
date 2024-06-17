const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjectContent = require('../functions/setProjectContent')

const uploadRequest = (socket, data) => {
    const MAX_CONCURRENT_UPLOADS = 3
    const _MAX_UPLOAD_TIME = 15000

    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    let queue = []
    let activeUploads = 0

    data.forEach(file => queue.push(file))

    const mockedUploadFile = async (file, callback) => {
        socket.emit('upload_in_progress', file.uploadId)

        setTimeout(() => {
            const newFile = {
                id: Math.floor(Math.random() * 999999999),
                parentFolder: file.location,
                name: file.name,
                extension: file.extension.toUpperCase(),
                details: {},
                star: false
            }

            currentContent.content.files.push(newFile)

            socket.to(currentProject).emit('upload_response', newFile)
            socket.emit('upload_end', file.uploadId)

            callback()

        }, Math.floor(Math.random() * _MAX_UPLOAD_TIME))
    }

    const processQueue = () => {
        const done = () => {
            activeUploads--

            processQueue()

            if (queue.length === 0 && activeUploads === 0) {
                setProjectContent(currentProject, currentContent)
            }
        }

        while (queue.length > 0 && activeUploads < MAX_CONCURRENT_UPLOADS) {
            activeUploads++

            const file = queue.shift()

            mockedUploadFile(file, done)
        }
    }

    processQueue()
}

module.exports = uploadRequest