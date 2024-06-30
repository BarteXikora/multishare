import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getSingleElement from '../functions/getSingleElement/getSingleElement'
import getElementsRange from '../functions/getElementsRange/getElementsRange'
import getSwitchedElements from '../functions/getSwitchedElements/getSwitchedElements'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

import { elementType } from '../../../store/features/contentSlice/contentSlice.types'

const useSelect = () => {
    const dispatch = useDispatch()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const select = (event: React.MouseEvent<HTMLElement>, type: elementType, id: number) => {
        event.preventDefault()

        if (getIsTouchScreen()) return

        if (event.shiftKey) dispatch(setSelected(getElementsRange(currentFolder, selected, type, id)))
        else if (event.ctrlKey) dispatch(setSelected(getSwitchedElements({ ...selected }, type, id)))
        else dispatch(setSelected(getSingleElement(type, id)))
    }

    return select
}

export default useSelect