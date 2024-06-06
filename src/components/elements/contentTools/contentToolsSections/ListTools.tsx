import Button from '../../../ui/button/Button'
import SortDropdown from '../elements/SortDropdown'
import FilterDropdown from '../elements/FilterDropdown'
import DisplayDropdown from '../elements/DisplayDropdown'

import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'

const ListTools = () => {
    const { selectAll } = useContentEvents()

    return <section className="list-tools">
        <Button $variant='secondary' onClick={() => selectAll()}>
            <img src={iconSelect} alt="Zaznacz wszystko" />

            Zaznacz wszystko
        </Button>

        <SortDropdown />

        <FilterDropdown />

        <DisplayDropdown />
    </section>
}

export default ListTools