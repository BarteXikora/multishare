const getUserProject = require('./getUserProject')

const responde = (socket, event, data, toProject = false) => {
    const currentProject = getUserProject(socket)

    const res = { success: true, data }

    if (toProject) return socket.to(currentProject).emit(event, res)
    socket.emit(event, res)
}

const respondeError = (socket, event, message, fatal = false) => {
    socket.emit(event, { success: false, message, fatal })
}

module.exports = { responde, respondeError }