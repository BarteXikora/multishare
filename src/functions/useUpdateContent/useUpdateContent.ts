import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setTreeLocation } from '../../store/features/contentSlice/contentSlice'
import getCurrentFolderId from '../getCurrentFolderId/getCurrentFolderId'

const useUpdateContent = () => {
    const dispatch = useDispatch()

    const path = useSelector(state => state.content.currentPath)
    const content = useSelector(state => state.content.loadedContent)
    const sort = useSelector(state => state.content.sort)

    useEffect(() => {
        const currentFolderId: number = getCurrentFolderId(path)

        dispatch(setTreeLocation(currentFolderId))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, sort])
}

export default useUpdateContent