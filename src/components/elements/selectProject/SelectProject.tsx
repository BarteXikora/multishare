import StyledSelectProject from './SelectProject.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconSelectProject from '../../../assets/icons/icon-projects.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'
import iconArrowBig from '../../../assets/icons/icon-arrow-down-big.svg'

const SelectProject = () => {
    return <StyledSelectProject>
        <h1>
            <img src={iconFolder} alt="Wybrany projekt" />

            Moje pliki:
        </h1>

        <Button className='desktop-button' $size='big'>
            <img src={iconSelectProject} alt="Projekty" />

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