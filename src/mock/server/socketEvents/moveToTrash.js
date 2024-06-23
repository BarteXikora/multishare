const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')

const getPath = require('../functions/getPath')
const { responde } = require('../functions/responde')

const moveToTrash = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    const allToTrash = { view: { folders: data.folders, files: data.files }, contained: { folders: [], files: [] } }

    allToTrash.view.folders.forEach(element => {
        currentContent.content.folders.forEach(folder => {
            if (getPath(currentContent.content.folders, folder.id).includes(element))
                allToTrash.contained.folders.push(folder.id)
        })

        currentContent.content.files.forEach(file => {
            if (getPath(currentContent.content.folders, file.parentFolder).includes(element))
                allToTrash.contained.files.push(file.id)
        })
    })

    allToTrash.contained.folders.forEach(element => {
        if (allToTrash.view.folders.includes(element))
            allToTrash.contained.folders.splice(allToTrash.contained.folders.indexOf(element), 1)
    })

    allToTrash.view.folders.forEach(folderId => {
        let folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.view.folders.push(folder)
        }
    })

    allToTrash.view.files.forEach(fileId => {
        let file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.view.files.push(file)
        }
    })

    allToTrash.contained.folders.forEach(folderId => {
        let folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.contained.folders.push(folder)
        }
    })

    allToTrash.contained.files.forEach(fileId => {
        let file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.contained.files.push(file)
        }
    })

    setProjestContent(currentProject, currentContent)

    responde(socket, 'moved_to_trash', allToTrash, true)
}

module.exports = moveToTrash