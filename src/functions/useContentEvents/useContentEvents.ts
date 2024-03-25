import { useNavigate } from 'react-router-dom'

import useSelect from './useSelect/useSelect'
import useOpenFolder from './useOpenFolder/useOpenFolder'
import useMobileEvents from './useMobileEvents/useMobileEvents'
import useSelectAll from './useSelectAll/useSelectAll'
import useUnselectAll from './useUnselectAll/useUnselectAll'

const useContentEvents = () => {
    const navigate = useNavigate()

    const select = useSelect()
    const openFolder = useOpenFolder()
    const mobileEvents = useMobileEvents()
    const selectAll = useSelectAll()
    const unselectAll = useUnselectAll()

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