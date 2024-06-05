import { contentStateType } from './contentSlice.types'

const emptyContent = { folders: [], files: [] }

const initialState: contentStateType = {
    currentPath: [],
    displayType: 'TREE',
    sort: { sortBy: 'NAME', method: 'ASC' },
    filter: { time: null, type: null, star: null },
    currentFolder: emptyContent,
    loadedContent: { status: 'LOADING' },
    selected: { ...emptyContent, selectionStart: null }
}

export default initialState