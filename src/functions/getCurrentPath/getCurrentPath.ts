import { folderType, pathType } from '../../store/features/contentSlice/contentSlice.types'

const getCurrentPath = (folders: folderType[], folderId: number): pathType[] | false => {
    const path: pathType[] = []
    let lastFolder = folderId

    while (lastFolder !== -1) {
        const folderFound = folders.filter(f => f.id === lastFolder)

        if (folderFound.length !== 1) {
            path.push({ id: lastFolder, name: '', notFound: true })
            break
        }

        if (path.includes({ id: folderFound[0].id, name: '' })) return false

        path.push({ id: folderFound[0].parentFolder, name: '' })
        lastFolder = folderFound[0].parentFolder
    }

    path.forEach(p => p.name = folders.filter(f => f.id === p.id)[0].name || '')

    return path.reverse()
}

export default getCurrentPath