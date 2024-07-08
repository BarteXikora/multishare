/**
 * sortContent function
 * 
 * Sorts the content based on the specified sorting method.
 * It sorts folders and files either by name, last modification date, or file type.
 * Additionally, it can reverse the sorting order if specified.
 **/

import { contentDisplayType, sortType } from '../../store/features/contentSlice/contentSlice.types'
import getFileType from '../fileTypes/getFileType/getFileType'
import getFileTypeName from '../fileTypes/getFileTypeName/getFileTypeName'

// Handling sorting by name:
const sortByName = (content: contentDisplayType): contentDisplayType => {
    const { folders, files } = content

    content.folders = folders.sort((a, b) => a.name.localeCompare(b.name))
    content.files = files.sort((a, b) => a.name.localeCompare(b.name))

    return { ...content }
}

// Handling sorting by date:
const sortByDate = (content: contentDisplayType): contentDisplayType => {
    const { folders, files } = content

    content.folders = folders.sort((a, b) => {
        const dateA = a.details.lastModificationDate
        const dateB = a.details.lastModificationDate

        if (!dateA || !dateB) return 0

        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

    content.files = files.sort((a, b) => {
        const dateA = a.details.lastModificationDate
        const dateB = b.details.lastModificationDate

        if (!dateA || !dateB) return 0

        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

    return { ...content }
}

// Handling sorting by element type:
const sortByType = (content: contentDisplayType): contentDisplayType => {
    const { files } = content

    content.files = files.sort((a, b) => getFileTypeName(a.extension).localeCompare(getFileTypeName(b.extension)))
    content.files = content.files.sort((a, b) => getFileType(a.extension).localeCompare(getFileType(b.extension)))

    return { ...content }
}

// Handling reversing elements order:
const reverse = (content: contentDisplayType): contentDisplayType => {
    return { folders: content.folders.reverse(), files: [...content.files.reverse()] }
}

// The function:
const sortContent = (content: contentDisplayType, sort: sortType): contentDisplayType => {

    // Creating the deep copy of the content object:
    let currentContent = JSON.parse(JSON.stringify(content))

    // Applying all filters:
    currentContent = sortByName(currentContent)

    if (sort.sortBy === 'DATE') currentContent = sortByDate(currentContent)
    if (sort.sortBy === 'TYPE') currentContent = sortByType(currentContent)

    if (sort.method === 'DESC') currentContent = reverse(currentContent)

    // Returning the new content:
    return currentContent
}

export default sortContent