import { render, screen } from '../../../test-utils'
import ProcessPill from './ProcessPill'

describe('Process Pill', () => {

    test('renders correctly', () => {
        render(<ProcessPill />)

        const imageElement = screen.getByRole('img')
        const textElement = screen.getByText('Wszystko aktualne!')

        expect(imageElement).toBeInTheDocument()
        expect(textElement).toBeInTheDocument()
    })

})