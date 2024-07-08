/** 
 * useContentMenu custom hook
 * 
 * This hook is used in the useContentEvents hook, it returns 2 functions: to open elements context menu 
 * (context menu that appears on rigth click on folders or files) and to open a location context menu
 * (context menu that appears on right click on contents background). 
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { elementType } from '../../../store/features/contentSlice/contentSlice.types'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getMoveElements from '../functions/getMoveElements/getMoveElements'
import { showContextMenu } from '../../../store/features/contextMenuSlice/contextMenuSlice'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

const useContextMenu = () => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.content.selected)

    // Turning off the default context menu:
    useEffect(() => {
        const handleDefaultContextMenu = (e: MouseEvent) => e.preventDefault()

        window.addEventListener('contextmenu', handleDefaultContextMenu)

        return () => window.removeEventListener('contextmenu', handleDefaultContextMenu)

    }, [])

    // Handling elements context menu:
    const elementsContextMenu = (event: React.MouseEvent<HTMLElement>, elementType: elementType, elementId: number) => {
        if (getIsTouchScreen()) return

        dispatch(setSelected(getMoveElements(selected, elementType, elementId)))
        dispatch(showContextMenu('ELEMENT'))
    }

    // Handling location conext menu:
    const locationContextMenu = () => {
        if (getIsTouchScreen()) return

        dispatch(setSelected({ folders: [], files: [], selectionStart: null }))
        dispatch(showContextMenu('LOCATION'))
    }

    // Returning functions:
    return { elementsContextMenu, locationContextMenu }
}

export default useContextMenu