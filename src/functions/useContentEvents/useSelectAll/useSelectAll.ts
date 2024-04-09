import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getAllElements from '../functions/getAllElements/getAllElements'

const useSelectAll = () => {
    const dispatch = useDispatch()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const selectAll = (unselectAllOnSecondClick: boolean = true) => {
        dispatch(setSelected(getAllElements(currentFolder, selected, unselectAllOnSecondClick)))
    }

    return selectAll
}

export default useSelectAll