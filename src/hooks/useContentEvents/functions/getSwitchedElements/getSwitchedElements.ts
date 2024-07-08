/**
 * getSwitchedElements function
 * 
 * Updates the selectedType object based on the element type and ID.
 * If the element type is 'FOLDER', toggles the inclusion of the folder ID in the selection.
 * If the element type is 'FILE', toggles the inclusion of the file ID in the selection.
 * Also updates the selection start based on the toggled element.
 */

import { elementType, selectedType } from '../../../../store/features/contentSlice/contentSlice.types'

const getSwitchedElements = (selected: selectedType, type: elementType, id: number): selectedType => {
    switch (type) {
        case 'FOLDER':

            // Toggling inclusion of the folder ID:
            if (selected.folders.includes(id)) selected.folders = selected.folders.filter(folder => folder !== id)
            else selected.folders = [...selected.folders, id]

            // Updating selection start:
            selected.selectionStart = { type: 'FOLDER', id }
            break

        case 'FILE':

            // Toggling inclusion of the file ID:
            if (selected.files.includes(id)) selected.files = selected.files.filter(file => file !== id)
            else selected.files = [...selected.files, id]

            // Updating selection start:
            selected.selectionStart = { type: 'FILE', id }
            break
    }

    // Retirning the new selection object: 
    return selected
}

export default getSwitchedElements
