import StyledSelectProject from './SelectProject.styles'
import Button from '../../ui/button/Button'

import iconProject from '../../../assets/icons/icon-project.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'
import iconArrowBig from '../../../assets/icons/icon-arrow-down-big.svg'

const SelectProject = () => {
    return <StyledSelectProject>
        <h1>
            <img src={iconProject} alt="Wybrany projekt" />

            Moje pliki:
        </h1>

        <Button className='desktop-button' $size='big'>
            Wszystkie projekty

            <img src={iconArrow} alt="Wybierz projekt" />
        </Button>

        <Button className='mobile-button' $variant='secondary' $size='big'>
            <div className="project-name">Moje pliki</div>

            <div className="icon-arrow">
                <img src={iconArrowBig} alt="Wybierz projekt" />
            </div>
        </Button>
    </StyledSelectProject>
}

export default SelectProject