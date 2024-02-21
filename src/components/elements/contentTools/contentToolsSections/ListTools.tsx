import { useDispatch } from '../../../../store/store'
import { toggle } from '../../../../store/features/detailsSectionSlice/detailsSectionSlice'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import Button from '../../../ui/button/Button'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconDetails from '../../../../assets/icons/icon-details.svg'

const ListTools = () => {
    const dispatch = useDispatch()

    const { selectAll } = useContentEvents()

    return <section className="list-tools">
        <div className="tools-buttons">
            <Button $variant='secondary' onClick={() => selectAll()}>
                <img src={iconSelect} alt="Zaznacz wszystko" />

                Zaznacz wszystko
            </Button>

            <Button $variant='secondary'>
                <img src={iconSort} alt="Sortuj..." />

                Sortuj...
            </Button>

            <Button $variant='secondary'>
                <img src={iconFilter} alt="Filtruj..." />

                Filtruj...
            </Button>

            <Button $variant='secondary'>
                <img src={iconDisplay} alt="Wyświetl..." />

                Wyświetl...
            </Button>
        </div>

        <Button className='details-button' onClick={() => dispatch(toggle())}>
            <img src={iconDetails} alt="Pokaż szczegóły" />
        </Button>
    </section>
}

export default ListTools