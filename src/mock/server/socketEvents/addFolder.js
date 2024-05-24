const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')

const addFolder = (socket, data) => {
    data.id = Math.floor(Math.random() * 999999999)
    data.details = {
        createdDate: new Date().toLocaleString(),
        lastModificationDate: new Date().toLocaleString()
    }

    const currentProject = getUserProject(socket)

    const newContent = getProjectContent(currentProject)
    newContent.content.folders.push(data)

    setProjestContent(currentProject, newContent)

    socket.to(currentProject).emit('new_folder', data)
}

module.exports = addFolder