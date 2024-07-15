const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')
const { validateName } = require('../functions/validateName')

const { responde, respondeError } = require('../functions/responde')

const updateContent = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    let errors = false

    data.folders.forEach(folder => {
        if ('name' in folder) {
            folder.name = folder.name.trim()

            if (!validateName(folder.name)) return errors = true
        }

        let found = currentContent.content.folders.find(f => f.id === folder.id)
        if (!found) return errors = true

        currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

        found = { ...found, ...folder }

        currentContent.content.folders.push(found)
    })

    data.files.forEach(file => {
        if ('name' in file) {
            file.name = file.name.trim()

            if (!validateName(file.name)) return errors = true
        }

        let found = currentContent.content.files.find(f => f.id === file.id)
        if (!found) return errors = true

        currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

        found = { ...found, ...file }

        currentContent.content.files.push(found)
    })

    if (errors) return respondeError(socket, 'updated_content', 'Wystąpił błąd i nie udało się wykonać operacji.')

    setProjestContent(currentProject, currentContent)

    responde(socket, 'updated_content', data, true)
}

module.exports = updateContent