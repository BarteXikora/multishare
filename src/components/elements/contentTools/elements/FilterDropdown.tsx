import { useSelector, useDispatch } from '../../../../store/store'
import { setFilter } from '../../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { filterType } from '../../../../store/features/contentSlice/contentSlice.types'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'
import { IconFilter, IconClose } from '../../../ui/icon/Icons'

const FilterDropdown = () => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.content.filter)

    const handleFilter = (filter: filterType) => {
        dispatch(setFilter(filter))
    }

    const handleDateRange = () => {
        dispatch(showWindow('DATE_RANGE'))
    }

    return <Dropdown
        className='button-dropdown'
        buttonOptions={{ $variant: (filter.time || filter.type || filter.star) ? 'warning' : 'secondary' }}
        showArrow={false}
        buttonContent={<><IconFilter $color='dark' /> Filtruj...</>}
        dropdownContent={<>
            {
                (filter.time || filter.type || filter.star) && <>
                    <Button $variant='wrong' onClick={() => handleFilter({ time: null, type: null, star: null })}>
                        <IconClose />

                        Wyczyść filtry
                    </Button>

                    <hr />
                </>
            }

            <h2>Oznaczone gwiazdką:</h2>

            <Button
                $variant='quaternary'
                $active={!!filter.star}
                onClick={() => handleFilter({ ...filter, star: true })}
            >
                Oznaczone gwiazdką
            </Button>

            <hr />

            <h2>Data modyfikacji:</h2>

            <Button
                $variant='quaternary'
                $active={!!(filter.time && 'lastDays' in filter.time && filter.time.lastDays === 1)}
                onClick={() => handleFilter({ ...filter, time: { lastDays: 1 } })}
            >
                Dzisiaj
            </Button>

            <Button
                $variant='quaternary'
                $active={!!(filter.time && 'lastDays' in filter.time && filter.time.lastDays === 7)}
                onClick={() => handleFilter({ ...filter, time: { lastDays: 7 } })}
            >
                Ostatnie 7 dni
            </Button>

            <Button
                $variant='quaternary'
                $active={!!(filter.time && 'lastDays' in filter.time && filter.time.lastDays === 30)}
                onClick={() => handleFilter({ ...filter, time: { lastDays: 30 } })}
            >
                Ostatnie 30 dni
            </Button>

            <Button
                $variant='quaternary'
                $active={!!(filter.time && 'from' in filter.time)}
                onClick={handleDateRange}
            >
                Wybierz zakres dat...
            </Button>

            <hr />

            <h2>Typ elementu:</h2>

            <section className="dropdown-scroll">
                <Button
                    $variant='quaternary'
                    $active={filter.type === 'FOLDER'}
                    onClick={() => handleFilter({ ...filter, type: 'FOLDER' })}
                >
                    Foldery
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'CALCULATIONS'}
                    onClick={() => handleFilter({ ...filter, type: 'CALCULATIONS' })}
                >
                    Arkusze kalkulacyjne
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'WORD'}
                    onClick={() => handleFilter({ ...filter, type: 'WORD' })}
                >
                    Dokumnty tekstowe
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'FILM'}
                    onClick={() => handleFilter({ ...filter, type: 'FILM' })}
                >
                    Filmy
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'CODE'}
                    onClick={() => handleFilter({ ...filter, type: 'CODE' })}
                >
                    Kod
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'IMAGE'}
                    onClick={() => handleFilter({ ...filter, type: 'IMAGE' })}
                >
                    Obrazy
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'SOUND'}
                    onClick={() => handleFilter({ ...filter, type: 'SOUND' })}
                >
                    Pliki dźwiękowe
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'SLIDES'}
                    onClick={() => handleFilter({ ...filter, type: 'SLIDES' })}
                >
                    Prezentacje mulimedialne
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'PDF'}
                    onClick={() => handleFilter({ ...filter, type: 'PDF' })}
                >
                    Pliki PDF
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'TEXT'}
                    onClick={() => handleFilter({ ...filter, type: 'TEXT' })}
                >
                    Pliki TXT
                </Button>

                <Button
                    $variant='quaternary'
                    $active={filter.type === 'UNKNOWN'}
                    onClick={() => handleFilter({ ...filter, type: 'UNKNOWN' })}
                >
                    Pozostałe (nieznane)
                </Button>
            </section>
        </>}
    />
}

export default FilterDropdown