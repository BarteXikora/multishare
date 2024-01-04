import { initialStateType } from './contentSlice.types'

import __exampleContent from './__exampleContent'

const initialState: initialStateType = {
    currentPath: [],
    currentFolder: {},
    loadedContent: __exampleContent
}

export default initialState