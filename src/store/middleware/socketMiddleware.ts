import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        next(action)
    }
}

export default socketMiddleware