import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected, setTreeLocation } from '../../store/features/contentSlice/contentSlice'

import click from './click/click'
import controlClick from './controlClick/controlClick'
import shiftClick from './shiftClick/shiftClick'
import selectAllClick from './selectAllClick/selectAllClick'

import { ElementType, selectedType } from '../../store/features/contentSlice/contentSlice.types'

const emptySelect: selectedType = { selectionStart: null }

const selectedCnt = (selected: selectedType): number => {
    let cnt = 0

    if (selected.folders) cnt += selected.folders.length
    if (selected.files) cnt += selected.files.length

    return cnt
}

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    const [touchHoldTimeout, setTouchHoldTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        dispatch(setSelected(emptySelect))

    }, [dispatch, currentPath])

    const select = (event: React.MouseEvent<HTMLElement>, type: ElementType, id: number) => {
        event.preventDefault()

        if (event.shiftKey) dispatch(setSelected(shiftClick(currentFolder, selected, type, id)))
        else if (event.ctrlKey) dispatch(setSelected(controlClick({ ...selected }, type, id)))
        else dispatch(setSelected(click(type, id)))
    }

    const selectMobile = (event: React.TouchEvent<HTMLElement>, isTouchStart: boolean, type: ElementType, id: number) => {
        event.preventDefault()

        if (isTouchStart) setTouchHoldTimeout(setTimeout(() => {
            if (selectedCnt(selected) === 0) dispatch(setSelected(click(type, id)))

            if (touchHoldTimeout) clearTimeout(touchHoldTimeout)
            setTouchHoldTimeout(null)

        }, 500))

        else {
            if (touchHoldTimeout !== null) {
                clearTimeout(touchHoldTimeout)
                setTouchHoldTimeout(null)

                if (selectedCnt(selected) === 0) {
                    if (type === 'FOLDER') openFolder(id)
                }
                else dispatch(setSelected(controlClick({ ...selected }, type, id)))
            }
        }
    }

    const openFolder = (folderId: number) => dispatch(setTreeLocation(folderId))

    const selectAll = (unselectAllOnSecondClick: boolean = true) => dispatch(
        setSelected(selectAllClick(currentFolder, selected, unselectAllOnSecondClick))
    )

    const unselectAll = () => dispatch(setSelected(emptySelect))

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
            onDoubleClick: (folderId: number) => openFolder(folderId),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, folderId: number) => selectMobile(event, true, 'FOLDER', folderId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, folderId: number) => selectMobile(event, false, 'FOLDER', folderId)
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, fileId: number) => select(event, 'FILE', fileId),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, fileId: number) => selectMobile(event, true, 'FILE', fileId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, fileId: number) => selectMobile(event, false, 'FILE', fileId)
        },

        selectAll,
        unselectAll
    }
}

export default useContentEvents