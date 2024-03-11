import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'
import initialState from '../../initialState'

const resetContent = (state: contentStateType, action: PayloadAction) => {
    state.currentFolder = initialState.currentFolder
    state.loadedContent = initialState.loadedContent
    state.currentPath = initialState.currentPath
    state.selected = initialState.selected
}

export default resetContent