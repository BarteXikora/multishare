const logIn = require('./logIn')
const getContent = require('./getContent')
const selectedProject = require('./selectProject')
const getFile = require('./getFile')
const addFolder = require('./addFolder')
const moveToTrash = require('./moveToTrash')
const deleteForever = require('./deleteForever')
const restoreFromTrash = require('./restoreFromTrash')
const updateContent = require('./updateContent')
const downloadRequest = require('./downloadRequest')
const uploadRequest = require('./uploadRequest')

const socketEvents = [
    { name: 'log_in', callback: logIn },
    { name: 'get_content', callback: getContent },
    { name: 'select_project', callback: selectedProject },
    { name: 'get_file', callback: getFile },
    { name: 'add_folder', callback: addFolder },
    { name: 'move_to_trash', callback: moveToTrash },
    { name: 'delete_forever', callback: deleteForever },
    { name: 'restore_from_trash', callback: restoreFromTrash },
    { name: 'update_content', callback: updateContent },
    { name: 'download_request', callback: downloadRequest },
    { name: 'upload_request', callback: uploadRequest }
]

module.exports = socketEvents