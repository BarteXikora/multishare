import { ElementType, selectedType } from '../../../store/features/contentSlice/contentSlice.types'

const controlClick = (selected: selectedType, type: ElementType, id: number): selectedType => {
    switch (type) {
        case 'FOLDER':
            if (selected.folders.includes(id)) selected.folders = selected.folders.filter(folder => folder !== id)
            else selected.folders = [...selected.folders, id]

            selected.selectionStart = { type: 'FOLDER', id }

            break

        case 'FILE':
            if (selected.files.includes(id)) selected.files = selected.files.filter(file => file !== id)
            else selected.files = [...selected.files, id]

            selected.selectionStart = { type: 'FILE', id }
    }

    return selected
}

export default controlClick