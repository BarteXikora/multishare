import { useRef } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import useClickOutside from '../../../functions/useClickOutside/useClickOutside'
import { closeContextMenu } from '../../../store/features/contextMenuSlice/contextMenuSlice'

import StyledContextMenu from './ContextMenu.styles'
import ElementsContextMenu from './elementsContextMenu/ElementsContextMenu'
import LocationContextMenu from './locationContextMenu.tsx/LocationContextMenu'

const ContextMenu = () => {
    const dispatch = useDispatch()

    const contextMenu = useSelector(state => state.contextMenu)

    const contextMenuRef = useRef(null)
    useClickOutside(contextMenuRef, () => dispatch(closeContextMenu()))

    if (!contextMenu.isShown) return null

    return <StyledContextMenu ref={contextMenuRef}>
        {contextMenu.type === 'ELEMENT' && <ElementsContextMenu />}

        {contextMenu.type === 'LOCATION' && <LocationContextMenu />}
    </StyledContextMenu>
}

export default ContextMenu