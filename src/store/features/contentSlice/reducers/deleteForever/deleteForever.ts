import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const deleteForever = (state: contentStateType, action: PayloadAction<{ folders: [], files: [] }>) => { }

export default deleteForever