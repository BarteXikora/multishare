import { useDispatch } from '../../../store/store'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'

import StyledFilterWarning from './FilterWarning.styles'

import iconFilter from '../../../assets/icons/icon-filter-dark.svg'
import iconClose from '../../../assets/icons/icon-close.svg'

const FilterWarning = () => {
    const dispatch = useDispatch()

    const handleClearFilters = () => {
        dispatch(setFilter({ time: null, type: null, star: null }))
    }

    return <StyledFilterWarning onClick={handleClearFilters}>
        <img src={iconFilter} alt='Zastosowano filtry' />

        <h3>Zastosowano filtry!</h3>

        <div className="clear-filters">
            <img src={iconClose} alt='Wyczyść filtry' />

            <h3>Wyczyść filtry!</h3>
        </div>
    </StyledFilterWarning>
}

export default FilterWarning