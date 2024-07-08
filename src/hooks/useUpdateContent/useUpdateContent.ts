/**
 * useUpdateContent custom hook
 * 
 * Manages updating the content tree location based on changes in content, sorting, filtering, or search.
 * Calculates the current folder ID from the path and dispatches it to the store.
 */

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setTreeLocation } from '../../store/features/contentSlice/contentSlice'
import getCurrentFolderId from '../../functions/getCurrentFolderId/getCurrentFolderId'

const useUpdateContent = () => {
    const dispatch = useDispatch()

    const path = useSelector(state => state.content.currentPath)
    const content = useSelector(state => state.content.loadedContent)
    const sort = useSelector(state => state.content.sort)
    const filter = useSelector(state => state.content.filter)
    const search = useSelector(state => state.content.search)

    useEffect(() => {

        // Calculating the current folder ID from the path:
        const currentFolderId: number = getCurrentFolderId(path)

        // Dispatching the current folder ID to set the tree location:
        dispatch(setTreeLocation(currentFolderId))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, sort, filter, search])
}

export default useUpdateContent