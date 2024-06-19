import { useRef } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeContextMenu } from '../../../store/features/contextMenuSlice/contextMenuSlice'
import useClickOutside from '../../../functions/useClickOutside/useClickOutside'
import useMoveToClick from '../../../functions/useMoveToClick/useMoveToClick'

import StyledContextMenu from './ContextMenu.styles'
import ElementsContextMenu from './elementsContextMenu/ElementsContextMenu'
import LocationContextMenu from './locationContextMenu.tsx/LocationContextMenu'

const ContextMenu = () => {
    const dispatch = useDispatch()

    const contextMenu = useSelector(state => state.contextMenu)

    const contextMenuRef = useRef(null)
    useClickOutside(contextMenuRef, () => dispatch(closeContextMenu()))
    useMoveToClick(contextMenuRef)

    if (!contextMenu.isShown) return null

    return <StyledContextMenu ref={contextMenuRef}>
        {contextMenu.type === 'ELEMENT' && <ElementsContextMenu />}

        {contextMenu.type === 'LOCATION' && <LocationContextMenu />}
    </StyledContextMenu>
}

export default ContextMenu