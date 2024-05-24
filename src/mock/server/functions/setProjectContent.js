const setProjectContent = (projectsContent, projectId, newContent) => {
    const found = projectsContent.find(project => project.id === projectId)

    if (!found) return false

    found.content = { ...newContent }
    return true
}

module.exports = setProjectContent