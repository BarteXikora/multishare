import { uploadFileType } from '../../../features/uploadListSlice/uploadListSlice.types'
import { base64ToFile } from '../../../../functions/base64Converters/base64Conterters'

const getUploadAction = (action: any) => {
    const filesToSend: (Omit<uploadFileType, 'file'> & { file: File })[] = action.payload.map((f: uploadFileType) => {
        return { ...f, file: base64ToFile(f.file, f.name) }
    })

    return filesToSend
}

export default getUploadAction