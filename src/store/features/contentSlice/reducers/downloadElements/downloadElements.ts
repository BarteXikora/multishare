/**
 * downloadElements reducer of the redux contentSlice
 * 
 * It recives file from the server and saves it.
 */

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

// The reducer:
const downloadElements = (state: contentStateType, action: PayloadAction<downloadElemetsType>) => {
    if (action.payload.type !== 'RES') return

    const blob = new Blob([action.payload.data.data])

    saveAs(blob, action.payload.data.name)
}

export default downloadElements