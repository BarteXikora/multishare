const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')

const getPath = require('../functions/getPath')
const { responde } = require('../functions/responde')

const restoreFromTrash = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    data = {
        folders: data.folders.map(f => f.id),
        files: data.files.map(f => f.id)
    }

    const allFolders = [
        ...currentContent.content.folders,
        ...currentContent.trash.view.folders,
        ...currentContent.trash.contained.folders
    ]

    let foldersBuffer = []

    data.folders.forEach(folderId => {
        const found = currentContent.trash.view.folders.find(f => f.id === folderId)

        if (found) foldersBuffer.push(found)
    })

    currentContent.trash.contained.folders.forEach(folder => {
        const path = getPath(allFolders, folder.id)
        path.shift()

        let isToRestore = false

        data.folders.forEach(folderId => {
            if (!path.includes(folderId)) return

            let indexOfCurrent = path.indexOf(folderId)
            path.splice(indexOfCurrent, path.length - indexOfCurrent)

            let includesParentInTrash = false
            path.forEach(element => {
                if (currentContent.trash.view.folders.find(f => f.id === element)) includesParentInTrash = true
            })

            if (!includesParentInTrash) isToRestore = true
        })

        if (isToRestore) foldersBuffer.push(folder)
    })

    let filesBuffer = []

    data.files.forEach(fileId => {
        const found = currentContent.trash.view.files.find(f => f.id === fileId)

        if (found) filesBuffer.push(found)
    })

    currentContent.trash.contained.files.forEach(file => {
        if (foldersBuffer.find(f => f.id === file.parentFolder)) filesBuffer.push(file)
    })

    let response = { folders: [], files: [] }

    foldersBuffer.forEach(folder => {
        let found = currentContent.trash.view.folders.find(f => f.id === folder.id)

        if (found) currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)
        else {
            found = currentContent.trash.contained.folders.find(f => f.id === folder.id)

            if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
        }

        if (![...currentContent.content.folders, ...foldersBuffer].find(f => f.id === folder.parentFolder)) folder.parentFolder = -1
        currentContent.content.folders.push(folder)

        response.folders.push({ id: folder.id, parentFolder: folder.parentFolder })
    })

    filesBuffer.forEach(file => {
        let found = currentContent.trash.view.files.find(f => f.id === file.id)

        if (found) currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)
        else {
            found = currentContent.trash.contained.files.find(f => f.id === file.id)

            if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
        }

        if (![...currentContent.content.folders, ...foldersBuffer].find(f => f.id === file.parentFolder)) file.parentFolder = -1
        currentContent.content.files.push(file)

        response.files.push({ id: file.id, parentFolder: file.parentFolder })
    })

    setProjestContent(currentProject, currentContent)

    responde(socket, 'restored_from_trash', response, true)
}

module.exports = restoreFromTrash