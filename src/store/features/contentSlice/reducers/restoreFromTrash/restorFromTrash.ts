import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

type dataType = { id: number, parentFolder: number }

export type restoreFromTrashType = {
    folders: dataType[],
    files: dataType[]
}

const restoreFromTrash = (state: contentStateType, action: PayloadAction<restoreFromTrashType>) => { }

export default restoreFromTrash