import { useSelector, useDispatch } from '../../../store/store'
import { setFilter } from '../../../store/features/contentSlice/contentSlice'

import StyledFilterWarning from './FilterWarning.styles'
import AnimatedFilterWarning from './FilterWarning.animation'
import { IconFilter, IconClose } from '../../ui/icon/Icons'

import { AnimatePresence } from 'framer-motion'

const FilterWarning = () => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.content.filter)

    const handleClearFilters = () => {
        dispatch(setFilter({ time: null, type: null, star: null }))
    }

    return <AnimatePresence>
        {
            (filter.time || filter.type || filter.star) && <AnimatedFilterWarning>
                <StyledFilterWarning onClick={handleClearFilters}>
                    <IconFilter $color='dark' />

                    <h3>Zastosowano filtry!</h3>

                    <div className="clear-filters">
                        <IconClose />

                        <h3>Wyczyść filtry!</h3>
                    </div>
                </StyledFilterWarning>
            </AnimatedFilterWarning>
        }
    </AnimatePresence>
}

export default FilterWarning