import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const restoreFromTrash = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => { }

export default restoreFromTrash