const { projects } = require('../storage')
const { responde } = require('../functions/responde')

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

    let project = projects.find(p => p.id === data.projectId)
    let switchedToDefault = false

    if (!project) {
        project = projects[0]
        switchedToDefault = true
    }

    socket.join(project.id)
    response.project.selectedProject = project

    responde(
        socket,
        'logged_in',
        response,
        false,
        switchedToDefault ? `Wybrany projekt nie istnieje. Przełączono na projekt domyślny (${project.name}).` : null
    )
}

module.exports = logIn