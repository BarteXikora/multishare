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

const base64ToFile = (fileData: string, name: string): File => {
    const binaryString = window.atob(fileData.split(',')[1])
    const len = binaryString.length
    const bytes = new Uint8Array(len)

    for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i)

    const arrayBuffer = bytes.buffer

    return new File([arrayBuffer], name);
}

export { fileToBase64, base64ToFile }