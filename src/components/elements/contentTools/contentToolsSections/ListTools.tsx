import Button from '../../../ui/button/Button'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconDetails from '../../../../assets/icons/icon-details.svg'

const ListTools = () => {
    return <section className="list-tools">
        <Button $variant='secondary'>
            <img src={iconSelect} alt="Zaznacz wszystko" />

            Zaznacz wszystko
        </Button>

        <div className="tools-buttons">
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

        <Button className='details-button'>
            <img src={iconDetails} alt="Pokaż szczegóły" />
        </Button>
    </section>
}

export default ListTools