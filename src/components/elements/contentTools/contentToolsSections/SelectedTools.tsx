import Button from '../../../ui/button/Button'
import { useDispatch } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'

import iconDownload from '../../../../assets/icons/icon-download.svg'
import iconMove from '../../../../assets/icons/icon-move.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'
import iconTrash from '../../../../assets/icons/icon-trash.svg'
import iconDetails from '../../../../assets/icons/icon-details.svg'

const SelectedTools = () => {
    const dispatch = useDispatch()

    return <section className="selected-tools">
        <div className="tools-buttons">
            <Button>
                <img src={iconDownload} alt="Pobierz" />

                Pobierz
            </Button>

            <Button $variant='secondary'>
                <img src={iconMove} alt="Przenieś do..." />

                Przenieś do...
            </Button>

            <Button $variant='secondary'>
                <img src={iconStar} alt="Oznacz gwiazdką" />

                Oznacz gwiazdką
            </Button>

            <Button $variant='wrong'>
                <img src={iconTrash} alt="Usuń" />

                Usuń
            </Button>
        </div>

        <Button className='details-button' onClick={() => dispatch(toggle())}>
            <img src={iconDetails} alt="Pokaż szczegóły" />
        </Button>
    </section>
}

export default SelectedTools