import { useDispatch } from '../../../store/store'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'

import StyledFilterWarning from './FilterWarning.styles'
import { IconFilter, IconClose } from '../../ui/icon/Icons'

const FilterWarning = () => {
    const dispatch = useDispatch()

    const handleClearFilters = () => {
        dispatch(setFilter({ time: null, type: null, star: null }))
    }

    return <StyledFilterWarning onClick={handleClearFilters}>
        <IconFilter $color='dark' />

        <h3>Zastosowano filtry!</h3>

        <div className="clear-filters">
            <IconClose />

            <h3>Wyczyść filtry!</h3>
        </div>
    </StyledFilterWarning>
}

export default FilterWarning