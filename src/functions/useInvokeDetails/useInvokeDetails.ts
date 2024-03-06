import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'

import { setDetails } from '../../store/features/detailsSectionSlice/detailsSectionSlice'
import { multipleDataType } from '../../store/features/detailsSectionSlice/initialState.types'

const useInvokeDetails = () => {
    const selected = useSelector(state => state.content.selected)
    const content = useSelector(state => state.content.currentFolder)
    const dispatch = useDispatch()

    useEffect(() => {
        const data: multipleDataType = { folders: [], files: [] }

        for (const folder of content.folders) {
            if (selected.folders.includes(folder.id)) data.folders.push(folder)
        }

        for (const file of content.files) {
            if (selected.files.includes(file.id)) data.files.push(file)
        }

        dispatch(setDetails(data))

    }, [selected, dispatch, content])
}

export default useInvokeDetails