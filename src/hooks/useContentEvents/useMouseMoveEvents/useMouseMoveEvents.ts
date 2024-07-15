/**
 * useMouseMoveEvents custom hook
 * 
 * This hook is used to manage mouse move events for content management. It handles mouse down, mouse up, 
 * mouse move, and hover events, allowing for drag-and-drop functionality.
 * 
 * Assumptions:
 * - the minimum distance to trigger a move event is 5 pixels
 * - elements can be dragged and dropped within a tree structure
 * - only folders can be the target of a drop operation
 * - hover and drop operations are ignored on touch screen devices
 **/

import { useSelector, useDispatch } from '../../../store/store'
import { useState, useEffect } from 'react'
import { elementType, selectedType, updateContentType } from '../../../store/features/contentSlice/contentSlice.types'
import { setOnMove, setSelected, setTargetElement, updateContent } from '../../../store/features/contentSlice/contentSlice'
import getMoveElements from '../functions/getMoveElements/getMoveElements'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

const useMouseMoveEvents = () => {
    // Setting minimum distance to trigger a move event:
    const MOUSE_MOVE_MIN_DISTANCE = 5

    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)
    const onMove = useSelector(state => state.content.onMove)
    const displayType = useSelector(state => state.content.displayType)
    const filter = useSelector(state => state.content.filter)

    // Setting local state to manage mouse down status and start position:
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
    const [startMousePosition, setStartMousePosition] = useState<[number | null, number | null]>([null, null])

    // Setting local state to keep track of the element being moved:
    const [movedElement, setMovedElement] = useState<{ type: elementType, id: number } | null>(null)

    // Using effect to handle the mouse up event globally:
    useEffect(() => {

        // Handling event to reset state when mouse button is released:
        const handleEvent = () => {
            setIsMouseDown(false)
            setMovedElement(null)

            // Resetting move and target element states:
            dispatch(setOnMove({ folders: [], files: [] }))
            dispatch(setTargetElement(null))
        }

        // Adding global mouseup event listener if mouse is down:
        if (isMouseDown) window.addEventListener('mouseup', handleEvent)

        // Cleaning up the event listener:
        return () => window.removeEventListener('mouseup', handleEvent)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMouseDown])

    // Checking if the mouse has moved a minimum distance:
    const handleCheckDistance = (newPosition: [number | null, number | null]) => {
        if (displayType !== 'TREE' || filter.star || filter.time || filter.type) return

        if (startMousePosition[0] === null || startMousePosition[1] === null) return
        if (newPosition[0] === null || newPosition[1] === null) return

        const deltaX = startMousePosition[0] - newPosition[0]
        const deltaY = startMousePosition[1] - newPosition[1]

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        // Updating move state if mouse is down and moved enough distance:
        if (isMouseDown && distance >= MOUSE_MOVE_MIN_DISTANCE) {
            if (movedElement !== null) {
                const moveSelected: selectedType = getMoveElements(selected, movedElement.type, movedElement.id)

                dispatch(setSelected(moveSelected))
                dispatch(setOnMove(moveSelected))
            }
        }
    }

    // Handling hover events:
    const handleHover = (elementType: elementType, elementId: number, isHover: boolean) => {
        if (onMove.folders.length + onMove.files.length === 0) return

        if (!isHover) return dispatch(setTargetElement(null))

        // Avoiding selecting an element that is already in the move list:
        if (elementType === 'FOLDER' && onMove.folders.includes(elementId)) return
        if (elementType === 'FILE' && onMove.files.includes(elementId)) return

        dispatch(setTargetElement({ type: elementType, id: elementId }))
    }

    // Handling drop events:
    const handleDrop = () => {
        if (onMove.folders.length + onMove.files.length === 0) return
        if (!onMove.targetElement) return

        // Ensuring the target is a folder and not a file:
        if (onMove.targetElement.type === 'FILE') return
        if (onMove.folders.includes(onMove.targetElement.id)) return

        const targetFolderId: number = onMove.targetElement.id

        // Preparing the update payload:
        const update: updateContentType = {
            folders: onMove.folders.map(f => { return { id: f, parentFolder: targetFolderId } }),
            files: onMove.files.map(f => { return { id: f, parentFolder: targetFolderId } })
        }

        // Dispatching the update action:
        dispatch(updateContent(update))
    }

    // Main function to handle various mouse events:
    const mouseMoveEvent = (
        event: React.MouseEvent<HTMLElement>,
        action: 'MOUSE_DOWN' | 'MOUSE_UP' | 'MOUSE_MOVE' | 'HOVER_IN' | 'HOVER_OUT',
        elementType: elementType,
        elementId: number
    ) => {

        // Returning if the device is a touch screen:
        if (getIsTouchScreen()) return

        if (!isMouseDown) {
            if (action === 'MOUSE_DOWN') {
                setIsMouseDown(true)
                setStartMousePosition([event.clientX, event.clientY])
            }

            setMovedElement({ type: elementType, id: elementId })
        }

        // Handling different mouse actions:
        if (action === 'MOUSE_UP') handleDrop()
        if (action === 'MOUSE_MOVE') handleCheckDistance([event.clientX, event.clientY])
        if (action === 'HOVER_IN') handleHover(elementType, elementId, true)
        if (action === 'HOVER_OUT') handleHover(elementType, elementId, false)
    }

    // Returning the mouse event handler function:
    return mouseMoveEvent
}

export default useMouseMoveEvents
