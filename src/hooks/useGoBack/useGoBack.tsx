/** 
 * useGoBack custom hook
 * 
 * This hook is used to move one step back in the folders tree location.
**/

import { useSelector, useDispatch } from '../../store/store'
import { setTreeLocation } from '../../store/features/contentSlice/contentSlice'

const useGoBack = () => {
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    return () => dispatch(setTreeLocation(currentPath.length > 1 ? currentPath[currentPath.length - 2].id : -1))
}

export default useGoBack