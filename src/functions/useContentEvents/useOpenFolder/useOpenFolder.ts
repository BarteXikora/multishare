import { useSelector, useDispatch } from '../../../store/store'
import { setDisplayType, setFilter, setSearch, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'

const useOpenFolder = () => {
    const dispatch = useDispatch()

    const isInTrash = useSelector(state => state.content.displayType) === 'TRASH'

    const openFolder = (folderId: number) => {
        if (isInTrash) return dispatch(showWindow({
            title: 'Element znajduje się w koszu',
            content: 'CAN_NOT_OPEN_IN_TRASH'
        }))

        dispatch(setFilter({ type: null, time: null, star: null }))
        dispatch(setSearch(''))
        dispatch(setDisplayType('TREE'))
        dispatch(setTreeLocation(folderId))
    }

    return openFolder
}

export default useOpenFolder