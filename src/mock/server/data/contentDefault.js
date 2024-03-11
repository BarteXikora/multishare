const exampleContent = {
    folders: [
        {
            id: 0,
            name: 'Prywatne',
            star: true,
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString()
            },
            content: {
                folders: [
                    {
                        id: 3,
                        name: 'Obrazy',
                        star: false,
                        details: {},
                        content: {
                            folders: [
                                {
                                    id: 5,
                                    name: 'Wycieczka na rowery - sierpień 2023',
                                    star: false,
                                    details: {},
                                    content: {
                                        folders: [
                                            {
                                                id: 6,
                                                name: 'Nieobrobione',
                                                star: true,
                                                details: {},
                                                content: { folders: [], files: [] }
                                            }, {
                                                id: 7,
                                                name: 'Pozostałe - większość do śmieci',
                                                star: false,
                                                details: {},
                                                content: { folders: [], files: [] }
                                            }
                                        ],
                                        files: [
                                            {
                                                id: 100,
                                                name: 'Wycieczka na rowery 1',
                                                extension: 'PNG',
                                                details: {
                                                    createdDate: new Date().toLocaleString(),
                                                    lastModificationDate: new Date().toLocaleString(),
                                                    fileSizeBites: 25000
                                                },
                                                star: false
                                            }
                                        ]
                                    }
                                }
                            ],
                            files: []
                        }
                    }, {
                        id: 4,
                        name: 'Dokumenty',
                        content: { folders: [], files: [] },
                        details: {},
                        star: false
                    }
                ],
                files: []
            }
        }, {
            id: 1,
            name: 'Pozostałe',
            star: false,
            details: {},
            content: { folders: [], files: [] }
        }
    ],
    files: []
}

module.exports = exampleContent