const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')

const getContent = (socket) => {
    socket.emit('content', getProjectContent(getUserProject(socket)))
}

module.exports = getContent