/**
 * previewSlice types
 */

import { fileType } from '../contentSlice/contentSlice.types'

type previewLoading = {
    status: 'LOADING'
}

type previewError = {
    status: 'ERROR',
    error: string
}

export type setPreviewType = {
    file: fileType,
    type: 'IMAGE' | 'TEXT' | 'NO_PREVIEW',
    data: string
}

export type previewReady = setPreviewType & {
    status: 'READY',
}

// The state type:
export type previewStateType = {
    content: previewLoading | previewError | previewReady
}