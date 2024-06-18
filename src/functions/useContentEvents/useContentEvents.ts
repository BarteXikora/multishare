import useSelect from './useSelect/useSelect'
import useOpenFolder from './useOpenFolder/useOpenFolder'
import useOpenFile from './useOpenFile/useOpenFile'
import useMobileEvents from './useMobileEvents/useMobileEvents'
import useMouseMoveEvents from './useMouseMoveEvents/useMouseMoveEvents'
import useSelectAll from './useSelectAll/useSelectAll'
import useUnselectAll from './useUnselectAll/useUnselectAll'

const useContentEvents = () => {
    const select = useSelect()
    const openFolder = useOpenFolder()
    const openFile = useOpenFile()
    const mobileEvents = useMobileEvents()
    const mouseMoveEvents = useMouseMoveEvents()
    const selectAll = useSelectAll()
    const unselectAll = useUnselectAll()

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
            onDoubleClick: (folderId: number) => openFolder(folderId),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, folderId: number) => mobileEvents(event, true, 'FOLDER', folderId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, folderId: number) => mobileEvents(event, false, 'FOLDER', folderId),
            onMouseDown: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_DOWN', 'FOLDER', folderId),
            onMouseUp: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_UP', 'FOLDER', folderId),
            onMouseMove: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_MOVE', 'FOLDER', folderId),
            onMouseEnter: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'HOVER_IN', 'FOLDER', folderId),
            onMouseLeave: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'HOVER_OUT', 'FOLDER', folderId)
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, fileId: number) => select(event, 'FILE', fileId),
            onDoubleClick: (fileId: number) => openFile(fileId),
            onTouchStart: (event: React.TouchEvent<HTMLElement>, fileId: number) => mobileEvents(event, true, 'FILE', fileId),
            onTouchEnd: (event: React.TouchEvent<HTMLElement>, fileId: number) => mobileEvents(event, false, 'FILE', fileId),
            onMouseDown: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'MOUSE_DOWN', 'FILE', fileId),
            onMouseMove: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'MOUSE_MOVE', 'FILE', fileId),
            onMouseEnter: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'HOVER_IN', 'FILE', fileId),
            onMouseLeave: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'HOVER_OUT', 'FILE', fileId)
        },

        selectAll,
        unselectAll
    }
}

export default useContentEvents