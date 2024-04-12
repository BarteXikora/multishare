import { contentDisplayType, contentType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getCurrentContent = (content: contentType, folderId: number): contentDisplayType => {
    const response: contentDisplayType = { folders: [], files: [] }

    if (folderId !== -1 && content.folders.filter(f => f.id === folderId).length === 0)
        return { ...response, notFound: true }

    const foldersFound = content.folders.filter(f => f.parentFolder === folderId)
    foldersFound.forEach(f => {
        response.folders.push({
            id: f.id,
            name: f.name,
            insideContent: getInsideContent(content, f.id),
            details: f.details,
            star: f.star
        })
    })

    response.files = content.files.filter(f => f.parentFolder === folderId)

    return response
}

export default getCurrentContent