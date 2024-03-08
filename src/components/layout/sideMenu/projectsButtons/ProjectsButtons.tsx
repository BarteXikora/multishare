import Button from '../../../ui/button/Button'

import iconAdd from '../../../../assets/icons/icon-add.svg'
import iconProject from '../../../../assets/icons/icon-projects.svg'

const ProjectsButtons = () => {
    return <>
        <Button $variant='tertiary'>
            <img src={iconAdd} alt='Utwórz projekt' />

            Utwórz projekt
        </Button>

        <Button $variant='tertiary' $active>
            <img src={iconProject} alt='Dostępne projekty' />

            Dostępne projekty
        </Button>
    </>
}

export default ProjectsButtons