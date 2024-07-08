/** 
 * Projects buttons
 * 
 * Rendered in the SideMenu component when a project is not selected.
**/

import { useDispatch } from '../../../../store/store'
import { toggle } from '../../../../store/features/sideMenuSlice/sideMenuSlice'

import Button from '../../../ui/button/Button'
import { IconAdd, IconProjects } from '../../../ui/icon/Icons'

const ProjectsButtons = () => {
    const dispatch = useDispatch()

    // Rendering the component:
    return <>
        <Button $variant='tertiary' onClick={() => dispatch(toggle(false))}>
            <IconAdd />

            Utwórz projekt
        </Button>

        <Button $variant='tertiary' $active onClick={() => dispatch(toggle(false))}>
            <IconProjects />

            Dostępne projekty
        </Button>
    </>
}

export default ProjectsButtons