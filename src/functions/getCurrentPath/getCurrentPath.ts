import { folderType, pathType } from '../../store/features/contentSlice/contentSlice.types'

const getCurrentPath = (folders: folderType[], folderId: number): pathType[] | false => {
    const path: pathType[] = []
    let lastFolder = folderId

    while (lastFolder !== -1) {
        /* eslint no-loop-func: "off" */
        const folderFound = folders.filter(f => f.id === lastFolder)

        if (folderFound.length !== 1) {
            path.push({ id: lastFolder, name: 'Nie znaleziono folderu', notFound: true })
            break
        }

        if (path.filter(p => p.id === folderFound[0].id).length !== 0) return false

        path.push({ id: folderFound[0].id, name: folderFound[0].name })
        lastFolder = folderFound[0].parentFolder
    }

    return path.reverse()
}

export default getCurrentPath