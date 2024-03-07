import { initialStateType } from './contentSlice.types'

const emptyContent = { folders: [], files: [] }

const initialState: initialStateType = {
    currentPath: [],
    currentFolder: emptyContent,
    loadedContent: { status: 'LOADING' },
    selected: { ...emptyContent, selectionStart: null }
}

export default initialState