const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')

const { responde, respondeError } = require('../functions/responde')

const getContent = (socket) => {
    const content = getProjectContent(getUserProject(socket))

    if (content === null) return respondeError(socket, 'content', 'Nie udało się wczytać zawartości projektu.', true)

    responde(socket, 'content', content)
}

module.exports = getContent