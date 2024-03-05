import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setTreeLocation } from '../../store/features/contentSlice/contentSlice'

const useUpdateContent = () => {
    const dispatch = useDispatch()

    const path = useSelector(state => state.content.currentPath)
    const content = useSelector(state => state.content.loadedContent)

    const getCurrentFolderId = (): number => {
        if (path.length === 0) return -1
        return path[path.length].id
    }

    useEffect(() => {
        const currentFolderId: number = getCurrentFolderId()

        dispatch(setTreeLocation(currentFolderId))

    }, [content, dispatch])
}

export default useUpdateContent