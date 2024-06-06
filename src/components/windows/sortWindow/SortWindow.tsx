import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSort } from '../../../store/features/contentSlice/contentSlice'
import { sortType } from '../../../store/features/contentSlice/contentSlice.types'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledSortWindow from './SortWindow.styles'
import Button from '../../ui/button/Button'

import iconSortAlphabet from '../../../assets/icons/icon-sort-alphabet.svg'
import iconSortDate from '../../../assets/icons/icon-sort-date.svg'
import iconSortType from '../../../assets/icons/icon-sort-type.svg'
import iconUp from '../../../assets/icons/icon-up.svg'
import iconDown from '../../../assets/icons/icon-down.svg'
import iconSort from '../../../assets/icons/icon-sort.svg'

const SortWindow = () => {
    const disptach = useDispatch()
    const sort = useSelector(state => state.content.sort)

    const [selectedSort, setSelectedSort] = useState<sortType>(sort)

    return <StyledSortWindow>
        <section className='main'>
            <h2>Sortuj według:</h2>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'NAME'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'NAME' })}
            >
                <img src={iconSortAlphabet} alt="Sortuj Nazwa" />

                Nazwa
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'DATE'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'DATE' })}
            >
                <img src={iconSortDate} alt="Data" />

                Data
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'TYPE'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'TYPE' })}
            >
                <img src={iconSortType} alt="Typ" />

                Typ
            </Button>
        </section>

        <section className='main'>
            <h2>Metoda sortowania:</h2>

            <Button
                $variant='quaternary'
                $active={selectedSort.method === 'ASC'}
                onClick={() => setSelectedSort({ ...selectedSort, method: 'ASC' })}
            >
                <img src={iconDown} alt="Rosnąco" />

                Rosnąco
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.method === 'DESC'}
                onClick={() => setSelectedSort({ ...selectedSort, method: 'DESC' })}
            >
                <img src={iconUp} alt="Malejąco" />

                Malejąco
            </Button>
        </section>

        <section className="actions">
            <Button $variant='secondary' onClick={() => disptach(closeWindow())}>
                Anuluj
            </Button>

            <Button onClick={() => { disptach(setSort(selectedSort)); disptach(closeWindow()) }}>
                <img src={iconSort} alt="Sortuj" />

                Sortuj
            </Button>
        </section>
    </StyledSortWindow>
}

export default SortWindow