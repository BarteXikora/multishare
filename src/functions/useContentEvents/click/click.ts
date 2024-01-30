import { ElementType, selectedType } from '../../../store/features/contentSlice/contentSlice.types'

const click = (type: ElementType, id: number): selectedType => {
    switch (type) {
        case 'FOLDER': return { folders: [id], selectionStart: { type: 'FOLDER', id } }
        case 'FILE': return { files: [id], selectionStart: { type: 'FILE', id } }
    }
}

export default click