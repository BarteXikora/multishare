/**
 * getCurrentPath function
 * 
 * This function recives the all folders array and a folder ID. It returns the folder location
 * path. The function returns false if it detects the loop in the path. It can also return path
 * to the not found folder ID.
 */

import { folderType, pathType } from '../../store/features/contentSlice/contentSlice.types'

const getCurrentPath = (folders: folderType[], folderId: number): pathType[] | false => {
    const path: pathType[] = []
    let lastFolder = folderId

    // Finding next parent untill the home folder of id -1:
    while (lastFolder !== -1) {
        /* eslint no-loop-func: "off" */
        const folderFound = folders.filter(f => f.id === lastFolder)

        // Breaking the loop if folder ID is not found:
        if (folderFound.length !== 1) {
            path.push({ id: lastFolder, name: 'Nie znaleziono folderu', notFound: true })
            break
        }

        // Returning false if path loop is detected:
        if (path.filter(p => p.id === folderFound[0].id).length !== 0) return false

        path.push({ id: folderFound[0].id, name: folderFound[0].name })
        lastFolder = folderFound[0].parentFolder
    }

    // Returning the path:
    return path.reverse()
}

export default getCurrentPath