import StyledSearchWindow from './SearchWindow.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

import iconSearch from '../../../assets/icons/icon-search.svg'

const SearchWindow = () => {
    return <StyledSearchWindow>
        <section className="main">
            <Input placeholder='Szukaj folderów i plików...' />

            <Button $size='big'>
                <img src={iconSearch} alt='Szukaj' />
            </Button>
        </section>
    </StyledSearchWindow>
}

export default SearchWindow