/**
 * The initial state of the redux previewSlice:
 */

import { previewStateType } from './initialState.types'

const initialState: previewStateType = {
    content: { status: 'LOADING' }
}

export default initialState