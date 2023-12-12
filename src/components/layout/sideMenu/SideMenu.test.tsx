import { render, screen } from '../../../test-utils'
import SideMenu from './SideMenu'

describe('Side Menu', () => {

    test('renders correctly', () => {
        render(<SideMenu />)
        const sideMenuElement = screen.getByRole('navigation')
        expect(sideMenuElement).toBeInTheDocument()
    })

    test('renders all buttons', () => {
        render(<SideMenu />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(8)
    })

})