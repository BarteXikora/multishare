import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

type moveToTrashType = {
    view: { folders: number[], files: number[] },
    contained: { folders: number[], files: number[] }
}

const moveToTrash = (state: contentStateType, action: PayloadAction<moveToTrashType>) => {
    if (state.loadedContent.status !== 'READY') return

    const data = action.payload
    let currentContent = { ...state.loadedContent }

    data.view.folders.forEach(folderId => {
        const folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.view.folders.push(folder)
        }
    })

    data.view.files.forEach(fileId => {
        const file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.view.files.push(file)
        }
    })

    data.contained.folders.forEach(folderId => {
        const folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.contained.folders.push(folder)
        }
    })

    data.contained.files.forEach(fileId => {
        const file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.contained.files.push(file)
        }
    })

    state.loadedContent = { ...currentContent }
}

export default moveToTrash