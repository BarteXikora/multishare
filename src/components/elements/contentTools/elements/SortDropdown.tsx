import { useSelector, useDispatch } from '../../../../store/store'
import { setSort } from '../../../../store/features/contentSlice/contentSlice'
import { sortType } from '../../../../store/features/contentSlice/contentSlice.types'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import iconSort from '../../../../assets/icons/icon-sort-dark.svg'
import iconSortAlphabet from '../../../../assets/icons/icon-sort-alphabet.svg'
import iconSortDate from '../../../../assets/icons/icon-sort-date.svg'
import iconSortType from '../../../../assets/icons/icon-sort-type.svg'
import iconUp from '../../../../assets/icons/icon-up.svg'
import iconDown from '../../../../assets/icons/icon-down.svg'

const SortDropdown = () => {
    const dispatch = useDispatch()

    const sort = useSelector(state => state.content.sort)

    const handleSort = (sort: sortType) => dispatch(setSort(sort))

    return <Dropdown
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
}

export default SortDropdown