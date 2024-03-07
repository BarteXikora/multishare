import StyledSeachInput from './SearchInput.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import iconSearch from '../../../assets/icons/icon-search.svg'

type SearchInputType = {
    placeholder?: string
}

const SearchInput = ({ placeholder }: SearchInputType) => {
    return <StyledSeachInput>
        <Input placeholder={placeholder || ''} />

        <Button className='search-button' $variant='secondary' type='submit'>
            <img src={iconSearch} alt="Szukaj" />
        </Button>

        <Button className='open-search-button' $variant='secondary' $size='big'>
            <img src={iconSearch} alt="Szukaj" />
        </Button>
    </StyledSeachInput>
}

export default SearchInput