/**
 * The initial state of the redux previewSlice:
 */

import { previewStateType } from './previewSlice.types'

const initialState: previewStateType = {
    content: { status: 'LOADING' }
}

export default initialState