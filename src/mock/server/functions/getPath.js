/*eslint no-loop-func: "off"*/

const getPath = (content, folderId) => {
    let path = []
    let lastFolder = folderId

    while (lastFolder !== -1) {
        const folderFound = content.filter(element => element.id === lastFolder)

        if (folderFound.length !== 1) return []

        if (path.filter(p => p === folderFound[0].id).length !== 0) return []

        path.push(folderFound[0].id)
        lastFolder = folderFound[0].parentFolder
    }

    return path
}

module.exports = getPath