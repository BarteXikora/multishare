import { useSelector } from '../../../store/store'

import StyledContextMenu from './ContextMenu.styles'
import ElementsContextMenu from './elementsContextMenu/ElementsContextMenu'

const ContextMenu = () => {
    const contextMenu = useSelector(state => state.contextMenu)

    // if (!contextMenu.isShown) return null

    return <StyledContextMenu>
        {contextMenu.type === 'ELEMENT' && <ElementsContextMenu />}
    </StyledContextMenu>
}

export default ContextMenu