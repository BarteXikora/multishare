/**
 * getPreviewImage function
 * 
 * Uses the fileTypes array, returns the preview of the file. If file has its own
 * preview image the function returs it. Otherwise it finds icon type in the fileTypes
 * array and returns proper icon.
 */

import fileTypes from '../fileTypes'

import imgImage from '../../../assets/images/img-file-image.svg'
import imgText from '../../../assets/images/img-file-text.svg'
import imgWord from '../../../assets/images/img-file-word.svg'
import imgCalculations from '../../../assets/images/img-file-calculations.svg'
import imgSlides from '../../../assets/images/img-file-slides.svg'
import imgCode from '../../../assets/images/img-file-code.svg'
import imgSound from '../../../assets/images/img-file-sound.svg'
import imgFilm from '../../../assets/images/img-file-film.svg'
import imgPDF from '../../../assets/images/img-file-pdf.svg'
import imgUnknown from '../../../assets/images/img-file-unknown.svg'

const getPreviewImage = (preview: string | false, extension: string): string => {

    // Returning files preview if exists:
    if (preview) return preview


    // Finding and returning file type icon:
    const found = fileTypes.find(type => type.extension === extension.toUpperCase())

    if (!found) return imgUnknown
    switch (found.type) {
        case 'IMAGE': return imgImage
        case 'TEXT': return imgText
        case 'PDF': return imgPDF
        case 'WORD': return imgWord
        case 'CALCULATIONS': return imgCalculations
        case 'SLIDES': return imgSlides
        case 'CODE': return imgCode
        case 'SOUND': return imgSound
        case 'FILM': return imgFilm
    }
}

export default getPreviewImage