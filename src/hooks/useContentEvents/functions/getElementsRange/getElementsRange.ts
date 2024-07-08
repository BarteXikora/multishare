/**
 * getElementsRange function
 * 
 * This function gets the range of selected elements based on the current folder, selection start,
 * and the last element type and ID. It returns an updated selectedType object.
 * 
 * Assumpions:
 * - if nothing is selected it simply selects a single element
 * - if anything is selected it selects a range of elements from the first selected to the
 *      current one
 */

import getRangeOfElements from '../../../../functions/getRangeOfElements/getRangeOfElements'
import getSingleElement from '../../functions/getSingleElement/getSingleElement'

import { elementType, selectedType, contentDisplayType } from '../../../../store/features/contentSlice/contentSlice.types'

const getElementsRange = (currentFolder: contentDisplayType, selected: selectedType, type: elementType, id: number): selectedType => {

    // If no selection start, returning a single element:
    if (selected.selectionStart === null) return getSingleElement(type, id)

    // Calculating the range of elements:
    const range = getRangeOfElements({
        currentFolder: { ...currentFolder },
        first: selected.selectionStart,
        last: { type, id }
    })

    // Returning the updated selectedType object:
    return { ...selected, ...range }
}

export default getElementsRange
