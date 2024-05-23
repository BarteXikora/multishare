import StyledEmpty from './Empty.styles'
import { useSelector } from '../../../store/store'

import EmptyFolder from './emptyFolder/EmptyFolder'
import EmptyProject from './emptyProject/EmptyProject'
import EmptyFiles from './emptyFiles/EmptyFiles'
import EmptyTrash from './emptyTrash/EmptyTrash'

const Empty = () => {
    const displayType = useSelector(state => state.content.displayType)
    const isHome = useSelector(state => state.content.currentPath.length === 0)

    return <StyledEmpty>
        {(displayType === 'TREE' && !isHome) && <EmptyFolder />}
        {(displayType === 'TREE' && isHome) && <EmptyProject />}
        {displayType === 'FILES' && <EmptyFiles />}
        {displayType === 'TRASH' && <EmptyTrash />}
    </StyledEmpty>
}

export default Empty