import StyledSeachInput from './SearchInput.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import iconSearch from '../../../assets/icons/icon-search.svg'

const SearchInput = () => {
    return <StyledSeachInput>
        <Input placeholder='Szukaj plików i folderów...' />

        <Button $variant='secondary' type='submit'>
            <img src={iconSearch} alt="Szukaj" />
        </Button>
    </StyledSeachInput>
}

export default SearchInput