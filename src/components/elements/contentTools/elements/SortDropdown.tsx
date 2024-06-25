import { useSelector, useDispatch } from '../../../../store/store'
import { setSort } from '../../../../store/features/contentSlice/contentSlice'
import { sortType } from '../../../../store/features/contentSlice/contentSlice.types'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'
import { IconSort, IconSortAlphabet, IconSortDate, IconSortType, IconUp, IconDown } from '../../../ui/icon/Icons'

const SortDropdown = () => {
    const dispatch = useDispatch()

    const sort = useSelector(state => state.content.sort)

    const handleSort = (sort: sortType) => dispatch(setSort(sort))

    return <Dropdown
        className='button-dropdown'
        buttonOptions={{ $variant: 'secondary' }}
        showArrow={false}
        buttonContent={<>
            <IconSort $color='dark' />

            Sortuj...
        </>}
        dropdownContent={<>
            <h2>Sortuj zawartość:</h2>

            <Button $variant='quaternary' $active={sort.sortBy === 'NAME'} onClick={() => handleSort({ ...sort, sortBy: 'NAME' })}>
                <IconSortAlphabet $color='dark' />

                Nazwa
            </Button>

            <Button $variant='quaternary' $active={sort.sortBy === 'DATE'} onClick={() => handleSort({ ...sort, sortBy: 'DATE' })}>
                <IconSortDate $color='dark' />

                Data
            </Button>

            <Button $variant='quaternary' $active={sort.sortBy === 'TYPE'} onClick={() => handleSort({ ...sort, sortBy: 'TYPE' })}>
                <IconSortType $color='dark' />

                Typ
            </Button>

            <hr />

            <Button $variant='quaternary' $active={sort.method === 'ASC'} onClick={() => handleSort({ ...sort, method: 'ASC' })}>
                <IconDown $color='dark' />

                Rosnąco
            </Button>

            <Button $variant='quaternary' $active={sort.method === 'DESC'} onClick={() => handleSort({ ...sort, method: 'DESC' })}>
                <IconUp $color='dark' />

                Malejąco
            </Button>
        </>}
    />
}

export default SortDropdown