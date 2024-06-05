import { useSelector, useDispatch } from '../../../../store/store'
import { useNavigate } from 'react-router-dom'
import { setFilter } from '../../../../store/features/contentSlice/contentSlice'

import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-folder.svg'
import iconFiles from '../../../../assets/icons/icon-files-full.svg'
import iconStar from '../../../../assets/icons/icon-star.svg'
import iconTrash from '../../../../assets/icons/icon-trash-full.svg'

const ContentButtons = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filter = useSelector(state => state.content.filter)
    const displayType = useSelector(state => state.content.displayType)

    const handleClick = (to: 'project' | 'files' | 'trash' | 'star') => {
        dispatch(setFilter({ type: null, time: null, star: null }))

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
            $active={(!filter.star && !filter.time && !filter.type) && displayType === 'TREE'}
            onClick={() => handleClick('project')}
        >
            <img src={iconFolder} alt='Dysk' />

            Dysk
        </Button>

        <Button
            $variant='tertiary'
            $active={(filter.time || filter.type || displayType === 'FILES') && !filter.star && displayType !== 'TRASH'}
            onClick={() => handleClick('files')}
        >
            <img src={iconFiles} alt='Wszystkie pliki' />

            Wszystkie pliki
        </Button>

        <Button
            $variant='tertiary'
            $active={!!(filter.star && displayType !== 'TRASH')}
            onClick={() => handleClick('star')}
        >
            <img src={iconStar} alt='Oznaczone gwiazdką' />

            Oznaczone gwiazdką
        </Button>

        <Button
            $variant='tertiary'
            $active={displayType === 'TRASH'}
            onClick={() => handleClick('trash')}
        >
            <img src={iconTrash} alt='Kosz' />

            Kosz
        </Button>
    </>
}

export default ContentButtons