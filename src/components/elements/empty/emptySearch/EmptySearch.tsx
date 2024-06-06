import { useDispatch } from '../../../../store/store'
import { setSearch } from '../../../../store/features/contentSlice/contentSlice'
import Button from '../../../ui/button/Button'

import imgEmptySearch from '../../../../assets/images/img-empty-search.svg'
import iconClose from '../../../../assets/icons/icon-close.svg'

const EmptySearch = ({ search }: { search: string }) => {
    const dispatch = useDispatch()

    const handleClearSearch = () => dispatch(setSearch(''))

    return <>
        <div className="image">
            <img src={imgEmptySearch} alt='Pusty wynik wyszukiwania' />
        </div>

        <div className="info">
            <h2>Pusty wynik wyszukiwania!</h2>

            <p>Żaden element nie pasuje do wyszukanej frazy: <b><i>{search}</i></b>.</p>

            <div className="actions">
                <Button $variant='wrong' onClick={handleClearSearch}>
                    <img src={iconClose} alt='Wyczyść filtry' />

                    Wyczyść wyszukiwanie
                </Button>
            </div>
        </div>
    </>
}

export default EmptySearch