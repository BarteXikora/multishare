import { uploadFileType } from '../../store/features/uploadListSlice/uploadListSlice.types'
import { v4 as uuid } from 'uuid'

const getFilesToUpload = (files: File[] | null, location: number | null): uploadFileType[] | false => {
    if (!files || !location) return false

    const filesToUpload: uploadFileType[] = files.map(f => {
        return {
            uploadId: uuid(),
            name: f.name.split('.').slice(0, -1).join(''),
            extension: f.name.split('.').pop() || '',
            parentFolder: location,
            status: 'WAITING',
            uploadPercent: 0,
            file: new File([f], f.name)
        }
    })

    return filesToUpload
}

export default getFilesToUpload