import StyledEmpty from './Empty.styles'
import { useSelector } from '../../../store/store'

import EmptyFilters from './emptyFilters/EmptyFilters'
import EmptySearch from './emptySearch/EmptySearch'
import EmptyFolder from './emptyFolder/EmptyFolder'
import EmptyProject from './emptyProject/EmptyProject'
import EmptyFiles from './emptyFiles/EmptyFiles'
import EmptyTrash from './emptyTrash/EmptyTrash'

const Empty = () => {
    const filter = useSelector(state => state.content.filter)
    const search = useSelector(state => state.content.search)
    const displayType = useSelector(state => state.content.displayType)
    const isHome = useSelector(state => state.content.currentPath.length === 0)

    if (filter.type || filter.time || filter.star) return <StyledEmpty><EmptyFilters /></StyledEmpty>

    if (search !== '') return <StyledEmpty><EmptySearch search={search} /></StyledEmpty>

    return <StyledEmpty>
        {(displayType === 'TREE' && !isHome) && <EmptyFolder />}
        {(displayType === 'TREE' && isHome) && <EmptyProject />}
        {displayType === 'FILES' && <EmptyFiles />}
        {displayType === 'TRASH' && <EmptyTrash />}
    </StyledEmpty>
}

export default Empty