import Button from '../../../ui/button/Button'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'

const ListTools = () => {
    const { selectAll } = useContentEvents()

    return <section className="list-tools">
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
    </section>
}

export default ListTools