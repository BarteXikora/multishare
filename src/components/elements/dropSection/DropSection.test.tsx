import { render, screen } from '../../../test-utils'
import DropSection from './DropSection'

describe('Drop Section', () => {

    test('renders correctly', () => {
        render(<DropSection />)

        const imageElement = screen.getByRole('img')
        const textElement = screen.getByText('Upuść pliki i foldery tutaj, aby dodać je na dysk!')

        expect(imageElement).toBeInTheDocument()
        expect(textElement).toBeInTheDocument()
    })

})