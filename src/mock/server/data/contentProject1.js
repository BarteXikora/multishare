const exampleContent = {
    content: {
        folders: [
            {
                id: 0,
                parentFolder: -1,
                name: 'Folder 1',
                star: true,
                details: {
                    createdDate: new Date().toISOString(),
                    lastModificationDate: new Date().toISOString()
                }
            }, {
                id: 1,
                parentFolder: -1,
                name: 'Folder 2',
                star: false,
                details: {
                    createdDate: new Date().toISOString(),
                    lastModificationDate: new Date().toISOString()
                }
            }, {
                id: 2,
                parentFolder: -1,
                name: 'Folder 3',
                star: false,
                details: {
                    createdDate: new Date().toISOString(),
                    lastModificationDate: new Date().toISOString()
                }
            }
        ],
        files: []
    },
    trash: {
        view: {
            folders: [],
            files: []
        },
        contained: {
            folders: [],
            files: []
        }
    }
}

module.exports = exampleContent