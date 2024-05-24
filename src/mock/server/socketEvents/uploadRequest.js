const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')

const uploadRequest = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    let uploadedFiles = []

    data.data.forEach(f => {
        uploadedFiles.push({
            id: Math.floor(Math.random() * 999999999),
            parentFolder: data.location,
            name: f.name,
            extension: f.extension.toUpperCase(),
            details: {},
            star: false
        })
    })

    currentContent.content.files = [...currentContent.content.files, ...uploadedFiles]

    setProjestContent(currentProject, currentContent)

    socket.to(currentProject).emit('upload_response', uploadedFiles)
}

module.exports = uploadRequest