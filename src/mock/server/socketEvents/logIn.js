const { projects } = require('../storage')
const { responde, respondeError } = require('../functions/responde')

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

    if (!project) return respondeError(socket, 'logged_in', 'Nie udało się zalogować do systemu.', true)

    socket.join(project.id)
    response.project.selectedProject = project

    responde(socket, 'logged_in', response)
}

module.exports = logIn