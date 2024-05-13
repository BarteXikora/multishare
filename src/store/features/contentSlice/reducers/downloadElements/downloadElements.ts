import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'
import { saveAs } from 'file-saver'

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

const downloadElements = (state: contentStateType, action: PayloadAction<downloadElemetsType>) => {
    if (action.payload.type !== 'RES') return

    const blob = new Blob([action.payload.data.data])

    saveAs(blob, action.payload.data.name)
}

export default downloadElements