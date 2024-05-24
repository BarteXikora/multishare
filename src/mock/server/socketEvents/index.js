const getProjects = require('./getProjects')
const enterProject = require('./enterProject')
const getFile = require('./getFile')
const addFolder = require('./addFolder')
const moveToTrash = require('./moveToTrash')
const deleteForever = require('./deleteForever')
const restoreFromTrash = require('./restoreFromTrash')

const socketEvents = [
    { name: 'get_projects', callback: getProjects },
    { name: 'enter_project', callback: enterProject },
    { name: 'get_file', callback: getFile },
    { name: 'add_folder', callback: addFolder },
    { name: 'move_to_trash', callback: moveToTrash },
    { name: 'delete_forever', callback: deleteForever },
    { name: 'restore_from_trash', callback: restoreFromTrash }
]

module.exports = socketEvents