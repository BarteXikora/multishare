import { contentStateType } from './contentSlice.types'

const emptyContent = { folders: [], files: [] }

const initialState: contentStateType = {
    currentPath: [],
    currentFolder: emptyContent,
    loadedContent: { status: 'LOADING' },
    selected: { ...emptyContent, selectionStart: null }
}

export default initialState