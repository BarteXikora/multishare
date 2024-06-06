import { FormEvent } from 'react'

import StyledSeachInput from './SearchInput.styles'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

import iconSearch from '../../../assets/icons/icon-search-dark.svg'

type SearchInputType = {
    state: [string, (s: string) => void]
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    mobileButton: () => void
    placeholder?: string
}

const SearchInput = ({ state, onSubmit, mobileButton, placeholder }: SearchInputType) => {
    return <StyledSeachInput onSubmit={onSubmit}>
        <Input value={state[0]} onChange={e => state[1](e.target.value)} placeholder={placeholder || ''} />

        <Button className='search-button' $variant='secondary' type='submit'>
            <img src={iconSearch} alt="Szukaj" />
        </Button>

        <Button className='open-search-button' $variant='secondary' $size='big' type='button' onClick={mobileButton}>
            <img src={iconSearch} alt="Szukaj" />
        </Button>
    </StyledSeachInput>
}

export default SearchInput