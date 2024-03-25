import { useState } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected, setTreeLocation } from '../../store/features/contentSlice/contentSlice'
import { useNavigate } from 'react-router-dom'

import click from './click/click'
import controlClick from './controlClick/controlClick'
import selectAllClick from './selectAllClick/selectAllClick'

import useSelect from './useSelect/useSelect'

import { elementType, selectedType } from '../../store/features/contentSlice/contentSlice.types'

const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

const selectedCnt = (selected: selectedType): number => {
    let cnt = 0

    if (selected.folders) cnt += selected.folders.length
    if (selected.files) cnt += selected.files.length

    return cnt
}

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [touchHoldTimeout, setTouchHoldTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

    const select = useSelect()

    const selectMobile = (event: React.TouchEvent<HTMLElement>, isTouchStart: boolean, type: elementType, id: number) => {
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
            onDoubleClick: (fileId: number) => navigate('/file/' + fileId.toString()),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, fileId: number) => selectMobile(event, true, 'FILE', fileId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, fileId: number) => selectMobile(event, false, 'FILE', fileId)
        },

        selectAll,
        unselectAll
    }
}

export default useContentEvents