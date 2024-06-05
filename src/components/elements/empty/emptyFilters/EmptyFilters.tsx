import { useDispatch } from '../../../../store/store'
import { setFilter } from '../../../../store/features/contentSlice/contentSlice'

import Button from '../../../ui/button/Button'

import imgEmptyFilters from '../../../../assets/images/img-empty-filters.svg'
import iconClose from '../../../../assets/icons/icon-close.svg'

const EmptyFilters = () => {
    const dispatch = useDispatch()

    const handleClearFilters = () => {
        dispatch(setFilter({ type: null, time: null }))
    }

    return <>
        <div className="image">
            <img src={imgEmptyFilters} alt="" />
        </div>

        <div className="info">
            <h2>Pusty wynik filtrowania!</h2>

            <p>Żaden element nie spełnia warunków filtrowania.</p>

            <div className="actions">
                <Button $variant='wrong' onClick={handleClearFilters}>
                    <img src={iconClose} alt='Wyczyść filtry' />

                    Wyczyść filtry
                </Button>
            </div>
        </div>
    </>
}

export default EmptyFilters