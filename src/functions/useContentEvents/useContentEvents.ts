import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected, setTreeLocation } from '../../store/features/contentSlice/contentSlice'

import click from './click/click'
import controlClick from './controlClick/controlClick'
import shiftClick from './shiftClick/shiftClick'
import selectAllClick from './selectAllClick/selectAllClick'

import { ElementType, selectedType } from '../../store/features/contentSlice/contentSlice.types'

const emptySelect: selectedType = { selectionStart: null }

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSelected(emptySelect))

    }, [dispatch, currentPath])

    const select = (event: React.MouseEvent<HTMLElement>, type: ElementType, id: number) => {
        if (event.shiftKey) dispatch(setSelected(shiftClick(currentFolder, selected, type, id)))
        else if (event.ctrlKey) dispatch(setSelected(controlClick({ ...selected }, type, id)))
        else dispatch(setSelected(click(type, id)))
    }

    const openFolder = (folderId: number) => dispatch(setTreeLocation(folderId))

    const selectAll = (unselectAllOnSecondClick: boolean = true) => dispatch(
        setSelected(selectAllClick(currentFolder, selected, unselectAllOnSecondClick))
    )

    const unselectAll = () => dispatch(setSelected(emptySelect))

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
            onDoubleClick: (folderId: number) => openFolder(folderId)
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FILE', folderId),
        },

        selectAll,
        unselectAll
    }
}

export default useContentEvents