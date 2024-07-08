/**
 * getFileType function
 * 
 * Uses the fileTypes array, finds the preview icon type based on extension.
 */

import fileTypes from '../fileTypes'

const getFileType = (extension: string): string => {
    const found = fileTypes.find(type => type.extension === extension.toUpperCase())

    if (found) return found.type
    return 'UNKNOWN'
}

export default getFileType