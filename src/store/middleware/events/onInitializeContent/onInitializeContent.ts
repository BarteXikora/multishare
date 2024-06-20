import { Dispatch } from '@reduxjs/toolkit'

import socket from '../../../../api/socket'
import { setContent } from '../../../features/contentSlice/contentSlice'

const onInitializeContent = (dispatch: Dispatch) => {
    socket.emit('get_content')

    const handleLoadContent = (data: any) => {
        if (data === null) return alert('error')

        dispatch(setContent(data))
    }
    socket.on('content', handleLoadContent)
}

export default onInitializeContent