import { useState } from 'react'
import { useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledTopBar from './TopBar.styles'

import Button from '../../ui/button/Button'
import SelectProject from '../../elements/selectProject/SelectProject'
import SearchInput from '../../elements/searchInput/SearchInput'

import iconHamburger from '../../../assets/icons/icon-hamburger.svg'

const TopBar = () => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearchWindow = () => dispatch(showWindow({ title: 'Szukaj', content: 'SEARCH' }))

    return <StyledTopBar>
        <Button className='hamburger-button' $size='big' onClick={() => dispatch(toggle())}>
            <img src={iconHamburger} alt='Otwórz menu' />
        </Button>

        <SelectProject />

        <div className="search">
            <SearchInput
                state={[searchValue, setSearchValue]}
                onSubmit={() => null}
                mobileButton={handleSearchWindow}
                placeholder='Szukaj folderów i plików...'
            />
        </div>
    </StyledTopBar>
}

export default TopBar