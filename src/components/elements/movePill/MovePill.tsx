import { useSelector } from '../../../store/store'

import StyledMovePill from './MovePill.styles'

const MovePill = () => {
    const onMove = useSelector(state => state.content.onMove)

    if (onMove.folders.length + onMove.files.length === 0) return null

    return <StyledMovePill>
        <h3>
            {(onMove.folders.length > 0 && onMove.files.length === 0) && 'Foldery: ' + onMove.folders.length}
            {(onMove.folders.length === 0 && onMove.files.length > 0) && 'Pliki: ' + onMove.files.length}
            {(onMove.folders.length > 0 && onMove.files.length > 0) && 'Elementy: ' + (onMove.folders.length + onMove.files.length)}
        </h3>
    </StyledMovePill>
}

export default MovePill