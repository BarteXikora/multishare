/**
 * useOpenFolder custom hook
 * 
 * This hook is used to navigate to a selected folder. It handles folder opening logic, 
 * considering whether the interface is on a touch screen device, whether the folder is 
 * in the trash, and resets filters and search parameters.
 * 
 * Assumptions:
 * - folders cannot be opened if the current view is the trash
 * - on touch screen devices, folders can be opened through a mobile-specific interaction
 * - opening a folder resets filters, search parameters, and sets the display type to 'TREE'
 **/

import { useSelector, useDispatch } from '../../../store/store'
import { setDisplayType, setFilter, setSearch, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

const useOpenFolder = () => {
    const dispatch = useDispatch()

    const isInTrash = useSelector(state => state.content.displayType) === 'TRASH'

    // Defining the function to open a folder:
    const openFolder = (folderId: number, mobile?: boolean) => {

        // Returning if it's not a mobile interaction but the device is a touch screen:
        if (!mobile) if (getIsTouchScreen()) return

        // Showing the ConNotOpenInTrash window if trying to open a folder in the trash:
        if (isInTrash) return dispatch(showWindow('CAN_NOT_OPEN_IN_TRASH'))

        // Resetting filters, search parameters, and setting display type to 'TREE':
        dispatch(setFilter({ type: null, time: null, star: null }))
        dispatch(setSearch(''))
        dispatch(setDisplayType('TREE'))
        dispatch(setTreeLocation(folderId))
    }

    // Returning the openFolder function:
    return openFolder
}

export default useOpenFolder
