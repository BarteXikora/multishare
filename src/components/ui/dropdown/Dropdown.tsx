import { useState, useRef } from 'react'
import useClickOutside from '../../../functions/useClickOutside/useClickOutside'

import StyledDropdown from './Dropdown.styles'
import Button, { ButtonProps } from '../button/Button'

import iconArrow from '../../../assets/icons/icon-arrow-down.svg'

type DropdownProps = {
    className?: string
    buttonContent: React.ReactNode | string
    dropdownContent: React.ReactNode | string
    buttonOptions?: ButtonProps
    showArrow?: boolean
}

const Dropdown = ({ buttonContent, dropdownContent, buttonOptions, showArrow = true, className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const dropdownRef = useRef(null)
    useClickOutside(dropdownRef, () => setIsOpen(false))

    return <StyledDropdown ref={dropdownRef} className={`${className || ''} ${isOpen && 'dropdown-open'}`}>
        <Button
            $variant={buttonOptions?.$variant || 'primary'}
            $size={buttonOptions?.$size || 'small'}
            $active={buttonOptions?.$active}

            onClick={() => setIsOpen(!isOpen)}
        >
            {buttonContent}

            {showArrow && <img src={iconArrow} className='icon-arrow' alt='Rozwiń opcje' />}
        </Button>

        <div className="dropdown-content">{dropdownContent}</div>
    </StyledDropdown>
}

export default Dropdown