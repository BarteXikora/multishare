import StyledEmpty from './Empty.styles'
import { useSelector } from '../../../store/store'

import EmptyFolder from './emptyFolder/EmptyFolder'

const Empty = () => {
    const displayType = useSelector(state => state.content.displayType)
    const isHome = useSelector(state => state.content.currentPath.length === 0)

    return <StyledEmpty>
        {(displayType === 'TREE' && !isHome) && <EmptyFolder />}

    </StyledEmpty>
}

export default Empty