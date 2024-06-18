import { useSelector } from '../../../store/store'

import StyledContextMenu from './ContextMenu.styles'

const ContextMenu = () => {
    const contextMenu = useSelector(state => state.contextMenu)

    if (!contextMenu.isShown) return null

    return <StyledContextMenu>context menu</StyledContextMenu>
}

export default ContextMenu