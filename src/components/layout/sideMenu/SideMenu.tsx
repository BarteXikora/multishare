import StyledSideMenu from './SideMenu.styles'
import Button from '../../ui/button/Button'
import logo from '../../../assets/images/img-logo.svg'

const SideMenu = () => {
    return <StyledSideMenu>
        <section>
            <Button variant='tertiary'>
                <img src={logo} alt="Logo multishare" />
            </Button>
        </section>
    </StyledSideMenu>
}

export default SideMenu