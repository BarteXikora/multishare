import { contentStateType } from './contentSlice.types'

const emptyContent = { folders: [], files: [] }

const initialState: contentStateType = {
    currentPath: [],
    displayType: 'TREE',
    sort: { sortBy: 'NAME', method: 'ASC' },
    filter: { time: null, type: null, star: null },
    search: '',
    currentFolder: emptyContent,
    loadedContent: { status: 'LOADING' },
    selected: { ...emptyContent, selectionStart: null },
    onMove: { ...emptyContent, targetElement: null }
}

export default initialState