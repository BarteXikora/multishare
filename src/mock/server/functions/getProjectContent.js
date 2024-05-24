const getProjectContent = (projectsContent, projectId) => {
    return projectsContent.find(project => project.id === projectId)?.content || null
}

module.exports = getProjectContent