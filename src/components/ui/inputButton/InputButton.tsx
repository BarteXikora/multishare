import { ReactNode } from 'react'
import StyledInputButton from './InputButton.styles'
import Input from '../input/Input'
import Button, { ButtonProps } from '../button/Button'

type InputButtonType = {
    buttonContent: ReactNode | string
    inputState: [string, (v: string) => any]
    onSubmit: (e: React.FormEvent) => any
    placeholder?: string
    buttonOptions?: ButtonProps
    autoFocus?: boolean
    autoSelect?: boolean
}

const InputButton = (props: InputButtonType) => {
    const {
        buttonContent, inputState, onSubmit, placeholder,
        buttonOptions, autoFocus, autoSelect
    } = props

    const handleFocus = (e: React.FocusEvent) => {
        if (!autoSelect) return

        const input = e.target as HTMLInputElement
        input.select()
    }

    return <StyledInputButton onSubmit={onSubmit} className='inputbutton-form'>
        <Input
            value={inputState[0]}
            onChange={e => inputState[1](e.target.value)}
            placeholder={placeholder || ''}
            autoFocus={(autoFocus || autoSelect)}
            className='inputbutton-input'
            onFocus={e => handleFocus(e)}
        />

        <Button type='submit' className='inputbutton-button' $variant='primary' {...buttonOptions}>
            {buttonContent}
        </Button>
    </StyledInputButton>
}

export default InputButton