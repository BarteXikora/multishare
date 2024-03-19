import { contentDisplayType, contentType } from '../../store/features/contentSlice/contentSlice.types'

const getCurrentContent = (content: contentType, folderId: number): contentDisplayType => {
    const response: contentDisplayType = { folders: [], files: [] }

    if (content.folders.filter(f => f.id === folderId).length === 0) return { ...response, notFound: true }

    const foldersFound = content.folders.filter(f => f.parentFolder === folderId)
    foldersFound.forEach(f => {
        response.folders.push({
            id: f.id,
            name: f.name,
            insideContent: { folders: 0, files: 0 },
            details: f.details,
            star: f.star
        })
    })

    response.files = content.files.filter(f => f.parentFolder === folderId)

    return response
}

export default getCurrentContent