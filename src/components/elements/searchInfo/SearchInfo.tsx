import { useDispatch } from '../../../store/store'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'

import StyledSearchInfo from './SearchInfo.styles'
import Button from '../../ui/button/Button'
import { IconSearchResults, IconClose } from '../../ui/icon/Icons'

const SearchInfo = ({ search }: { search: string }) => {
    const dispatch = useDispatch()

    const handleClearSearch = () => dispatch(setSearch(''))

    return <StyledSearchInfo>
        <div className='info-box'>
            <IconSearchResults $color='dark' />

            <span>Wyniki wyszukiwania dla frazy <b>&bdquo;{search}&rdquo;</b>.</span>
        </div>

        <Button $variant='primary' onClick={handleClearSearch}>
            <IconClose />

            Wyczyść wyszukiwanie
        </Button>
    </StyledSearchInfo>
}

export default SearchInfo