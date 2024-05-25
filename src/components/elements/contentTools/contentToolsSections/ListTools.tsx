import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import { setSort } from '../../../../store/features/contentSlice/contentSlice'
import { sortType } from '../../../../store/features/contentSlice/contentSlice.types'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort-dark.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'
import iconSortAlphabet from '../../../../assets/icons/icon-sort-alphabet.svg'
import iconSortDate from '../../../../assets/icons/icon-sort-date.svg'
import iconSortType from '../../../../assets/icons/icon-sort-type.svg'
import iconUp from '../../../../assets/icons/icon-up.svg'
import iconDown from '../../../../assets/icons/icon-down.svg'

const ListTools = () => {
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const sort = useSelector(state => state.content.sort)

    const { selectAll } = useContentEvents()

    const handleSort = (sort: sortType) => {
        dispatch(setSort(sort))
    }

    return <section className="list-tools">
        <Button $variant='secondary' onClick={() => selectAll()}>
            <img src={iconSelect} alt="Zaznacz wszystko" />

            Zaznacz wszystko
        </Button>

        <Dropdown
            className='button-dropdown'
            buttonOptions={{ $variant: 'secondary' }}
            showArrow={false}
            buttonContent={<>
                <img src={iconSort} alt="Sortuj..." />

                Sortuj...
            </>}
            dropdownContent={<>
                <h2>Sortuj zawartość:</h2>

                <Button $variant='quaternary' $active={sort.sortBy === 'NAME'} onClick={() => handleSort({ ...sort, sortBy: 'NAME' })}>
                    <img src={iconSortAlphabet} alt="Nazwa" />

                    Nazwa
                </Button>

                <Button $variant='quaternary' $active={sort.sortBy === 'DATE'} onClick={() => handleSort({ ...sort, sortBy: 'DATE' })}>
                    <img src={iconSortDate} alt="Data" />

                    Data
                </Button>

                <Button $variant='quaternary' $active={sort.sortBy === 'TYPE'} onClick={() => handleSort({ ...sort, sortBy: 'TYPE' })}>
                    <img src={iconSortType} alt="Typ" />

                    Typ
                </Button>

                <hr />

                <Button $variant='quaternary' $active={sort.method === 'ASC'} onClick={() => handleSort({ ...sort, method: 'ASC' })}>
                    <img src={iconDown} alt="Rosnąco" />

                    Rosnąco
                </Button>

                <Button $variant='quaternary' $active={sort.method === 'DESC'} onClick={() => handleSort({ ...sort, method: 'DESC' })}>
                    <img src={iconUp} alt="Malejąco" />

                    Malejąco
                </Button>
            </>}
        />

        <Button $variant='secondary'>
            <img src={iconFilter} alt="Filtruj..." />

            Filtruj...
        </Button>

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