import StyledTopBar from './TopBar.styles'

import Button from '../../ui/button/Button'
import SelectProject from '../../elements/selectProject/SelectProject'
import SearchInput from '../../elements/searchInput/SearchInput'

import iconHamburger from '../../../assets/icons/icon-hamburger.svg'

const TopBar = () => {
    return <StyledTopBar>
        <Button className='hamburger-button' $size='big'>
            <img src={iconHamburger} alt='Otwórz menu' />
        </Button>

        <SelectProject />

        <div className="search">
            <SearchInput />
        </div>
    </StyledTopBar>
}

export default TopBar