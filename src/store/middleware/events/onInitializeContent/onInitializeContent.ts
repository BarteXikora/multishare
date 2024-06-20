import { Dispatch } from '@reduxjs/toolkit'

import socket from '../../../../api/socket'
import { setContent, setTreeLocation } from '../../../features/contentSlice/contentSlice'
import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'

const onInitializeContent = (dispatch: Dispatch, action: any) => {
    console.log('INIT CONTENT', action.payload)

    socket.emit('get_content')

    const pathnameData = getDataFromPathname(action.payload).data

    const handleLoadContent = (data: any) => {
        if (data === null) return alert('error')

        console.log('content set')
        dispatch(setContent(data))

        if (pathnameData) {
            let folderId: number = pathnameData === 'home' ? -1 : Number(pathnameData)

            dispatch(setTreeLocation(folderId))
        }
    }
    socket.on('content', handleLoadContent)
}

export default onInitializeContent