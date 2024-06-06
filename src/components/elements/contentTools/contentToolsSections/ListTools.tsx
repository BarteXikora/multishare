import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import SortDropdown from '../elements/SortDropdown'
import FilterDropdown from '../elements/FilterDropdown'

import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'

const ListTools = () => {
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)

    const { selectAll } = useContentEvents()

    return <section className="list-tools">
        <Button $variant='secondary' onClick={() => selectAll()}>
            <img src={iconSelect} alt="Zaznacz wszystko" />

            Zaznacz wszystko
        </Button>

        <SortDropdown />

        <FilterDropdown />

        <Dropdown
            className='button-dropdown'
            buttonOptions={{ $variant: 'secondary' }}
            showArrow={false}
            buttonContent={<>
                <img src={viewStyle === 'ICONS' ? iconDisplay : iconList} alt="Wyświetl..." />

                Wyświetl...
            </>}

            dropdownContent={<>
                <h2>Wyświetl jako:</h2>

                <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                    <img src={iconDisplay} alt="Ikony" />

                    Ikony
                </Button>

                <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => dispatch(setContentViewStyle('LIST'))}>
                    <img src={iconList} alt="Lista" />

                    Lista
                </Button>
            </>}
        />
    </section>
}

export default ListTools