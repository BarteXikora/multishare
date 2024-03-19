import getRangeOfElements from '../../getRangeOfElements/getRangeOfElements'
import click from '../click/click'

import { elementType, selectedType, contentDisplayType } from '../../../store/features/contentSlice/contentSlice.types'

const shiftClick = (currentFolder: contentDisplayType, selected: selectedType, type: elementType, id: number): selectedType => {
    if (selected.selectionStart === null) return click(type, id)

    const range = getRangeOfElements({
        currentFolder: { ...currentFolder },
        first: selected.selectionStart,
        last: { type, id }
    })

    return { ...selected, ...range }
}

export default shiftClick