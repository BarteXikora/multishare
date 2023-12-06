import StyledTopBar from './TopBar.styles'
import SelectProject from '../../elements/selectProject/SelectProject'
import SearchInput from '../../elements/searchInput/SearchInput'

const TopBar = () => {
    return <StyledTopBar>
        <SelectProject />

        <div className="search">
            <SearchInput />
        </div>
    </StyledTopBar>
}

export default TopBar