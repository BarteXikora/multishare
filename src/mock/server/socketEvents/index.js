const getProjects = require('./getProjects')
const enterProject = require('./enterProject')

const socketEvents = [
    { name: 'get_projects', callback: getProjects },
    { name: 'enter_project', callback: enterProject }
]

module.exports = socketEvents