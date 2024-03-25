import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setSelected } from '../../../store/features/contentSlice/contentSlice'
import useOpenFolder from '../useOpenFolder/useOpenFolder'
import getSingleElement from '../functions/getSingleElement/getSingleElement'
import getSwitchedElements from '../functions/getSwitchedElements/getSwitchedElements'

import { selectedType, elementType } from '../../../store/features/contentSlice/contentSlice.types'

const useMobileEvents = () => {
    const dispatch = useDispatch()
    const openFolder = useOpenFolder()

    const selected = useSelector(state => state.content.selected)

    const [touchHoldTimeout, setTouchHoldTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

    const selectedCnt = (selected: selectedType): number => {
        let cnt = 0

        if (selected.folders) cnt += selected.folders.length
        if (selected.files) cnt += selected.files.length

        return cnt
    }

    const mobileEvents = (event: React.TouchEvent<HTMLElement>, isTouchStart: boolean, type: elementType, id: number) => {
        event.preventDefault()

        if (isTouchStart) setTouchHoldTimeout(setTimeout(() => {
            if (selectedCnt(selected) === 0) dispatch(setSelected(getSingleElement(type, id)))

            if (touchHoldTimeout) clearTimeout(touchHoldTimeout)
            setTouchHoldTimeout(null)

        }, 500))

        else {
            if (touchHoldTimeout !== null) {
                clearTimeout(touchHoldTimeout)
                setTouchHoldTimeout(null)

                if (selectedCnt(selected) === 0) {
                    if (type === 'FOLDER') openFolder(id)
                }
                else dispatch(setSelected(getSwitchedElements({ ...selected }, type, id)))
            }
        }
    }

    return mobileEvents
}

export default useMobileEvents