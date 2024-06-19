import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { elementType } from '../../../store/features/contentSlice/contentSlice.types'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getMoveElements from '../functions/getMoveElements/getMoveElements'
import { showContextMenu } from '../../../store/features/contextMenuSlice/contextMenuSlice'

const useContextMenu = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    const handleDefaultContextMenu = (e: MouseEvent) => e.preventDefault()

    useEffect(() => {
        window.addEventListener('contextmenu', handleDefaultContextMenu)

        return () => window.removeEventListener('contextmenu', handleDefaultContextMenu)

    }, [])

    const contextMenu = (event: React.MouseEvent<HTMLElement>, elementType: elementType, elementId: number) => {
        dispatch(setSelected(getMoveElements(selected, elementType, elementId)))
        dispatch(showContextMenu('ELEMENT'))
    }

    return contextMenu
}

export default useContextMenu