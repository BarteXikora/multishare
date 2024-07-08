/** 
 * useMobileEvents custom hook
 * 
 * This hook is used in the useContentEvents hook. It returns a function allowing to manage
 * content on touch screens. It returns a function that handles different touch events 
 * (touch start, touch end, and touch move).
 * 
 * Assumptions:
 * - if nothing is selected, a short touch opens an element (enters folder or opens files preview)
 * - holding a touch for 500ms selects an element
 * - if anything is selected, a short touch selects a not selected element, or unselects a selected one (it toggles selection)
 * - moving a touch cancels all actions to avoid selection on scrolling
 **/

import { useState, useRef } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import useOpenFolder from '../useOpenFolder/useOpenFolder'
import useOpenFile from '../useOpenFile/useOpenFile'
import getSingleElement from '../functions/getSingleElement/getSingleElement'
import getSwitchedElements from '../functions/getSwitchedElements/getSwitchedElements'

import { selectedType, elementType } from '../../../store/features/contentSlice/contentSlice.types'

const useMobileEvents = () => {
    const dispatch = useDispatch()
    const openFolder = useOpenFolder()
    const openFile = useOpenFile()

    const selected = useSelector(state => state.content.selected)

    const [touchHoldTimeout, setTouchHoldTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)
    const isTouchMovingRef = useRef<boolean>(false)

    // Helper function to count the number of selected elements:
    const selectedCnt = (selected: selectedType): number => {
        let cnt = 0

        if (selected.folders) cnt += selected.folders.length
        if (selected.files) cnt += selected.files.length

        return cnt
    }

    // The main function to handle touch events:
    const mobileEvents = (
        action: 'START' | 'END' | 'MOVE',
        type: elementType,
        id: number
    ) => {

        // Handle touch start event:
        if (action === 'START') {

            // Set a timeout to detect a long press:
            setTouchHoldTimeout(setTimeout(() => {
                if (isTouchMovingRef.current) return

                // If nothing is selected, select the current element:
                if (selectedCnt(selected) === 0) dispatch(setSelected(getSingleElement(type, id)))

                // Clear the timeout:
                if (touchHoldTimeout) clearTimeout(touchHoldTimeout)
                setTouchHoldTimeout(null)

            }, 500))
        }

        // Handle touch end event:
        else if (action === 'END') {
            if (touchHoldTimeout !== null) {
                clearTimeout(touchHoldTimeout)
                setTouchHoldTimeout(null)

                if (!isTouchMovingRef.current) {

                    // If nothing is selected, open the folder or file:
                    if (selectedCnt(selected) === 0) {
                        if (type === 'FOLDER') openFolder(id, true)
                        else openFile(id, true)
                    }

                    // Otherwise, toggle the selection of the element:
                    else dispatch(setSelected(getSwitchedElements({ ...selected }, type, id)))
                }
            }

            // Reset the touch moving flag:
            isTouchMovingRef.current = false
        }

        // Handle touch move event:
        else {

            // Set the touch moving flag to true:
            isTouchMovingRef.current = true
        }
    }

    // Returning the function to handle touch events:
    return mobileEvents
}

export default useMobileEvents