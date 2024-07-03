import { uploadFileType } from "../../../features/uploadListSlice/uploadListSlice.types"

const getUploadAction = (action: any) => {
    const base64ToFile = (fileData: string, name: string): File => {
        const binaryString = window.atob(fileData.split(',')[1])
        const len = binaryString.length
        const bytes = new Uint8Array(len)

        for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i)

        const arrayBuffer = bytes.buffer

        return new File([arrayBuffer], name);
    }

    const filesToSend: (Omit<uploadFileType, 'file'> & { file: File })[] = action.payload.map((f: uploadFileType) => {
        return { ...f, file: base64ToFile(f.file, f.name) }
    })

    return filesToSend
}

export default getUploadAction