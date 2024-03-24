import { contentType } from '../../store/features/contentSlice/contentSlice.types'

const getInsideContent = (content: contentType, id: number): { folders: number, files: number } => {
    const response = { folders: 0, files: 0 }

    response.folders = content.folders.filter(f => f.parentFolder === id).length
    response.files = content.files.filter(f => f.parentFolder === id).length

    return response
}

export default getInsideContent