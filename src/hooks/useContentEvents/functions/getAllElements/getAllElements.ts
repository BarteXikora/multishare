/**
 * getAllElements function
 * 
 * This function retrieves all elements (folders and files) from the content data,
 * and constructs a selectedType object representing the selected elements.
 **/

import { contentDisplayType, selectedType } from '../../../../store/features/contentSlice/contentSlice.types'

const getAllElements = (content: contentDisplayType, selected: selectedType, unselectAllOnSecondClick: boolean): selectedType => {

    // Initializing an empty selectedType object:
    const result: selectedType = { folders: [], files: [], selectionStart: null }

    // If there are folders in the content, set selectionStart to the first folder and collect folder IDs:
    if (content.folders.length > 0) {
        result.selectionStart = { type: 'FOLDER', id: content.folders[0].id }

        for (const folder of content.folders) result.folders.push(folder.id)
    }

    // If there are files in the content, set selectionStart to the first file and collect file IDs:
    if (content.files.length > 0) {
        result.selectionStart = { type: 'FILE', id: content.files[0].id }

        for (const file of content.files) result.files.push(file.id)
    }

    // Returning the selectedType object representing all selected elements:
    return result
}

export default getAllElements
