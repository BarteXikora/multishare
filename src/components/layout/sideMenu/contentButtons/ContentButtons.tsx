import { useSelector } from '../../../../store/store'
import { useNavigate } from 'react-router-dom'

import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-folder.svg'
import iconFiles from '../../../../assets/icons/icon-files-full.svg'
import iconStar from '../../../../assets/icons/icon-star.svg'
import iconTrash from '../../../../assets/icons/icon-trash.svg'

const ContentButtons = () => {
    const navigate = useNavigate()
    const displayType = useSelector(state => state.content.displayType)

    const handleClick = (to: 'project' | 'files' | 'trash') => {
        if (to === 'project' && displayType !== 'TREE') navigate('/project')
        if (to === 'files' && displayType !== 'FILES') navigate('/files')
        if (to === 'trash' && displayType !== 'TRASH') navigate('/trash')
    }

    return <>
        <Button $variant='tertiary' $active={displayType === 'TREE'} onClick={() => handleClick('project')}>
            <img src={iconFolder} alt='Dysk' />

            Dysk
        </Button>

        <Button $variant='tertiary' $active={displayType === 'FILES'} onClick={() => handleClick('files')}>
            <img src={iconFiles} alt='Wszystkie pliki' />

            Wszystkie pliki
        </Button>

        <Button $variant='tertiary'>
            <img src={iconStar} alt='Oznaczone gwiazdką' />

            Oznaczone gwiazdką
        </Button>

        <Button $variant='tertiary' $active={displayType === 'TRASH'} onClick={() => handleClick('trash')}>
            <img src={iconTrash} alt='Kosz' />

            Kosz
        </Button>
    </>
}

export default ContentButtons