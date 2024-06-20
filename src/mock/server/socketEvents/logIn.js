const { projects } = require('../storage')

const logIn = (socket) => {
    const response = {
        userData: { userName: 'Użytkownik' },
        project: {
            allProjects: projects,
            selectedProject: projects[0]
        }
    }

    socket.leaveAll()
    socket.join(projects[0].id)

    socket.emit('logged_in', response)
}

module.exports = logIn