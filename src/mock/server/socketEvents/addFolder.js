const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')
const { validateName } = require('../functions/validateName')

const { responde, respondeError } = require('../functions/responde')

const addFolder = (socket, data) => {
    data.name = data.name.trim()

    if (!validateName(data.name))
        return respondeError(socket, 'new_folder', 'Nie udało się stworzyć folderu. Wybrana nazwa jest niepoprawna.')

    data.id = Math.floor(Math.random() * 999999999)
    data.details = {
        createdDate: new Date().toLocaleString(),
        lastModificationDate: new Date().toLocaleString()
    }

    const currentProject = getUserProject(socket)

    const newContent = getProjectContent(currentProject)
    newContent.content.folders.push(data)

    setProjestContent(currentProject, newContent)

    responde(socket, 'new_folder', data, true)
}

module.exports = addFolder