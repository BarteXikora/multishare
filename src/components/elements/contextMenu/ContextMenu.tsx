import { useSelector } from '../../../store/store'

import StyledContextMenu from './ContextMenu.styles'
import ElementsContextMenu from './elementsContextMenu/ElementsContextMenu'
import LocationContextMenu from './locationContextMenu.tsx/LocationContextMenu'

const ContextMenu = () => {
    const contextMenu = useSelector(state => state.contextMenu)

    if (!contextMenu.isShown) return null

    return <StyledContextMenu>
        {contextMenu.type === 'ELEMENT' && <ElementsContextMenu />}

        {contextMenu.type === 'LOCATION' && <LocationContextMenu />}
    </StyledContextMenu>
}

export default ContextMenu