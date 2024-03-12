import { fileType } from '../contentSlice/contentSlice.types'

type previewLoading = {
    status: 'LOADING'
}

type previewError = {
    status: 'ERROR',
    error: string
}

type previewReadyImage = { type: 'IMAGE', image: string }

type previewReadyText = { type: 'TEXT', text: string }

type previewReadyNoPreview = { type: 'NO_PREVIEW' }

type previewReady = (previewReadyImage | previewReadyText | previewReadyNoPreview) & {
    status: 'READY',
    file: fileType
}

export type previewStateType = {
    content: previewLoading | previewError | previewReady
}