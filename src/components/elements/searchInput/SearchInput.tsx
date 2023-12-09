import StyledSeachInput from './SearchInput.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import iconSearch from '../../../assets/icons/icon-search.svg'

const SearchInput = () => {
    return <StyledSeachInput>
        <Input placeholder='Szukaj plików i folderów...' />

        <Button className='search-button' $variant='secondary' type='submit'>
            <img src={iconSearch} alt="Szukaj" />
        </Button>

        <Button className='open-search-button' $variant='secondary' $size='big'>
            <img src={iconSearch} alt="Szukaj" />

            Wyszukaj...
        </Button>
    </StyledSeachInput>
}

export default SearchInput