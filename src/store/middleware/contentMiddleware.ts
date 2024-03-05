import { Dispatch } from '@reduxjs/toolkit'

type propsType = {
    dispatch: Dispatch
}

const contentMiddleware = () => {
    return (props: propsType) => (next: any) => (action: any) => {
        console.log('middleware')

        next(action)
    }
}

export default contentMiddleware