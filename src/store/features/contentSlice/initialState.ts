import { initialStateType } from './contentSlice.types'

import __exampleContent from './__exampleContent'

const initialState: initialStateType = {
    projectName: 'Moje pliki',
    currentPath: [],
    currentFolder: {},
    loadedContent: __exampleContent
}

export default initialState