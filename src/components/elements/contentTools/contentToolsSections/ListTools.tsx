import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'

const ListTools = () => {
    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const dispatch = useDispatch()

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

        <Dropdown
            className='button-view'
            buttonOptions={{ $variant: 'secondary' }}
            showArrow={false}
            buttonContent={<>
                <img src={viewStyle === 'ICONS' ? iconDisplay : iconList} alt="Wyświetl..." />

                Wyświetl...
            </>}

            dropdownContent={<>
                <Button $variant='secondary' onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                    <img src={iconDisplay} alt="Ikony" />

                    Ikony
                </Button>

                <Button $variant='secondary' onClick={() => dispatch(setContentViewStyle('LIST'))}>
                    <img src={iconList} alt="Lista" />

                    Lista
                </Button>
            </>}
        />
    </section>
}

export default ListTools