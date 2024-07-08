/**
 * getCurrentContent function
 * 
 * This function recives folder ID and returns its content. It converts the content into 
 * contentDisplayType. If the folder ID is not valid it returns response with notFound 
 * set to true.
 */

import { contentDisplayType, contentType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getCurrentContent = (content: contentType, folderId: number): contentDisplayType => {
    const response: contentDisplayType = { folders: [], files: [] }

    // Returning if folder ID is not found:
    if (folderId !== -1 && content.folders.filter(f => f.id === folderId).length === 0)
        return { ...response, notFound: true }

    // Finding folder and filling with insideContent:
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

    // Adding files:
    response.files = content.files.filter(f => f.parentFolder === folderId)

    // Returning the response:
    return response
}

export default getCurrentContent