/**
 * getMoveElements function
 * 
 * Determines whether an element with the specified ID should be included in the selection.
 * If the element is already part of the selection, returns the existing selectedType object.
 * Otherwise, retrieves the single element and returns an updated selectedType object.
 */

import { elementType, selectedType } from '../../../../store/features/contentSlice/contentSlice.types'
import getSingleElement from '../getSingleElement/getSingleElement'

const getMoveElements = (selected: selectedType, elementType: elementType, elementId: number): selectedType => {
    const selectedOfType = elementType === 'FOLDER' ? selected.folders : selected.files

    // If the element is already part of the selection, returning the existing selectedType:
    if (selectedOfType.includes(elementId)) return selected

    // Otherwise, retrieve the single element:
    return getSingleElement(elementType, elementId)
}

export default getMoveElements