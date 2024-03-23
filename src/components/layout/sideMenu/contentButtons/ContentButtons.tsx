import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-folder.svg'
import iconFiles from '../../../../assets/icons/icon-files-full.svg'
import iconStar from '../../../../assets/icons/icon-star.svg'
import iconTrash from '../../../../assets/icons/icon-trash.svg'

const ContentButtons = () => {
    return <>
        <Button $variant='tertiary' $active>
            <img src={iconFolder} alt='Dysk' />

            Dysk
        </Button>

        <Button $variant='tertiary'>
            <img src={iconFiles} alt='Wszystkie pliki' />

            Wszystkie pliki
        </Button>

        <Button $variant='tertiary'>
            <img src={iconStar} alt='Oznaczone gwiazdką' />

            Oznaczone gwiazdką
        </Button>

        <Button $variant='tertiary'>
            <img src={iconTrash} alt='Kosz' />

            Kosz
        </Button>
    </>
}

export default ContentButtons