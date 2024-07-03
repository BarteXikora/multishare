import { uploadFileType } from '../../store/features/uploadListSlice/uploadListSlice.types'
import { v4 as uuid } from 'uuid'

const getFilesToUpload = async (files: File[] | null, location: number | null): Promise<uploadFileType[] | false> => {
    if (!files || !location) return false

    const fileToBase64 = (file: File): Promise<string | false> => {
        return new Promise(resolve => {
            const reader = new FileReader()

            reader.onload = () => {
                if (typeof reader.result === 'string') resolve(reader.result)
                else resolve(false)
            }

            reader.onerror = () => resolve(false)

            reader.readAsDataURL(file)
        })
    }

    const filesToUpload: (uploadFileType | null)[] = await Promise.all(files.map(async f => {
        const file = await fileToBase64(f)

        if (!file) return null

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

    const validFilesToUpload: uploadFileType[] = filesToUpload.filter((f): f is uploadFileType => f !== null)

    return validFilesToUpload
}

export default getFilesToUpload