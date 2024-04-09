import StyledTrashWarning from './TrashWarning.styles'
import Button from '../../ui/button/Button'

import iconInfo from '../../../assets/icons/icon-info.svg'
import iconTrash from '../../../assets/icons/icon-trash-full.svg'

const TrashWarning = () => {
    return <StyledTrashWarning>
        <div className='info-box'>
            <img src={iconInfo} alt='Informacja' />

            Elementy znajdujące się w koszu będą automatycznie usuwane na zawsze po upływie 30 dni.
        </div>

        <div>
            <Button $variant='wrong'>
                <img src={iconTrash} alt='Opróżnij kosz' />

                Opróżnij kosz
            </Button>
        </div>
    </StyledTrashWarning>
}

export default TrashWarning