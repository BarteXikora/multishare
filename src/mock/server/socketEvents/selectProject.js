const { projects } = require('../storage')

const selectProject = (socket, data) => {
    console.log('select', data)

    const foundProject = projects.find(project => project.id === data)

    if (!foundProject) return socket.emit('selected_project', null)

    socket.leaveAll()
    socket.join(foundProject.id)

    socket.emit('selected_project', data)
}

module.exports = selectProject