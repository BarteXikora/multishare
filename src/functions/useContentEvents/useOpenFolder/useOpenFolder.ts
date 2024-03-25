import { useDispatch } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

const useOpenFolder = () => {
    const dispatch = useDispatch()

    const openFolder = (folderId: number) => dispatch(setTreeLocation(folderId))

    return openFolder
}

export default useOpenFolder