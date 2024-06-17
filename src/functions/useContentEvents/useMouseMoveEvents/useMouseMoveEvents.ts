import { useSelector, useDispatch } from '../../../store/store'
import { useState, useEffect } from 'react'
import { elementType } from '../../../store/features/contentSlice/contentSlice.types'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import getMoveElements from '../functions/getMoveElements/getMoveElements'

const useMouseMoveEvents = () => {
    const MOUSE_MOVE_MIN_DISTANCE = 20

    const dispatch = useDispatch()
    const selected = useSelector(state => state.content.selected)

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [startMousePosition, setStartMousePosition] = useState<[number | null, number | null]>([null, null])

    const [isMouseMove, setIsMouseMove] = useState<boolean>(false)

    const [movedElement, setMovedElement] = useState<{ type: elementType, id: number } | null>(null)

    useEffect(() => {
        const handleEvent = () => {
            setIsMouseDown(false)
            setIsMouseMove(false)
            setMovedElement(null)
        }

        if (isMouseDown) window.addEventListener('mouseup', handleEvent)

        return () => window.removeEventListener('mouseup', handleEvent)

    }, [isMouseDown])

    useEffect(() => {
        console.log('HERE', isMouseDown, isMouseMove)

    }, [isMouseDown, isMouseMove])

    const handleCheckDistance = (newPosition: [number | null, number | null]) => {
        if (startMousePosition[0] === null || startMousePosition[1] === null) return
        if (newPosition[0] === null || newPosition[1] === null) return

        const deltaX = startMousePosition[0] - newPosition[0]
        const deltaY = startMousePosition[1] - newPosition[1]

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (isMouseDown && distance >= MOUSE_MOVE_MIN_DISTANCE) {
            setIsMouseMove(true)

            if (movedElement !== null) dispatch(setSelected(getMoveElements(selected, movedElement.type, movedElement.id)))
        }
    }

    const mouseMoveEvent = (
        event: React.MouseEvent<HTMLElement>,
        _isMouseDown: boolean,
        _isMouseMove: boolean,
        elementType: elementType,
        elementId: number
    ) => {

        if (!isMouseDown) {
            if (_isMouseDown) {
                setIsMouseDown(true)
                setStartMousePosition([event.clientX, event.clientY])
            }

            setMovedElement({ type: elementType, id: elementId })
        }

        if (_isMouseMove) handleCheckDistance([event.clientX, event.clientY])
    }

    return mouseMoveEvent
}

export default useMouseMoveEvents