import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import { setFilter, setSort } from '../../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { filterType, sortType } from '../../../../store/features/contentSlice/contentSlice.types'

import Button from '../../../ui/button/Button'
import Dropdown from '../../../ui/dropdown/Dropdown'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort-dark.svg'
import iconFilter from '../../../../assets/icons/icon-filter-dark.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'
import iconSortAlphabet from '../../../../assets/icons/icon-sort-alphabet.svg'
import iconSortDate from '../../../../assets/icons/icon-sort-date.svg'
import iconSortType from '../../../../assets/icons/icon-sort-type.svg'
import iconUp from '../../../../assets/icons/icon-up.svg'
import iconDown from '../../../../assets/icons/icon-down.svg'
import iconClose from '../../../../assets/icons/icon-close.svg'

const ListTools = () => {
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const sort = useSelector(state => state.content.sort)
    const filter = useSelector(state => state.content.filter)

    const { selectAll } = useContentEvents()

    const handleSort = (sort: sortType) => {
        dispatch(setSort(sort))
    }

    const handleFilter = (filter: filterType) => {
        dispatch(setFilter(filter))
    }

    const handleDateRange = () => {
        dispatch(showWindow('DATE_RANGE'))
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

        <Dropdown
            className='button-dropdown'
            buttonOptions={{ $variant: (filter.time || filter.type || filter.star) ? 'warning' : 'secondary' }}
            showArrow={false}
            buttonContent={<><img src={iconFilter} alt="Filtruj..." /> Filtruj...</>}
            dropdownContent={<>
                {
                    (filter.time || filter.type || filter.star) && <>
                        <Button $variant='wrong' onClick={() => handleFilter({ time: null, type: null, star: null })}>
                            <img src={iconClose} alt="Wyczyść filtry" />

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