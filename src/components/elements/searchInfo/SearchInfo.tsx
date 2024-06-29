import { useDispatch } from '../../../store/store'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledSearchInfo from './SearchInfo.styles'
import Button from '../../ui/button/Button'
import { IconSearchResults, IconClose } from '../../ui/icon/Icons'

const SearchInfo = ({ search }: { search: string }) => {
    const dispatch = useDispatch()

    const handleClearSearch = () => dispatch(setSearch(''))

    return <StyledSearchInfo>
        <div className='info-box'>
            <div className="icon"><IconSearchResults $color='dark' /></div>

            <span>Wyniki wyszukiwania dla frazy <b>&bdquo;{getShortenName(search, 30)}&rdquo;</b>.</span>
        </div>

        <Button $variant='primary' onClick={handleClearSearch}>
            <IconClose />

            <span className="label">Wyczyść wyszukiwanie</span>
        </Button>
    </StyledSearchInfo>
}

export default SearchInfo