import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow, showWindow } from '../../../store/features/windowSlice/windowSlice'
import { filterType, filterTypeType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledFilterWindow from './FilterWindow.styles'
import Button from '../../ui/button/Button'

import iconClose from '../../../assets/icons/icon-close.svg'
import iconFilter from '../../../assets/icons/icon-filter.svg'

const FilterWindow = () => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.content.filter)

    const [currentFilter, setCurrentFilter] = useState<filterType>(filter)

    const handleStar = () => setCurrentFilter({ ...currentFilter, star: currentFilter.star ? null : true })

    const handleTimeDays = (days: number) => {
        if (currentFilter.time) if ('lastDays' in currentFilter.time) if (currentFilter.time.lastDays === days)
            return setCurrentFilter({ ...currentFilter, time: null })

        setCurrentFilter({ ...currentFilter, time: { lastDays: days } })
    }

    const handleDateRange = () => dispatch(showWindow('DATE_RANGE'))

    const handleType = (type: filterTypeType) => {
        if (currentFilter.type === type) return setCurrentFilter({ ...currentFilter, type: null })

        setCurrentFilter({ ...currentFilter, type })
    }

    const handleFilter = () => {
        dispatch(setFilter(currentFilter))
        dispatch(closeWindow())
    }

    return <StyledFilterWindow>
        <section className='main'>
            <h3>Oznaczono gwiazdką:</h3>

            <Button $variant='quaternary' $size='big' $active={!!currentFilter.star} onClick={handleStar}>
                Oznaczono gwiazdką
            </Button>
        </section>

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
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>Anuluj</Button>

            <Button
                $variant='wrong'
                disabled={!currentFilter.star && !currentFilter.time && !currentFilter.type}
                onClick={() => setCurrentFilter({ time: null, type: null, star: null })}
            >
                <img src={iconClose} alt='Wyczyść filtry' />

                Wyczyść filtry
            </Button>

            <Button onClick={handleFilter}>
                <img src={iconFilter} alt='Zastosuj filtry' />

                Zastosuj filtry
            </Button>
        </section>
    </StyledFilterWindow>
}

export default FilterWindow