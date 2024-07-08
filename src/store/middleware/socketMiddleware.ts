/**
 * socketMiddleware
 * 
 * This it the middleware, that supports connection to the server. It uses the socketEvents function
 * to create events for all actions.
 */

import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'

import socketEvents from './functions/socketEvents/socketEvents'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

// The middleware:
const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        socketEvents(next, action, dispatch)
    }
}

export default socketMiddleware