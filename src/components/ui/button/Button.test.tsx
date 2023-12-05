import { render, screen } from '../../../test-utils'
import user from '@testing-library/user-event'

import Button from './Button'
import image from '../../../assets/icons/icon-folder.svg'

describe('Button', () => {

    test('renders correctly without any props', () => {
        render(<Button></Button>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders text inside', () => {
        render(<Button>Test</Button>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveTextContent('Test')
    })

    test('renders image inside', () => {
        render(<Button><img src={image} alt="test" /></Button>)
        const imageElement = screen.getByRole('img')
        expect(imageElement).toBeInTheDocument()
    })

    test('renders correctly with variants', () => {
        render(<>
            <Button $variant='primary'></Button>
            <Button $variant='secondary'></Button>
            <Button $variant='tertiary'></Button>
        </>)

        const buttonElement = screen.getAllByRole('button')
        expect(buttonElement).toHaveLength(3)
    })

    test('works with onclick', async () => {
        user.setup()
        const onClickMock = jest.fn()

        render(<Button onClick={onClickMock}></Button>)
        const buttonElement = screen.getByRole('button')

        await user.click(buttonElement)

        expect(onClickMock).toHaveBeenCalled()
    })

})