/**
 * getSingleElement function
 * 
 * It recives element type (folder or file) and its id, and returns a selection object with
 * a single element.
 */

import { elementType, selectedType } from '../../../../store/features/contentSlice/contentSlice.types'

const getSingleElement = (type: elementType, id: number): selectedType => {
    switch (type) {

        // Returning the single folder selection:
        case 'FOLDER': return { folders: [id], files: [], selectionStart: { type: 'FOLDER', id } }

        // Returning the single file selection:
        case 'FILE': return { folders: [], files: [id], selectionStart: { type: 'FILE', id } }
    }
}

export default getSingleElement