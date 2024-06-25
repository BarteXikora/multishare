import { useSelector, useDispatch } from '../../../../store/store'
import { useNavigate } from 'react-router-dom'
import { setFilter, setSearch } from '../../../../store/features/contentSlice/contentSlice'

import Button from '../../../ui/button/Button'
import { IconFolder, IconFiles, IconStar, IconTrash } from '../../../ui/icon/Icons'

const ContentButtons = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filter = useSelector(state => state.content.filter)
    const search = useSelector(state => state.content.search)
    const displayType = useSelector(state => state.content.displayType)

    const handleClick = (to: 'project' | 'files' | 'trash' | 'star') => {
        dispatch(setFilter({ type: null, time: null, star: null }))
        dispatch(setSearch(''))

        if (to === 'project' && displayType !== 'TREE') navigate('/project')
        if (to === 'files' && displayType !== 'FILES') navigate('/files')
        if (to === 'trash' && displayType !== 'TRASH') navigate('/trash')

        if (to === 'star') {
            if (displayType === 'TRASH') navigate('/files')

            dispatch(setFilter({ ...filter, star: true }))
        }
    }

    return <>
        <Button
            $variant='tertiary'
            $active={(!filter.star && !filter.time && !filter.type) && search === '' && displayType === 'TREE'}
            onClick={() => handleClick('project')}
        >
            <IconFolder />

            Dysk
        </Button>

        <Button
            $variant='tertiary'
            $active={(filter.time || filter.type || displayType === 'FILES' || search !== '') && !filter.star && displayType !== 'TRASH'}
            onClick={() => handleClick('files')}
        >
            <IconFiles />

            Wszystkie pliki
        </Button>

        <Button
            $variant='tertiary'
            $active={!!(filter.star && displayType !== 'TRASH')}
            onClick={() => handleClick('star')}
        >
            <IconStar />

            Oznaczone gwiazdką
        </Button>

        <Button
            $variant='tertiary'
            $active={displayType === 'TRASH'}
            onClick={() => handleClick('trash')}
        >
            <IconTrash />

            Kosz
        </Button>
    </>
}

export default ContentButtons