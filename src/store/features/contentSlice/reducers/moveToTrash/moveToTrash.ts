/**
 * moveToTrash reducer of the redux contentSlice
 * 
 * It recives the list of folders and files to move to the trash. The list contains view elements
 * (elements directly moved to trash - they will be visible in the trash) and contained elements
 * (elements contained in folders moved to the trash - they will not be visible in the trash).
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

type moveToTrashType = {
    view: { folders: number[], files: number[] },
    contained: { folders: number[], files: number[] }
}

const moveToTrash = (state: contentStateType, action: PayloadAction<moveToTrashType>) => {
    if (state.loadedContent.status !== 'READY') return

    // Preparing data:
    const data = action.payload
    let currentContent = { ...state.loadedContent }

    // Moving folders to the trash (view - visible in the trash):
    data.view.folders.forEach(folderId => {
        const folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.view.folders.push(folder)
        }
    })

    // Moving files to the trash (view - visible in the trash):
    data.view.files.forEach(fileId => {
        const file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.view.files.push(file)
        }
    })

    // Moving folders to the trash (contained - not visible in the trash):
    data.contained.folders.forEach(folderId => {
        const folder = currentContent.content.folders.find(f => f.id === folderId)

        if (folder) {
            currentContent.content.folders.splice(currentContent.content.folders.indexOf(folder), 1)
            currentContent.trash.contained.folders.push(folder)
        }
    })

    // Moving files to the trash (contained - not visible in the trash):
    data.contained.files.forEach(fileId => {
        const file = currentContent.content.files.find(f => f.id === fileId)

        if (file) {
            currentContent.content.files.splice(currentContent.content.files.indexOf(file), 1)
            currentContent.trash.contained.files.push(file)
        }
    })

    // Setting the new state:
    state.loadedContent = { ...currentContent }
}

export default moveToTrash