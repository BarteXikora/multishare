import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'

import socketEvents from './socketEvents'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        socketEvents(next, action, dispatch)
    }
}

export default socketMiddleware