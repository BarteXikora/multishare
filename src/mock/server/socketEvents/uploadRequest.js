const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjectContent = require('../functions/setProjectContent')

const uploadRequest = (socket, data) => {
    const MAX_CONCURRENT_UPLOADS = 3
    const SEND_PERCENT_INTERVAL = 1500
    const _MAX_UPLOAD_TIME = 15000

    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    let queue = []
    let activeUploads = 0

    data.forEach(file => queue.push(file))

    const mockedUploadFile = async (file, callback) => {
        socket.emit('upload_in_progress', file.uploadId)

        const randomUploadTime = Math.floor(Math.random() * _MAX_UPLOAD_TIME)

        let currentTime = 0
        const percentInterval = setInterval(() => {
            currentTime += SEND_PERCENT_INTERVAL

            socket.emit('upload_percent', { uploadId: file.uploadId, uploadPercent: Math.floor((currentTime / randomUploadTime) * 100) })

        }, SEND_PERCENT_INTERVAL)

        setTimeout(() => {
            const newFile = {
                id: Math.floor(Math.random() * 999999999),
                parentFolder: file.parentFolder,
                name: file.name,
                extension: file.extension.toUpperCase(),
                details: {},
                star: false
            }

            currentContent.content.files.push(newFile)

            socket.to(currentProject).emit('upload_response', newFile)
            socket.emit('upload_end', file.uploadId)

            callback()
            clearInterval(percentInterval)

        }, randomUploadTime)
    }

    const processQueue = () => {
        const done = () => {
            activeUploads--

            processQueue()

            setProjectContent(currentProject, currentContent)
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