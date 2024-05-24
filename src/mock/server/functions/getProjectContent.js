const { projectsContent } = require('../storage')

const getProjectContent = (projectId) => {
    return projectsContent.find(project => project.id === projectId)?.content || null
}

module.exports = getProjectContent