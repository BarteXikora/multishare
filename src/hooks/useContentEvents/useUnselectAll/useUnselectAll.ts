/**
 * useUnselectAll custom hook
 * 
 * This hook is used to unselect all elements. It also resets the selection state to an empty state.
 **/

import { useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'

import { selectedType } from '../../../store/features/contentSlice/contentSlice.types'

const useUnselectAll = () => {
    const dispatch = useDispatch()

    // Defining an empty selection state:
    const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

    // Defining the function to unselect all elements:
    const unselectAll = () => dispatch(setSelected(emptySelect))

    // Returning the unselectAll function:
    return unselectAll
}

export default useUnselectAll