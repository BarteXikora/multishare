import { useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'

import { selectedType } from '../../../store/features/contentSlice/contentSlice.types'

const useUnselectAll = () => {
    const dispatch = useDispatch()

    const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

    const unselectAll = () => dispatch(setSelected(emptySelect))

    return unselectAll
}

export default useUnselectAll