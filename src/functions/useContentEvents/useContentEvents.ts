import { useSelector, useDispatch } from '../../store/store'
import { setSelected } from '../../store/features/contentSlice/contentSlice'
import { useNavigate } from 'react-router-dom'

import selectAllClick from './selectAllClick/selectAllClick'

import useSelect from './useSelect/useSelect'
import useOpenFolder from './useOpenFolder/useOpenFolder'
import useMobileEvents from './useMobileEvents/useMobileEvents'

import { selectedType } from '../../store/features/contentSlice/contentSlice.types'

const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const select = useSelect()
    const openFolder = useOpenFolder()
    const mobileEvents = useMobileEvents()

    const selectAll = (unselectAllOnSecondClick: boolean = true) => dispatch(
        setSelected(selectAllClick(currentFolder, selected, unselectAllOnSecondClick))
    )

    const unselectAll = () => dispatch(setSelected(emptySelect))

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
            onDoubleClick: (folderId: number) => openFolder(folderId),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, folderId: number) => mobileEvents(event, true, 'FOLDER', folderId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, folderId: number) => mobileEvents(event, false, 'FOLDER', folderId)
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, fileId: number) => select(event, 'FILE', fileId),
            onDoubleClick: (fileId: number) => navigate('/file/' + fileId.toString()),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, fileId: number) => mobileEvents(event, true, 'FILE', fileId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, fileId: number) => mobileEvents(event, false, 'FILE', fileId)
        },

        selectAll,
        unselectAll
    }
}

export default useContentEvents