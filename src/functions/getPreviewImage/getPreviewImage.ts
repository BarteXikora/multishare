import imgImage from '../../assets/images/img-file-image.svg'
import imgText from '../../assets/images/img-file-text.svg'
import imgWord from '../../assets/images/img-file-word.svg'
import imgCalculations from '../../assets/images/img-file-calculations.svg'
import imgSlides from '../../assets/images/img-file-slides.svg'
import imgCode from '../../assets/images/img-file-code.svg'
import imgSound from '../../assets/images/img-file-sound.svg'
import imgFilm from '../../assets/images/img-file-film.svg'
import imgPDF from '../../assets/images/img-file-pdf.svg'
import imgUnknown from '../../assets/images/img-file-unknown.svg'

const getPreviewImage = (preview: string | false, extension: string): string => {
    if (preview) return preview

    switch (extension.toUpperCase()) {
        case 'PNG': return imgImage
        case 'JPG': return imgImage
        case 'JPEG': return imgImage
        case 'JFIF': return imgImage
        case 'PJPEG': return imgImage
        case 'PJP': return imgImage
        case 'SVG': return imgImage
        case 'WEBP': return imgImage
        case 'GIF': return imgImage
        case 'BMP': return imgImage
        case 'TIFF': return imgImage
        case 'ICO': return imgImage

        case 'TXT': return imgText
        case 'PDF': return imgPDF

        case 'DOCM': return imgWord
        case 'DOCX': return imgWord
        case 'DOT': return imgWord
        case 'RTF': return imgWord

        case 'XLS': return imgCalculations
        case 'XLSX': return imgCalculations
        case 'ODS': return imgCalculations

        case 'PPTX': return imgSlides

        case 'HTM': return imgCode
        case 'HTML': return imgCode
        case 'JS': return imgCode
        case 'TS': return imgCode
        case 'JSX': return imgCode
        case 'TSX': return imgCode
        case 'C': return imgCode
        case 'CPP': return imgCode
        case 'CS': return imgCode
        case 'JAVA': return imgCode

        case 'MP3': return imgSound
        case 'WAV': return imgSound
        case 'AAC': return imgSound
        case 'MIDI': return imgSound

        case 'AVI': return imgFilm
        case 'MP4': return imgFilm
        case 'FLV': return imgFilm
    }

    return imgUnknown
}

export default getPreviewImage