/**
 * useSelect custom hook
 * 
 * This hook is used to manage selection of elements. It handles selection logic, considering whether the 
 * interface is on a touch screen device, and supporting single, range, and toggle selection.
 * 
 * Assumptions:
 * - it doesn't handle selection on touch screens; useMobileEvents hook does it
 * - shift-click selects a range of elements
 * - ctrl-click toggles the selection of an element
 * - A regular click selects a single element
 **/

import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getSingleElement from '../functions/getSingleElement/getSingleElement'
import getElementsRange from '../functions/getElementsRange/getElementsRange'
import getSwitchedElements from '../functions/getSwitchedElements/getSwitchedElements'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

import { elementType } from '../../../store/features/contentSlice/contentSlice.types'

const useSelect = () => {
    const dispatch = useDispatch()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    // Defining the function to handle selection of elements:
    const select = (event: React.MouseEvent<HTMLElement>, type: elementType, id: number) => {

        // Preventing default behavior of the event:
        event.preventDefault()

        // Returning if the device is a touch screen:
        if (getIsTouchScreen()) return

        // Handling selection based on modifier keys:
        if (event.shiftKey) {

            // Selecting a range of elements:
            dispatch(setSelected(getElementsRange(currentFolder, selected, type, id)))

        } else if (event.ctrlKey) {

            // Toggling the selection of an element:
            dispatch(setSelected(getSwitchedElements({ ...selected }, type, id)))

        } else {

            // Selecting a single element:
            dispatch(setSelected(getSingleElement(type, id)))
        }
    }

    // Returning the select function:
    return select
}

export default useSelect
