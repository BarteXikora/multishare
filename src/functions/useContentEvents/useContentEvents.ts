import useSelect from './useSelect/useSelect'
import useOpenFolder from './useOpenFolder/useOpenFolder'
import useOpenFile from './useOpenFile/useOpenFile'
import useMobileEvents from './useMobileEvents/useMobileEvents'
import useMouseMoveEvents from './useMouseMoveEvents/useMouseMoveEvents'
import useContextMenu from './useContextMenu/useContextMenu'
import useSelectAll from './useSelectAll/useSelectAll'
import useUnselectAll from './useUnselectAll/useUnselectAll'

const useContentEvents = () => {
    const select = useSelect()
    const openFolder = useOpenFolder()
    const openFile = useOpenFile()
    const mobileEvents = useMobileEvents()
    const mouseMoveEvents = useMouseMoveEvents()
    const { elementsContextMenu, locationContextMenu } = useContextMenu()
    const selectAll = useSelectAll()
    const unselectAll = useUnselectAll()

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
            onContextMenu: (event: React.MouseEvent<HTMLElement>, folderId: number) => elementsContextMenu(event, 'FOLDER', folderId),
            onDoubleClick: (folderId: number) => openFolder(folderId),
            onTouchStart: (folderId: number) => mobileEvents('START', 'FOLDER', folderId),
            onTouchMove: (folderId: number) => mobileEvents('MOVE', 'FOLDER', folderId),
            onTouchEnd: (folderId: number) => mobileEvents('END', 'FOLDER', folderId),
            onMouseDown: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_DOWN', 'FOLDER', folderId),
            onMouseUp: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_UP', 'FOLDER', folderId),
            onMouseMove: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'MOUSE_MOVE', 'FOLDER', folderId),
            onMouseEnter: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'HOVER_IN', 'FOLDER', folderId),
            onMouseLeave: (event: React.MouseEvent<HTMLElement>, folderId: number) => mouseMoveEvents(event, 'HOVER_OUT', 'FOLDER', folderId)
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, fileId: number) => select(event, 'FILE', fileId),
            onContextMenu: (event: React.MouseEvent<HTMLElement>, folderId: number) => elementsContextMenu(event, 'FILE', folderId),
            onDoubleClick: (fileId: number) => openFile(fileId),
            onTouchStart: (fileId: number) => mobileEvents('START', 'FILE', fileId),
            onTouchMove: (fileId: number) => mobileEvents('MOVE', 'FILE', fileId),
            onTouchEnd: (fileId: number) => mobileEvents('END', 'FILE', fileId),
            onMouseDown: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'MOUSE_DOWN', 'FILE', fileId),
            onMouseMove: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'MOUSE_MOVE', 'FILE', fileId),
            onMouseEnter: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'HOVER_IN', 'FILE', fileId),
            onMouseLeave: (event: React.MouseEvent<HTMLElement>, fileId: number) => mouseMoveEvents(event, 'HOVER_OUT', 'FILE', fileId)
        },

        locationContextMenu,
        selectAll,
        unselectAll
    }
}

export default useContentEvents