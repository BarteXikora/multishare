/**
 * useSelectAll custom hook
 * 
 * This hook is used to select or unselect all elements in the current folder.
 * 
 * Assumptions:
 * - on the first invocation, it selects all elements in the current folder
 * - on the second invocation, if `unselectAllOnSecondClick` is true, it unselects all elements
 **/

import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getAllElements from '../functions/getAllElements/getAllElements'

const useSelectAll = () => {
    const dispatch = useDispatch()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    // Defining the function to select or unselect all elements:
    const selectAll = (unselectAllOnSecondClick: boolean = true) => {

        // Dispatching the action to set the selected elements:
        dispatch(setSelected(getAllElements(currentFolder, selected, unselectAllOnSecondClick)))
    }

    // Returning the selectAll function:
    return selectAll
}

export default useSelectAll
