import { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSearch } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledSearchWindow from './SearchWindow.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

import iconSearch from '../../../assets/icons/icon-search.svg'

const SearchWindow = () => {
    const dispatch = useDispatch()

    const displayType = useSelector(state => state.content.displayType)

    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (searchValue.trim() === '') return

        dispatch(setSearch(searchValue.trim()))
        dispatch(closeWindow())
    }

    return <StyledSearchWindow>
        <section>
            <form className="main" onSubmit={handleSearch}>
                <Input
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder={displayType === 'TRASH' ? 'Szukaj w koszu...' : 'Szukaj folderów i plików...'}
                />

                <Button $size='big' type='submit'>
                    <img src={iconSearch} alt='Szukaj' />
                </Button>
            </form>
        </section>
    </StyledSearchWindow>
}

export default SearchWindow