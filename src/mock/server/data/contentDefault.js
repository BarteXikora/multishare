const exampleContent = {
    folders: [
        {
            id: 387456394534,
            name: 'Wycieczka na rowery - sierpień 2023',
            star: false,
            details: {},
            content: {
                folders: [
                    {
                        id: 68665437674,
                        name: 'Nieobrobione',
                        star: true,
                        details: {},
                        content: { folders: [], files: [] }
                    }, {
                        id: 74567486345,
                        name: 'Pozostałe - większość do śmieci',
                        star: false,
                        details: {},
                        content: { folders: [], files: [] }
                    }
                ],
                files: [
                    {
                        id: 6535674655366,
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
                        name: 'Do zrobienia',
                        extension: 'TXT',
                        details: {
                            createdDate: new Date().toLocaleString(),
                            lastModificationDate: new Date().toLocaleString(),
                            fileSizeBites: 25000
                        },
                        star: false
                    }
                ]
            }
        }, {
            id: 456745675455,
            name: 'Pozostałe',
            star: false,
            details: {},
            content: { folders: [], files: [] }
        }
    ],
    files: []
}

module.exports = exampleContent