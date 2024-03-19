import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const initializeContent = (state: contentStateType, action: PayloadAction<string>) => {
    state.loadedContent.status = 'LOADING'
}

export default initializeContent