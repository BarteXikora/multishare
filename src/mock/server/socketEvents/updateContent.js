const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')

const { responde } = require('../functions/responde')

const updateContent = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    data.folders.forEach(folder => {
        let found = currentContent.content.folders.find(f => f.id === folder.id)
        if (!found) return

        currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

        found = { ...found, ...folder }

        currentContent.content.folders.push(found)
    })

    data.files.forEach(file => {
        let found = currentContent.content.files.find(f => f.id === file.id)
        if (!found) return

        currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

        found = { ...found, ...file }

        currentContent.content.files.push(found)
    })

    setProjestContent(currentProject, currentContent)

    responde(socket, 'updated_content', data, true)
}

module.exports = updateContent