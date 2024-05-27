type fileTypesType = {
    extension: string
    name: string
    type: 'IMAGE' | 'TEXT' | 'PDF' | 'WORD' | 'CALCULATIONS' | 'SLIDES' | 'CODE' | 'SOUND' | 'FILM'
}[]

const fileTypes: fileTypesType = [
    { extension: 'PNG', name: 'Portable Network Graphics', type: 'IMAGE' },
    { extension: 'JPG', name: 'Joint Photographic Experts Group', type: 'IMAGE' },
    { extension: 'JPEG', name: 'Joint Photographic Experts Group', type: 'IMAGE' },
    { extension: 'JFIF', name: 'JPEG File Interchange Format', type: 'IMAGE' },
    { extension: 'PJPEG', name: 'Joint Photographic Experts Group', type: 'IMAGE' },
    { extension: 'SVG', name: 'Scalable Vector Graphics', type: 'IMAGE' },
    { extension: 'WEBP', name: 'WebP', type: 'IMAGE' },
    { extension: 'GIF', name: 'Graphics Interchange Format', type: 'IMAGE' },
    { extension: 'BMP', name: 'Windows Bitmap', type: 'IMAGE' },
    { extension: 'TIFF', name: 'Tagged Image File Format', type: 'IMAGE' },
    { extension: 'ICO', name: 'ICO', type: 'IMAGE' },

    { extension: 'TXT', name: 'Plik tekstowy', type: 'TEXT' },
    { extension: 'PDF', name: 'Portable Document Format', type: 'PDF' },

    { extension: 'DOCM', name: 'Microsoft Word macro-enabled document', type: 'WORD' },
    { extension: 'DOCX', name: 'Microsoft Word text document', type: 'WORD' },
    { extension: 'RTF', name: 'Rich Text Format', type: 'WORD' },

    { extension: 'XLS', name: 'Original Excel Workbook', type: 'CALCULATIONS' },
    { extension: 'XLSX', name: 'Microsoft Excel Spreadsheet', type: 'CALCULATIONS' },
    { extension: 'ODS', name: 'Open Document', type: 'CALCULATIONS' },

    { extension: 'PPTX', name: 'PowerPoint', type: 'SLIDES' },

    { extension: 'HTM', name: 'Hyper Text Markup Language', type: 'CODE' },
    { extension: 'HTML', name: 'Hyper Text Markup Language', type: 'CODE' },
    { extension: 'JS', name: 'JavaScript', type: 'CODE' },
    { extension: 'TS', name: 'TypeScript', type: 'CODE' },
    { extension: 'JSX', name: 'JavaScript Syntax Extended', type: 'CODE' },
    { extension: 'TSX', name: 'TypeScript Syntax Extended', type: 'CODE' },
    { extension: 'C', name: 'C', type: 'CODE' },
    { extension: 'CPP', name: 'C++', type: 'CODE' },
    { extension: 'CS', name: 'C#', type: 'CODE' },
    { extension: 'JAVA', name: 'Java', type: 'CODE' },

    { extension: 'MP3', name: 'MPEG-1 Audio Layer 3', type: 'SOUND' },
    { extension: 'WAV', name: 'Waveform Audio File Format', type: 'SOUND' },
    { extension: 'AAC', name: 'Advanced Audio Coding', type: 'SOUND' },
    { extension: 'MIDI', name: 'Musical Instrument Digital Interface', type: 'SOUND' },

    { extension: 'AVI', name: 'Audio Video Interleave', type: 'FILM' },
    { extension: 'MP4', name: 'MPEG-4 Part 14', type: 'FILM' },
    { extension: 'FLV', name: 'Flash Video', type: 'FILM' }
]

export default fileTypes