import { initialStateType } from './contentSlice.types'

const emptyContent = { folders: [], files: [] }

const initialState: initialStateType = {
    project: { id: 0, name: 'Moje pliki' },
    currentPath: [],
    currentFolder: emptyContent,
    loadedContent: emptyContent,
    selected: { ...emptyContent, selectionStart: null }
}

export default initialState