const exampleContent = {
    folders: [
        {
            id: 387456394534,
            parentFolder: -1,
            name: 'Wycieczka na rowery - sierpień 2023',
            star: false,
            details: {}
        }, {
            id: 456745675455,
            parentFolder: -1,
            name: 'Pozostałe',
            star: false,
            details: {}
        }, {
            id: 68665437674,
            parentFolder: 387456394534,
            name: 'Nieobrobione',
            star: true,
            details: {}
        }, {
            id: 74567486345,
            parentFolder: 387456394534,
            name: 'Pozostałe - większość do śmieci',
            star: false,
            details: {}
        }
    ],
    files: [
        {
            id: 6535674655366,
            parentFolder: 387456394534,
            name: 'Wycieczka na rowery 1',
            extension: 'PNG',
            preview: 'https://picsum.photos/seed/wycieczkaa/200/300',
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString(),
                fileSizeBites: 25000
            },
            star: false
        }, {
            id: 4567534564654,
            parentFolder: 387456394534,
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: 'https://picsum.photos/seed/wycieczkab/200/300',
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString(),
                fileSizeBites: 25000
            },
            star: false
        }, {
            id: 3456456765435,
            parentFolder: 387456394534,
            name: 'Wycieczka na rowery 3',
            extension: 'JPG',
            preview: 'https://picsum.photos/seed/wycieczkac/200/300',
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString(),
                fileSizeBites: 25000
            },
            star: false
        }, {
            id: 34563675662456,
            parentFolder: 387456394534,
            name: 'Do zrobienia',
            extension: 'TXT',
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString(),
                fileSizeBites: 25000
            },
            star: false
        }, {
            id: 37657546476577,
            parentFolder: 387456394534,
            name: 'Wszystkie zdjęcia',
            extension: 'XLSX',
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString(),
                fileSizeBites: 25000
            },
            star: false
        }
    ]
}

module.exports = exampleContent