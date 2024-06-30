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
    useClickOutside(contextMenuRef, () => dispatch(closeContextMenu()))
    useMoveToClick(contextMenuRef)

    if (!contextMenu.isShown) return null

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