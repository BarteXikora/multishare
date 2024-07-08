/** 
 * The initial state of the redux detailsSectionSlice
*/

import { detailsSectionStateType } from './detailsSection.types'

const initialState: detailsSectionStateType = {
    isShown: false,
    content: { type: 'EMPTY' }
}

export default initialState