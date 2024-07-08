/**
 * useOpenFile custom hook
 * 
 * This hook is used to navigate to a file preview page. It handles file opening logic, 
 * considering whether the file is in the trash.
 * 
 * Assumptions:
 * - files cannot be opened if the current view is the trash
 * - on touch screen devices, files can be opened through a mobile-specific interaction
 **/

import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

const useOpenFile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isInTrash = useSelector(state => state.content.displayType) === 'TRASH'
    const projectId = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject.id : null)

    // Defining the function to open a file:
    const openFile = (id: number, mobile?: boolean) => {

        // Returning if it's not a mobile interaction but the device is a touch screen:
        if (!mobile) if (getIsTouchScreen()) return

        // Showing the ConNotOpenInTrash window if trying to open a file in the trash:
        if (isInTrash) return dispatch(showWindow('CAN_NOT_OPEN_IN_TRASH'))

        // Returning if no project is selected:
        if (projectId === null) return

        // Navigating to the file view:
        navigate('/file/' + projectId + '/' + id.toString())
    }

    // Returning the openFile function:
    return openFile
}

export default useOpenFile
