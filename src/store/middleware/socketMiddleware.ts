import { Dispatch } from '@reduxjs/toolkit'

type paramsType = {
    dispatch: Dispatch
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        next(action)
    }
}

export default socketMiddleware