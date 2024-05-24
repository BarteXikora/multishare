const { projects } = require('../storage')

const getProjectData = (projectID) => projects.find(project => project.id === projectID) || null

module.exports = getProjectData