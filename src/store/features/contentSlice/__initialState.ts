const __initialState = {
    loadedContent: {
        folders: [
            {
                id: 0,
                name: 'Prywatne',
                star: true,
                content: {
                    folders: [
                        {
                            id: 3,
                            name: 'Obrazy',
                            content: {
                                folders: [
                                    {
                                        id: 5,
                                        name: 'Wycieczka na rowery - sierpień 2023',
                                        content: {
                                            folders: [
                                                {
                                                    id: 6,
                                                    name: 'Nieobrobione',
                                                    star: true,
                                                    content: {}
                                                }, {
                                                    id: 7,
                                                    name: 'Pozostałe - większość do śmieci',
                                                    content: {}
                                                }
                                            ],
                                            files: [
                                                {
                                                    id: 100,
                                                    name: 'Wycieczka na rowery 1',
                                                    extension: 'PNG'
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
                            content: {}
                        }
                    ],
                    files: []
                }
            }, {
                id: 1,
                name: 'Pozostałe',
                content: {}
            }
        ],
        files: []
    },

    currentFolder: {
        folders: [{
            id: 0,
            name: 'Test A',
            star: false
        }, {
            id: 1,
            name: 'Test B',
            star: true
        }],

        files: [{
            id: 0,
            name: 'Plik 1',
            extension: 'PNG',
            star: true
        }, {
            id: 1,
            name: 'Plik 2',
            extension: 'TXT',
            star: false
        }]
    }
}

export default __initialState