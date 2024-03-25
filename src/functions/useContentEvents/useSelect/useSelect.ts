import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import click from '../click/click'
import shiftClick from '../shiftClick/shiftClick'
import controlClick from '../controlClick/controlClick'

import { selectedType, elementType } from '../../../store/features/contentSlice/contentSlice.types'

const useSelect = () => {
    const dispatch = useDispatch()

    const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const currentPath = useSelector(state => state.content.currentPath)

    useEffect(() => {
        dispatch(setSelected(emptySelect))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath])

    const select = (event: React.MouseEvent<HTMLElement>, type: elementType, id: number) => {
        event.preventDefault()

        if (event.shiftKey) dispatch(setSelected(shiftClick(currentFolder, selected, type, id)))
        else if (event.ctrlKey) dispatch(setSelected(controlClick({ ...selected }, type, id)))
        else dispatch(setSelected(click(type, id)))
    }

    return select
}

export default useSelect