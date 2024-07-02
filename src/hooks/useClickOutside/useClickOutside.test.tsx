import { render, screen, fireEvent } from '../../test-utils'
import { useRef } from 'react'
import useClickOutside from './useClickOutside'

describe('Use Click Outside Hook', () => {

    test('calls callback when clicking outside the ref element', () => {
        const callMe = jest.fn()

        const TestComponent = () => {
            const ref = useRef<HTMLDivElement>(null)

            useClickOutside(ref, callMe)

            return <div ref={ref}>Inside</div>
        }

        render(<TestComponent />)

        const element = screen.getByText('Inside')
        fireEvent.click(element)

        expect(callMe).not.toHaveBeenCalled()

        fireEvent.mouseDown(document)

        expect(callMe).toHaveBeenCalled()
    })

})