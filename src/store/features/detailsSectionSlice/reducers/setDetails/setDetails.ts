import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType, { multipleDataType } from '../../initialState.types'

const setDetails = (state: initialStateType, action: PayloadAction<multipleDataType>) => {
    if (action.payload.folders.length === 0 && action.payload.files.length === 0)
        state.content = { type: 'EMPTY' }

    else if (action.payload.folders.length === 1 && action.payload.files.length === 0)
        state.content = {
            type: 'FOLDER',
            data: action.payload.folders[0]
        }

    else if (action.payload.files.length === 1 && action.payload.folders.length === 0)
        state.content = {
            type: 'FILE',
            data: action.payload.files[0]
        }

    else
        state.content = {
            type: 'MULTIPLE',
            data: action.payload
        }
}

export default setDetails