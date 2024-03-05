import { initialStateType } from './contentSlice.types'

import __exampleContent from './__exampleContent'

const initialState: initialStateType = {
    project: { id: 0, name: 'Moje pliki' },
    currentPath: [],
    currentFolder: { folders: [], files: [] },
    loadedContent: __exampleContent,
    selected: { folders: [], files: [], selectionStart: null }
}

export default initialState