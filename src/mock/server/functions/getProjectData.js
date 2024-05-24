const getProjectData = (projects, projectID) => projects.find(project => project.id === projectID) || null

module.exports = getProjectData