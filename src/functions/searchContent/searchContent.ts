/**
 * searchContent function
 * 
 * This function filters the content based on a search string.
 * It returns an object containing the folders and files that match the search criteria.
 **/

import { contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'

const searchContent = (content: contentDisplayType, search: string): contentDisplayType => {

    // Creating a deep copy of the content to avoid mutating the original content:
    const currentContent: contentDisplayType = JSON.parse(JSON.stringify(content))

    // Filtering folders and files based on the search string (case insensitive):
    const response: contentDisplayType = {
        folders: currentContent.folders.filter(f => f.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        files: currentContent.files.filter(f => f.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    // Returning the filtered content:
    return response
}

export default searchContent