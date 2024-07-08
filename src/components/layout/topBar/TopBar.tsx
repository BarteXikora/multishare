/** 
 * Top bar
 * 
 * This is the top bar for the app page. It displays the hamburger button to show side
 * menu (on mobile), the SelectProject and the SearchInput. It also provides
 * searching functionality.
**/

import { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'

import StyledTopBar from './TopBar.styles'
import Button from '../../ui/button/Button'
import SelectProject from '../../elements/selectProject/SelectProject'
import SearchInput from '../../elements/searchInput/SearchInput'
import { IconHamburger } from '../../ui/icon/Icons'

const TopBar = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    const [searchValue, setSearchValue] = useState<string>('')

    // Handling search window toggle for mobile:
    const handleSearchWindow = () => dispatch(showWindow('SEARCH'))

    // Handling searching for desktop:
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.currentTarget.querySelectorAll('input')[0].blur()

        if (searchValue.trim() === '') return

        dispatch(setSearch(searchValue.trim()))

        setSearchValue('')
    }

    // Rendering the component:
    return <StyledTopBar>
        <Button className='hamburger-button' $size='big' onClick={() => dispatch(toggle())}>
            <IconHamburger />
        </Button>

        <SelectProject />

        <div className="search">
            <SearchInput
                state={[searchValue, setSearchValue]}
                onSubmit={handleSearch}
                mobileButton={handleSearchWindow}
                placeholder={displayType === 'TRASH' ? 'Szukaj w koszu...' : 'Szukaj folderów i plików...'}
            />
        </div>
    </StyledTopBar>
}

export default TopBar