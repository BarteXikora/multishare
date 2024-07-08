/** 
 * The UI Dropdown component
 * 
 * It displays the button clicking on whitch shows the dropdown content. It also implements 
 * functionality of hiding the dropdown content on click on an option, or outside.
**/

import { useState, useRef } from 'react'
import useClickOutside from '../../../hooks/useClickOutside/useClickOutside'

import StyledDropdown from './Dropdown.styles'
import AnimatedDropdownContent from './Dropdown.animation'
import Button, { ButtonProps } from '../button/Button'
import { IconArrowDown } from '../icon/Icons'

import { AnimatePresence } from 'framer-motion'

// Dropdown props types:
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

    // Calling the useClickOutside hook to hide dropdown content when clicking anywhere outside the content:
    useClickOutside(dropdownRef, () => setIsOpen(false))

    // Rendering the component:
    return <StyledDropdown ref={dropdownRef} className={`${className || ''} ${isOpen && 'dropdown-open'}`}>

        {/* Rendering the dropdown button: */}
        <Button
            {...buttonOptions}

            onClick={() => setIsOpen(!isOpen)}
        >
            {buttonContent}

            {showArrow && <IconArrowDown />}
        </Button>

        {/* Conditional rendering the dropdown content with animations: */}
        <AnimatePresence>
            {
                isOpen && <AnimatedDropdownContent>
                    <div onClick={() => setIsOpen(false)} className="dropdown-content">{dropdownContent}</div>
                </AnimatedDropdownContent>
            }
        </AnimatePresence>
    </StyledDropdown>
}

export default Dropdown