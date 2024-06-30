import useContentEvents from '../../../../hooks/useContentEvents/useContentEvents'

import Button from '../../../ui/button/Button'
import SortDropdown from '../elements/SortDropdown'
import FilterDropdown from '../elements/FilterDropdown'
import DisplayDropdown from '../elements/DisplayDropdown'
import { IconOK } from '../../../ui/icon/Icons'

const ListTools = () => {
    const { selectAll } = useContentEvents()

    return <section className="list-tools">
        <Button $variant='secondary' onClick={() => selectAll()}>
            <IconOK $color='dark' />

            Zaznacz wszystko
        </Button>

        <SortDropdown />

        <FilterDropdown />

        <DisplayDropdown />
    </section>
}

export default ListTools