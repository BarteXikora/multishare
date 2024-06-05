import fileTypes from '../fileTypes'

const getFileTypeName = (extension: string): string => {
    const found = fileTypes.find(type => type.extension === extension.toUpperCase())

    if (found) return found.name
    return 'Nieznany'
}

export default getFileTypeName