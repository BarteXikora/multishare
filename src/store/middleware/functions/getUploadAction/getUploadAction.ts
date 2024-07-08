/**
 * ggetUploadAction function
 * 
 * The function is called in the socketEvents function to get data for the upload_request socket event.
 * It converts the file value from the base64 string to the File type. 
 */

import { uploadFileType } from '../../../features/uploadListSlice/uploadListSlice.types'
import { base64ToFile } from '../../../../functions/base64Converters/base64Conterters'

const getUploadAction = (action: any) => {

    // Converting file value to the File type:
    const filesToSend: (Omit<uploadFileType, 'file'> & { file: File })[] = action.payload.map((f: uploadFileType) => {
        return { ...f, file: base64ToFile(f.file, f.name) }
    })

    // Returning converted data:
    return filesToSend
}

export default getUploadAction