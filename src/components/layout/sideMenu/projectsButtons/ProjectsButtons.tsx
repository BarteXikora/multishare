/** 
 * Projects buttons
 * 
 * Rendered in the SideMenu component when a project is not selected.
**/

import { useDispatch } from '../../../../store/store'
import { toggle } from '../../../../store/features/sideMenuSlice/sideMenuSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'

import Button from '../../../ui/button/Button'
import { IconAdd, IconProjects } from '../../../ui/icon/Icons'

const ProjectsButtons = () => {
    const dispatch = useDispatch()

    // Handling click on the buttons:
    const __handleClick = () => {
        dispatch(showWindow('WIP'))
        dispatch(toggle(false))
    }

    // Rendering the component:
    return <>
        <Button $variant='tertiary' onClick={__handleClick}>
            <IconAdd />

            Utwórz projekt
        </Button>

        <Button $variant='tertiary' $active onClick={__handleClick}>
            <IconProjects />

            Dostępne projekty
        </Button>
    </>
}

export default ProjectsButtons