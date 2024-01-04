const __initialState = {
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