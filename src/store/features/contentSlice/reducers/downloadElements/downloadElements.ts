import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

type downloadElemetsRequestType = {
    type: 'REQ',
    folders: number[],
    files: number[]
}

type downloadElemetsResponseType = {
    type: 'RES',
    data: {
        data: string,
        name: string
    }
}

type downloadElemetsType = downloadElemetsRequestType | downloadElemetsResponseType

const downloadElements = (state: contentStateType, action: PayloadAction<downloadElemetsType>) => { }

export default downloadElements