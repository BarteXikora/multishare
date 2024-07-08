/**
 * getTrashContent function
 * 
 * This function compiles the content of a trash bin, combining both directly viewed and contained items.
 * It returns an object containing the folders and files present in the trash.
 **/

import { contentDisplayType, contentType, trashType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getTrashContent = (content: trashType): contentDisplayType => {

    // Initializing the response object to store the compiled trash content:
    const response: contentDisplayType = { folders: [], files: [] }

    // Combining both viewed and contained folders and files into one object:
    const allTrash: contentType = {
        folders: [...content.view.folders, ...content.contained.folders],
        files: [...content.view.files, ...content.contained.files]
    }

    // Getting all the folders that are directly viewed:
    const foldersFound = content.view.folders

    // Populating the response with folder details including their inside content:
    foldersFound.forEach(f => {
        response.folders.push({
            id: f.id,
            name: f.name,
            details: f.details,
            insideContent: getInsideContent(allTrash, f.id),
            star: f.star
        })
    })

    // Adding the directly viewed files to the response:
    response.files = content.view.files

    // Returning the compiled trash content:
    return response
}

export default getTrashContent
