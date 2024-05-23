const getFileTypeName = (extension: string): string => {
    switch (extension.toUpperCase()) {
        case 'PNG': return 'Portable Network Graphics'
        case 'JPG': return 'Joint Photographic Experts Group'
        case 'JPEG': return 'Joint Photographic Experts Group'
        case 'JFIF': return 'JPEG File Interchange Format'
        case 'PJPEG': return 'Joint Photographic Experts Group'
        case 'SVG': return 'Scalable Vector Graphics'
        case 'WEBP': return 'WebP'
        case 'GIF': return 'Graphics Interchange Format'
        case 'BMP': return 'Windows Bitmap'
        case 'TIFF': return 'Tagged Image File Format'
        case 'ICO': return 'ICO'

        case 'TXT': return 'Plik tekstowy'
        case 'PDF': return 'Portable Document Format'

        case 'DOCM': return 'Microsoft Word macro-enabled document'
        case 'DOCX': return 'Microsoft Word text document'
        case 'RTF': return 'Rich Text Format'

        case 'XLS': return 'Original Excel Workbook'
        case 'XLSX': return 'Microsoft Excel Spreadsheet'
        case 'ODS': return 'Open Document'

        case 'PPTX': return 'PowerPoint'

        case 'HTM': return 'Hyper Text Markup Language'
        case 'HTML': return 'Hyper Text Markup Language'
        case 'JS': return 'JavaScript'
        case 'TS': return 'TypeScript'
        case 'JSX': return 'JavaScript Syntax Extended'
        case 'TSX': return 'TypeScript Syntax Extended'
        case 'C': return 'C'
        case 'CPP': return 'C++'
        case 'CS': return 'C#'
        case 'JAVA': return 'Java'

        case 'MP3': return 'MPEG-1 Audio Layer 3'
        case 'WAV': return 'Waveform Audio File Format'
        case 'AAC': return 'Advanced Audio Coding'
        case 'MIDI': return 'Musical Instrument Digital Interface'

        case 'AVI': return 'Audio Video Interleave'
        case 'MP4': return 'MPEG-4 Part 14'
        case 'FLV': return 'Flash Video'
    }

    return 'nieznany'
}

export default getFileTypeName