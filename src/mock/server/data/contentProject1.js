const exampleContent = {
    folders: [
        {
            id: 0,
            name: 'Folder 1',
            star: true,
            details: {
                createdDate: new Date().toLocaleString(),
                lastModificationDate: new Date().toLocaleString()
            },
            content: { folders: [], files: [] }
        }, {
            id: 1,
            name: 'Folder 2',
            star: false,
            details: {},
            content: { folders: [], files: [] }
        }, {
            id: 2,
            name: 'Folder 3',
            star: false,
            details: {},
            content: { folders: [], files: [] }
        }
    ],
    files: []
}

module.exports = exampleContent