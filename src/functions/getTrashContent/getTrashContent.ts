import { contentDisplayType, contentType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getTrashContent = (content: contentType): contentDisplayType => {
    const response: contentDisplayType = { folders: [], files: [] }

    const foldersFound = content.folders.filter(f => f.isInTrash)
    foldersFound.forEach(f => {
        response.folders.push({
            id: f.id,
            name: f.name,
            insideContent: getInsideContent(content, f.id),
            details: f.details,
            star: f.star
        })
    })

    response.files = content.files.filter(f => f.isInTrash)

    return response
}

export default getTrashContent