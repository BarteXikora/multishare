/** 
 * Filter window
 * 
 * This windows is shown when user wants to set filters on a mobile screen. It displays all 
 * filters buttons and allows do set them. It also provides functionality of clearing all
 * filters.
**/

import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow, showWindow } from '../../../store/features/windowSlice/windowSlice'
import { filterType, filterTypeType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledFilterWindow from './FilterWindow.styles'
import Button from '../../ui/button/Button'
import { IconClose, IconFilter } from '../../ui/icon/Icons'

const FilterWindow = () => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.content.filter)

    // Local filter state:
    const [currentFilter, setCurrentFilter] = useState<filterType>(filter)

    // Handling setting "marked with star" filter in the local state: 
    const handleStar = () => setCurrentFilter({ ...currentFilter, star: currentFilter.star ? null : true })

    // Handling setting "last days" filter in the local state:
    const handleTimeDays = (days: number) => {
        if (currentFilter.time) if ('lastDays' in currentFilter.time) if (currentFilter.time.lastDays === days)
            return setCurrentFilter({ ...currentFilter, time: null })

        setCurrentFilter({ ...currentFilter, time: { lastDays: days } })
    }

    // Handling date range window displaing:
    const handleDateRange = () => dispatch(showWindow('DATE_RANGE'))

    const handleType = (type: filterTypeType) => {
        if (currentFilter.type === type) return setCurrentFilter({ ...currentFilter, type: null })

        setCurrentFilter({ ...currentFilter, type })
    }

    // Handling settng stored filters to the local state values:
    const handleFilter = () => {
        dispatch(setFilter(currentFilter))
        dispatch(closeWindow())
    }

    // Rendering the component:
    return <StyledFilterWindow>

        {/* Marked with star filter button: */}
        <section className='main'>
            <h3>Oznaczono gwiazdką:</h3>

            <Button $variant='quaternary' $size='big' $active={!!currentFilter.star} onClick={handleStar}>
                Oznaczono gwiazdką
            </Button>
        </section>

        {/* Date filter buttons: */}
        <section className='main'>
            <h3>Data modyfikacji:</h3>

            <Button
                $variant='quaternary'
                $size='big'
                $active={!!(currentFilter.time && 'lastDays' in currentFilter.time && currentFilter.time.lastDays === 1)}
                onClick={() => handleTimeDays(1)}
            >
                Dzisiaj
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={!!(currentFilter.time && 'lastDays' in currentFilter.time && currentFilter.time.lastDays === 7)}
                onClick={() => handleTimeDays(7)}
            >
                Ostatnie 7 dni
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={!!(currentFilter.time && 'lastDays' in currentFilter.time && currentFilter.time.lastDays === 30)}
                onClick={() => handleTimeDays(30)}
            >
                Ostatnie 30 dni
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                onClick={handleDateRange}
            >
                Wybierz zakres dat...
            </Button>
        </section>

        {/* Elements types filter buttons: */}
        <section className='main'>
            <h3>Typ elementu:</h3>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'FOLDER'}
                onClick={() => handleType('FOLDER')}
            >
                Foldery
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'CALCULATIONS'}
                onClick={() => handleType('CALCULATIONS')}
            >
                Arkusze kalkulacyjne
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'WORD'}
                onClick={() => handleType('WORD')}
            >
                Dokumnty tekstowe
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'FILM'}
                onClick={() => handleType('FILM')}
            >
                Filmy
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'CODE'}
                onClick={() => handleType('CODE')}
            >
                Kod
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'IMAGE'}
                onClick={() => handleType('IMAGE')}
            >
                Obrazy
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'SOUND'}
                onClick={() => handleType('SOUND')}
            >
                Pliki dźwiękowe
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'SLIDES'}
                onClick={() => handleType('SLIDES')}
            >
                Prezentacje mulimedialne
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'PDF'}
                onClick={() => handleType('PDF')}
            >
                Pliki PDF
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'TEXT'}
                onClick={() => handleType('TEXT')}
            >
                Pliki TXT
            </Button>

            <Button
                $variant='quaternary'
                $size='big'
                $active={currentFilter.type === 'UNKNOWN'}
                onClick={() => handleType('UNKNOWN')}
            >
                Pozostałe (nieznane)
            </Button>
        </section>

        <section className="actions">
            <Button
                $variant='wrong'
                disabled={!currentFilter.star && !currentFilter.time && !currentFilter.type}
                onClick={() => setCurrentFilter({ time: null, type: null, star: null })}
            >
                <IconClose $color={(!currentFilter.star && !currentFilter.time && !currentFilter.type) ? 'dark' : 'light'} />

                Wyczyść filtry
            </Button>

            <Button onClick={handleFilter}>
                <IconFilter />

                Zastosuj filtry
            </Button>
        </section>
    </StyledFilterWindow>
}

export default FilterWindow