import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'
import getPathAndContent from '../../../../../functions/getPathAndContent/getPathAndContent'

const setTreeLocation = (state: initialStateType, action: PayloadAction<number>) => {
    if (action.payload === -1) {
        state.currentPath = []
        state.currentFolder = state.loadedContent

    } else {
        const { path, content } = getPathAndContent(state.loadedContent, action.payload)

        state.currentPath = path
        state.currentFolder = content
    }
}

export default setTreeLocation