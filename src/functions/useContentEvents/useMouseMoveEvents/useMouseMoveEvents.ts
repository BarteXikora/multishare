import { useSelector, useDispatch } from '../../../store/store'
import { useState, useEffect } from 'react'
import { elementType, selectedType } from '../../../store/features/contentSlice/contentSlice.types'
import { setOnMove, setSelected, setTargetElement } from '../../../store/features/contentSlice/contentSlice'
import getMoveElements from '../functions/getMoveElements/getMoveElements'

const useMouseMoveEvents = () => {
    const MOUSE_MOVE_MIN_DISTANCE = 20

    const dispatch = useDispatch()
    const selected = useSelector(state => state.content.selected)
    const onMove = useSelector(state => state.content.onMove)

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [startMousePosition, setStartMousePosition] = useState<[number | null, number | null]>([null, null])

    const [movedElement, setMovedElement] = useState<{ type: elementType, id: number } | null>(null)

    useEffect(() => {
        const handleEvent = () => {
            setIsMouseDown(false)
            setMovedElement(null)

            dispatch(setOnMove({ folders: [], files: [] }))
            dispatch(setTargetElement(null))
        }

        if (isMouseDown) window.addEventListener('mouseup', handleEvent)

        return () => window.removeEventListener('mouseup', handleEvent)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMouseDown])

    const handleCheckDistance = (newPosition: [number | null, number | null]) => {
        if (startMousePosition[0] === null || startMousePosition[1] === null) return
        if (newPosition[0] === null || newPosition[1] === null) return

        const deltaX = startMousePosition[0] - newPosition[0]
        const deltaY = startMousePosition[1] - newPosition[1]

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (isMouseDown && distance >= MOUSE_MOVE_MIN_DISTANCE) {
            if (movedElement !== null) {
                const moveSelected: selectedType = getMoveElements(selected, movedElement.type, movedElement.id)

                dispatch(setSelected(moveSelected))
                dispatch(setOnMove(moveSelected))
            }
        }
    }

    const handleHover = (elementType: elementType, elementId: number, isHover: boolean) => {
        if (onMove.folders.length + onMove.files.length === 0) return

        if (!isHover) return dispatch(setTargetElement(null))

        if (elementType === 'FOLDER' && onMove.folders.includes(elementId)) return
        if (elementType === 'FILE' && onMove.files.includes(elementId)) return

        dispatch(setTargetElement({ type: elementType, id: elementId }))
    }

    const mouseMoveEvent = (
        event: React.MouseEvent<HTMLElement>,
        action: 'MOUSE_DOWN' | 'MOUSE_MOVE' | 'HOVER_IN' | 'HOVER_OUT',
        elementType: elementType,
        elementId: number
    ) => {

        if (!isMouseDown) {
            if (action === 'MOUSE_DOWN') {
                setIsMouseDown(true)
                setStartMousePosition([event.clientX, event.clientY])
            }

            setMovedElement({ type: elementType, id: elementId })
        }

        if (action === 'MOUSE_MOVE') handleCheckDistance([event.clientX, event.clientY])

        if (action === 'HOVER_IN') {
            console.log('MOUSE ENTER', elementType)
            handleHover(elementType, elementId, true)
        }

        if (action === 'HOVER_OUT') {
            console.log('MOUSE LEAVE', elementType)
            handleHover(elementType, elementId, false)
        }
    }

    return mouseMoveEvent
}

export default useMouseMoveEvents