/**
 * getFilesToUpload function
 * 
 * This asynchronous function processes an array of File objects and converts them into an array of uploadFileType objects,
 * ready for upload. It handles the conversion of each file to a base64 string and assigns a unique upload ID.
 **/

import { uploadFileType } from '../../store/features/uploadListSlice/uploadListSlice.types'
import { v4 as uuid } from 'uuid'
import { fileToBase64 } from '../base64Converters/base64Conterters'

const getFilesToUpload = async (files: File[] | null, location: number | null): Promise<uploadFileType[] | false> => {

    // Checking if files or location is invalid and returning false:
    if (!files || !location) return false

    // Processing each file to convert it to base64 and construct an uploadFileType object:
    const filesToUpload: (uploadFileType | null)[] = await Promise.all(files.map(async f => {
        const file = await fileToBase64(f)

        // If file conversion fails, returning null for this file:
        if (!file) return null

        // Returning the constructed uploadFileType object:
        return {
            uploadId: uuid(),
            name: f.name.split('.').slice(0, -1).join(''),
            extension: f.name.split('.').pop() || '',
            parentFolder: location,
            status: 'WAITING',
            uploadPercent: 0,
            file
        }
    }))

    // Filtering out null values to get a valid array of uploadFileType objects:
    const validFilesToUpload: uploadFileType[] = filesToUpload.filter((f): f is uploadFileType => f !== null)

    // Returning the array of valid uploadFileType objects:
    return validFilesToUpload
}

export default getFilesToUpload
