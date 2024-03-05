import { Dispatch } from '@reduxjs/toolkit'
import socket from '../../api/socket'
import { contentType } from '../features/contentSlice/contentSlice.types'
import { setContent } from '../features/contentSlice/contentSlice'

type paramsType = {
    dispatch: Dispatch
}

const contentMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        switch (action.type) {
            case 'contentSlice/initialize': {
                socket.on('content', (data: any) => {
                    const recivedContent: contentType = {
                        folders: (data && data.folders) ? data.folders : [],
                        files: (data && data.files) ? data.files : []
                    }

                    params.dispatch(setContent(recivedContent))
                })

                socket.emit('get_content')
            }
        }

        next(action)
    }
}

export default contentMiddleware