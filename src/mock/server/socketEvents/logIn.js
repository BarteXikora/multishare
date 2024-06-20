const { projects } = require('../storage')

const logIn = (socket, data) => {
    const response = {
        userData: { userName: 'Użytkownik' },
        project: {
            allProjects: projects,
            selectedProject: null
        }
    }

    if (data.projectId === null) data.projectId = projects[0].id

    socket.leaveAll()

    const project = projects.find(p => p.id === data.projectId)

    if (!project) return socket.emit('logged_in', { status: 'ERROR', message: 'Projekt nie istnieje' })

    socket.join(project.id)
    response.project.selectedProject = project

    socket.emit('logged_in', response)
}

module.exports = logIn