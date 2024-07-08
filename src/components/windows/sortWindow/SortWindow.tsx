/** 
 * Sort window
 * 
 * The window is shown when user wants to set the content sort on mobile screns. 
**/

import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSort } from '../../../store/features/contentSlice/contentSlice'
import { sortType } from '../../../store/features/contentSlice/contentSlice.types'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledSortWindow from './SortWindow.styles'
import Button from '../../ui/button/Button'
import { IconSortAlphabet, IconSortDate, IconSortType, IconUp, IconDown, IconSort } from '../../ui/icon/Icons'

const SortWindow = () => {
    const disptach = useDispatch()
    const sort = useSelector(state => state.content.sort)

    // Local sort state:
    const [selectedSort, setSelectedSort] = useState<sortType>(sort)

    // Rendering the component:
    return <StyledSortWindow>

        {/* Sort by buttons: */}
        <section className='main'>
            <h2>Sortuj według:</h2>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'NAME'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'NAME' })}
            >
                <IconSortAlphabet $color='dark' />

                Nazwa
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'DATE'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'DATE' })}
            >
                <IconSortDate $color='dark' />

                Data
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.sortBy === 'TYPE'}
                onClick={() => setSelectedSort({ ...selectedSort, sortBy: 'TYPE' })}
            >
                <IconSortType $color='dark' />

                Typ
            </Button>
        </section>

        {/* Sorting mthods buttons: */}
        <section className='main'>
            <h2>Metoda sortowania:</h2>

            <Button
                $variant='quaternary'
                $active={selectedSort.method === 'ASC'}
                onClick={() => setSelectedSort({ ...selectedSort, method: 'ASC' })}
            >
                <IconDown $color='dark' />

                Rosnąco
            </Button>

            <Button
                $variant='quaternary'
                $active={selectedSort.method === 'DESC'}
                onClick={() => setSelectedSort({ ...selectedSort, method: 'DESC' })}
            >
                <IconUp $color='dark' />

                Malejąco
            </Button>
        </section>

        {/* Actions buttons: */}
        <section className="actions">
            <Button $variant='secondary' onClick={() => disptach(closeWindow())} className='no-mobile-button'>
                Anuluj
            </Button>

            <Button onClick={() => { disptach(setSort(selectedSort)); disptach(closeWindow()) }}>
                <IconSort />

                Sortuj
            </Button>
        </section>
    </StyledSortWindow>
}

export default SortWindow