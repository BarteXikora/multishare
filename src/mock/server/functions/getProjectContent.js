const { projectsContent } = require('../storage')

const getProjectContent = (projectId) => {
    const projectContentFound = projectsContent.find(project => project.id === projectId)?.content || null

    if (projectContentFound) return JSON.parse(JSON.stringify(projectContentFound))
    return null
}

module.exports = getProjectContent