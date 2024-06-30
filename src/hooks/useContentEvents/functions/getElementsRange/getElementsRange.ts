import getRangeOfElements from '../../../../functions/getRangeOfElements/getRangeOfElements'
import getSingleElement from '../../functions/getSingleElement/getSingleElement'

import { elementType, selectedType, contentDisplayType } from '../../../../store/features/contentSlice/contentSlice.types'

const getElementsRange = (currentFolder: contentDisplayType, selected: selectedType, type: elementType, id: number): selectedType => {
    if (selected.selectionStart === null) return getSingleElement(type, id)

    const range = getRangeOfElements({
        currentFolder: { ...currentFolder },
        first: selected.selectionStart,
        last: { type, id }
    })

    return { ...selected, ...range }
}

export default getElementsRange