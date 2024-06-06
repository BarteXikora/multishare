import { FormEvent, useState } from 'react'
import { useDispatch } from '../../../store/store'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledSearchWindow from './SearchWindow.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

import iconSearch from '../../../assets/icons/icon-search.svg'

const SearchWindow = () => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (searchValue.trim() === '') return

        dispatch(setSearch(searchValue.trim()))
        dispatch(closeWindow())
    }

    return <StyledSearchWindow>
        <form className="main" onSubmit={handleSearch}>
            <Input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder='Szukaj folderów i plików...'
            />

            <Button $size='big' type='submit'>
                <img src={iconSearch} alt='Szukaj' />
            </Button>
        </form>
    </StyledSearchWindow>
}

export default SearchWindow