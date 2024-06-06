import { FormEvent, useState } from 'react'
import { useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'

import StyledTopBar from './TopBar.styles'

import Button from '../../ui/button/Button'
import SelectProject from '../../elements/selectProject/SelectProject'
import SearchInput from '../../elements/searchInput/SearchInput'

import iconHamburger from '../../../assets/icons/icon-hamburger.svg'

const TopBar = () => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearchWindow = () => dispatch(showWindow({ title: 'Szukaj', content: 'SEARCH' }))

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (searchValue.trim() === '') return

        dispatch(setSearch(searchValue.trim()))

        setSearchValue('')
    }

    return <StyledTopBar>
        <Button className='hamburger-button' $size='big' onClick={() => dispatch(toggle())}>
            <img src={iconHamburger} alt='Otwórz menu' />
        </Button>

        <SelectProject />

        <div className="search">
            <SearchInput
                state={[searchValue, setSearchValue]}
                onSubmit={handleSearch}
                mobileButton={handleSearchWindow}
                placeholder='Szukaj folderów i plików...'
            />
        </div>
    </StyledTopBar>
}

export default TopBar