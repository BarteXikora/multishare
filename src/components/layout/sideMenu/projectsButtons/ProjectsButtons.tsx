import Button from '../../../ui/button/Button'
import { IconAdd, IconProjects } from '../../../ui/icon/Icons'

const ProjectsButtons = () => {
    return <>
        <Button $variant='tertiary'>
            <IconAdd />

            Utwórz projekt
        </Button>

        <Button $variant='tertiary' $active>
            <IconProjects />

            Dostępne projekty
        </Button>
    </>
}

export default ProjectsButtons