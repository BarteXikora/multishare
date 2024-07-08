/**
 * getRangeOfElements function
 * 
 * This function retrieves a range of elements (folders and files) between two specified elements within a current folder.
 * It returns an object containing arrays of folder IDs and file IDs that fall within the specified range.
 * 
 * Assumptions:
 * - Elements are ordered sequentially within the current folder.
 * - The range is inclusive of the first and last specified elements.
 **/

import { elementType, contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'

type flatElement = { type: elementType, id: number }

type getRangeOfElementsType = {
    currentFolder: contentDisplayType
    first: flatElement
    last: flatElement
}

type getRangeOfElementsResultType = {
    folders: number[]
    files: number[]
}

const getRangeOfElements = ({ currentFolder, first, last }: getRangeOfElementsType): getRangeOfElementsResultType => {

    // Initializing an array to store flattened elements (folders and files):
    const flatContent: flatElement[] = []

    // Adding all folders in the current folder to the flatContent array:
    currentFolder.folders.forEach(folder => flatContent.push({ type: 'FOLDER', id: folder.id }))

    // Adding all files in the current folder to the flatContent array:
    currentFolder.files.forEach(file => flatContent.push({ type: 'FILE', id: file.id }))

    // Finding the index of the first specified element:
    let firstIndex = flatContent.findIndex(element => element.type === first.type && element.id === first.id)

    // Finding the index of the last specified element:
    let lastIndex = flatContent.findIndex(element => element.type === last.type && element.id === last.id)

    // Returning empty result if either index is not found:
    if (firstIndex === -1 || lastIndex === -1) return { folders: [], files: [] }

    // Swapping indices if lastIndex is before firstIndex:
    if (lastIndex < firstIndex) {
        const _last = lastIndex
        lastIndex = firstIndex
        firstIndex = _last
    }

    // Slicing the flatContent array to get the range of elements:
    const elementsOfRange = flatContent.slice(firstIndex, lastIndex + 1)

    // Initializing the result object to store folder and file IDs:
    const result: getRangeOfElementsResultType = { folders: [], files: [] }

    // Iterating over the range of elements and categorizing them as folders or files:
    elementsOfRange.forEach(element =>
        element.type === 'FOLDER' ?
            result.folders = [...result.folders, element.id]
            :
            result.files = [...result.files, element.id]
    )

    // Returning the result object containing folder and file IDs:
    return result
}

export default getRangeOfElements