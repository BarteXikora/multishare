/**
 * getFileTypeName function
 * 
 * Uses the fileTypes array, finds the display name based on extension.
 */

import fileTypes from '../fileTypes'

const getFileTypeName = (extension: string): string => {
    const found = fileTypes.find(type => type.extension === extension.toUpperCase())

    if (found) return found.name
    return 'Nieznany'
}

export default getFileTypeName