const getProjects = require('./getProjects')
const enterProject = require('./enterProject')
const getFile = require('./getFile')
const addFolder = require('./addFolder')

const socketEvents = [
    { name: 'get_projects', callback: getProjects },
    { name: 'enter_project', callback: enterProject },
    { name: 'get_file', callback: getFile },
    { name: 'add_folder', callback: addFolder }
]

module.exports = socketEvents