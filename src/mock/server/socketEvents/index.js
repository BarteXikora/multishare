const getProjects = require('./getProjects')

const socketEvents = [
    { name: 'get_projects', callback: getProjects }
]

module.exports = socketEvents