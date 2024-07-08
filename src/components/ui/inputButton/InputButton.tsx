/** 
 * The UI input with button component 
 * 
 * Renders the simple form element with a single input and a submit button. Gets input state and 
 * submit handler as props.
**/

import { ReactNode } from 'react'
import StyledInputButton from './InputButton.styles'
import Input from '../input/Input'
import Button, { ButtonProps } from '../button/Button'

// Input Button props types:
// autoFocus - if true, input focuses when rendered
// autoSelect - if true, text in the input selects when input focused, couses autoFocus functionality as well
type InputButtonType = {
    buttonContent: ReactNode | string
    inputState: [string, (v: string) => any]
    onSubmit: (e: React.FormEvent) => any
    placeholder?: string
    buttonOptions?: ButtonProps
    autoFocus?: boolean
    autoSelect?: boolean
}

// Rendering the component:
const InputButton = (props: InputButtonType) => {
    const {
        buttonContent, inputState, onSubmit, placeholder,
        buttonOptions, autoFocus, autoSelect
    } = props

    // Handling selecting the inputs text on input focus if autoSelect prop is true:
    const handleFocus = (e: React.FocusEvent) => {
        if (!autoSelect) return

        const input = e.target as HTMLInputElement
        input.select()
    }

    // Rendering the component:
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