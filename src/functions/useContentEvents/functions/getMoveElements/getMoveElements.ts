import { elementType, selectedType } from '../../../../store/features/contentSlice/contentSlice.types'
import getSingleElement from '../getSingleElement/getSingleElement'

const getMoveElements = (selected: selectedType, elementType: elementType, elementId: number): selectedType => {
    const selectedOfType = elementType === 'FOLDER' ? selected.folders : selected.files

    if (selectedOfType.includes(elementId)) return selected

    return getSingleElement(elementType, elementId)
}

export default getMoveElements