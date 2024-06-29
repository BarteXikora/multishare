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

    const selectedCnt = (selected: selectedType): number => {
        let cnt = 0

        if (selected.folders) cnt += selected.folders.length
        if (selected.files) cnt += selected.files.length

        return cnt
    }

    const mobileEvents = (
        action: 'START' | 'END' | 'MOVE',
        type: elementType,
        id: number
    ) => {

        if (action === 'START') setTouchHoldTimeout(setTimeout(() => {
            if (isTouchMovingRef.current) return

            if (selectedCnt(selected) === 0) dispatch(setSelected(getSingleElement(type, id)))

            if (touchHoldTimeout) clearTimeout(touchHoldTimeout)
            setTouchHoldTimeout(null)

        }, 500))

        else if (action === 'END') {
            if (touchHoldTimeout !== null) {
                clearTimeout(touchHoldTimeout)
                setTouchHoldTimeout(null)

                if (!isTouchMovingRef.current) {
                    if (selectedCnt(selected) === 0) {
                        if (type === 'FOLDER') openFolder(id, true)
                        else openFile(id, true)
                    }
                    else dispatch(setSelected(getSwitchedElements({ ...selected }, type, id)))
                }
            }

            isTouchMovingRef.current = false
        }

        else {
            isTouchMovingRef.current = true
        }
    }

    return mobileEvents
}

export default useMobileEvents