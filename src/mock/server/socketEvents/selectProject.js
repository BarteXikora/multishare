const { projects } = require('../storage')
const { responde, respondeError } = require('../functions/responde')

const selectProject = (socket, data) => {
    const foundProject = projects.find(project => project.id === data)

    if (!foundProject)
        return respondeError(socket, 'selected_project', 'Wybrany projekt nie istnieje. Projekt nie został przełączony.')

    socket.leaveAll()
    socket.join(foundProject.id)

    responde(socket, 'selected_project', data)
}

module.exports = selectProject