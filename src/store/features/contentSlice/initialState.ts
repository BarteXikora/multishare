import { initialStateType } from './contentSlice.types'

import __exampleContent from './__exampleContent'

const initialState: initialStateType = {
    project: { id: 0, name: 'Moje pliki' },
    currentPath: [],
    currentFolder: {},
    loadedContent: __exampleContent
}

export default initialState