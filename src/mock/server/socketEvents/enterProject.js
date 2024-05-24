const getProjectData = require('../functions/getProjectData')
const getProjectContent = require('../functions/getProjectContent')

const enterProject = (socket, data) => {
    const response = {
        project: getProjectData(data),
        content: getProjectContent(data)
    }

    if (!response.project) return socket.emit('content', null)

    socket.leaveAll()
    socket.join(data)

    socket.emit('content', response)
}

module.exports = enterProject