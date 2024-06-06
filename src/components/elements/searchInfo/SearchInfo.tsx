import { useDispatch } from '../../../store/store'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'

import StyledSearchInfo from './SearchInfo.styles'
import Button from '../../ui/button/Button'

import iconSearchResults from '../../../assets/icons/icon-search-results.svg'
import iconClose from '../../../assets/icons/icon-close.svg'

const SearchInfo = ({ search }: { search: string }) => {
    const dispatch = useDispatch()

    const handleClearSearch = () => dispatch(setSearch(''))

    return <StyledSearchInfo>
        <div className='info-box'>
            <img src={iconSearchResults} alt='Informacja' />

            <span>Wyniki wyszukiwania dla frazy <b>&bdquo;{search}&rdquo;</b>.</span>
        </div>

        <Button $variant='primary' onClick={handleClearSearch}>
            <img src={iconClose} alt='Wyczyść wyszukiwanie' />

            Wyczyść wyszukiwanie
        </Button>
    </StyledSearchInfo>
}

export default SearchInfo