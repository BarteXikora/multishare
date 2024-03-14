import { ReactNode } from 'react'

export type showWindowType = {
    title: string
    content: ReactNode | null
}

export type windowStateType = {
    isShown: boolean
    title: string
    content: ReactNode | null
}