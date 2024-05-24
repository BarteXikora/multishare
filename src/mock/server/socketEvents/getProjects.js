const { projects } = require('../storage')

const getProjects = (socket, data) => {
    socket.emit('projects', projects)
}

module.exports = getProjects