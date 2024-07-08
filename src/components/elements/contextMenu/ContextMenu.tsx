/** 
 * Context menu
 * 
 * Renders proper type of context menu based on stored data and sets its position
 * to the click position. It also hides itself when clicking on an option or outside.
**/

import { useRef } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeContextMenu } from '../../../store/features/contextMenuSlice/contextMenuSlice'
import useClickOutside from '../../../hooks/useClickOutside/useClickOutside'
import useMoveToClick from '../../../hooks/useMoveToClick/useMoveToClick'

import StyledContextMenu from './ContextMenu.styles'
import ElementsContextMenu from './elementsContextMenu/ElementsContextMenu'
import LocationContextMenu from './locationContextMenu.tsx/LocationContextMenu'
import TrashContextMenu from './trashContextMenu/TrashContextMenu'

const ContextMenu = () => {
    const dispatch = useDispatch()

    const contextMenu = useSelector(state => state.contextMenu)
    const displayType = useSelector(state => state.content.displayType)
    const contextMenuRef = useRef(null)

    // Calling useClickOutside hook to hide the context enu on clicking outside:
    useClickOutside(contextMenuRef, () => dispatch(closeContextMenu()))

    // Calling useMoveToClick hook to set context menus position to the click position on every right ous button click:
    useMoveToClick(contextMenuRef)

    // Rendering nothing if stored isShown is false:
    if (!contextMenu.isShown) return null

    // Rendering the component:
    return <StyledContextMenu ref={contextMenuRef}>
        {
            contextMenu.type === 'ELEMENT' ?
                displayType === 'TRASH' ?
                    <TrashContextMenu />
                    :
                    <ElementsContextMenu />

                :
                null
        }

        {contextMenu.type === 'LOCATION' && <LocationContextMenu />}
    </StyledContextMenu>
}

export default ContextMenu