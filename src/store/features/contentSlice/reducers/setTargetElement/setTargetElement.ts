import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, elementType } from '../../contentSlice.types'

const setTargetElement = (state: contentStateType, action: PayloadAction<{ type: elementType, id: number } | null>) => {
    state.onMove.targetElement = action.payload
    console.log(action.payload)
}

export default setTargetElement