import socket from '../../../../api/socket'
import { resetPreview, setPreview } from '../../../features/previewSlice/previewSlice'

import { Dispatch } from '@reduxjs/toolkit'

const beforePreview = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {
    dispatch(resetPreview())

    socket.once('file', (data: any) => {
        if (data === null) return alert('error')

        dispatch(setPreview(data))
    })

    return true
}

export default beforePreview