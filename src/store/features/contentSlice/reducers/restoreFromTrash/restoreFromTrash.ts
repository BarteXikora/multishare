/**
 * restoreFromTrash reducer of the redux contentSLice reducer
 * 
 * It recives the list of folders and files in the trash (view - visible in the trash) and
 * movives them to the content. It also moves to the content all contained elements with restored
 * folders ID as parent folder id.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

type dataType = { id: number, parentFolder: number }

export type restoreFromTrashType = {
    folders: dataType[],
    files: dataType[]
}

const restoreFromTrash = (state: contentStateType, action: PayloadAction<restoreFromTrashType>) => {
    if (state.loadedContent.status !== 'READY') return

    // Preparing data:
    let currentContent = { ...state.loadedContent }

    // Moving folders to the content:
    action.payload.folders.forEach(folderData => {
        let found = currentContent.trash.view.folders.find(f => f.id === folderData.id)

        if (found) currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)
        else {
            found = currentContent.trash.contained.folders.find(f => f.id === folderData.id)

            if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
        }

        if (found) {
            found.parentFolder = folderData.parentFolder

            currentContent.content.folders.push(found)
        }
    })

    // Moving files to the content:
    action.payload.files.forEach(fileData => {
        let found = currentContent.trash.view.files.find(f => f.id === fileData.id)

        if (found) currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)
        else {
            found = currentContent.trash.contained.files.find(f => f.id === fileData.id)

            if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
        }

        if (found) {
            found.parentFolder = fileData.parentFolder

            currentContent.content.files.push(found)
        }
    })

    // Setting the new state:
    state.loadedContent = { ...currentContent }
}

export default restoreFromTrash