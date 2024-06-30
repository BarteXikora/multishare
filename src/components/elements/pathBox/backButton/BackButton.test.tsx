import { render, screen } from '../../../../test-utils'

import BackButton from './BackButton'

describe('Back Button', () => {

    test('renders correctly', () => {
        render(<BackButton isHome={false} />)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })

})
