/**
 * getInsideContent function
 * 
 * This function counts the number of folders and files inside a specified parent folder.
 * It filters the content data to find folders and files with a parentFolder matching the given ID.
 **/

import { contentType } from '../../store/features/contentSlice/contentSlice.types'

const getInsideContent = (content: contentType, id: number): { folders: number, files: number } => {

    // Initializing the response object to store the counts of folders and files:
    const response = { folders: 0, files: 0 }

    // Counting the number of folders inside the specified parent folder:
    response.folders = content.folders.filter(f => f.parentFolder === id).length

    // Counting the number of files inside the specified parent folder:
    response.files = content.files.filter(f => f.parentFolder === id).length

    // Returning the response object containing the counts of folders and files:
    return response
}

export default getInsideContent