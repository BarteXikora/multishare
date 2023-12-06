import StyledSelectProject from './SelectProject.styles'
import Button from '../../ui/button/Button'

import iconProject from '../../../assets/icons/icon-project.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'

const SelectProject = () => {
    return <StyledSelectProject>
        <h1>
            <img src={iconProject} alt="Wybrany projekt" />

            Moje pliki:
        </h1>

        <Button $size='big'>
            Wszystkie projekty

            <img src={iconArrow} alt="Wybierz projekt" />
        </Button>
    </StyledSelectProject>
}

export default SelectProject