const getUserProject = require('../functions/getUserProject')
const getProjectContent = require('../functions/getProjectContent')
const setProjestContent = require('../functions/setProjectContent')
const getPath = require('../functions/getPath')

const deleteForever = (socket, data) => {
    const currentProject = getUserProject(socket)
    const currentContent = getProjectContent(currentProject)

    const allContent = {
        folders: [...currentContent.content.folders, ...currentContent.trash.contained.folders],
        files: [...currentContent.content.files, ...currentContent.trash.contained.files]
    }

    data.folders.forEach(folder => {
        allContent.folders.forEach(element => {
            let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.id)
            path.shift()

            if (path.includes(folder)) data.folders.push(element.id)
        })

        allContent.files.forEach(element => {
            let path = getPath([...allContent.folders, ...currentContent.trash.view.folders], element.parentFolder)

            if (path.includes(folder)) data.files.push(element.id)
        })
    })

    data.folders.forEach(folder => {
        let found = currentContent.content.folders.find(f => f.id === folder)
        if (found) return currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

        found = currentContent.trash.view.folders.find(f => f.id === folder)
        if (found) return currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)

        found = currentContent.trash.contained.folders.find(f => f.id === folder)
        if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
    })

    data.files.forEach(file => {
        let found = currentContent.content.files.find(f => f.id === file)
        if (found) return currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

        found = currentContent.trash.view.files.find(f => f.id === file)
        if (found) return currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)

        found = currentContent.trash.contained.files.find(f => f.id === file)
        if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
    })

    setProjestContent(currentProject, currentContent)

    socket.to(currentProject).emit('deleted_forever', data)
}

module.exports = deleteForever