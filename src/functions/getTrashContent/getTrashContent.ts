import { contentDisplayType, contentType, trashType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getTrashContent = (content: trashType): contentDisplayType => {
    const response: contentDisplayType = { folders: [], files: [] }

    const allTrash: contentType = {
        folders: [...content.view.folders, ...content.contained.folders],
        files: [...content.view.files, ...content.contained.files]
    }

    const foldersFound = content.view.folders
    foldersFound.forEach(f => {
        response.folders.push({
            id: f.id,
            name: f.name,
            details: f.details,
            insideContent: getInsideContent(allTrash, f.id),
            star: f.star
        })
    })

    response.files = content.view.files

    return response
}

export default getTrashContent