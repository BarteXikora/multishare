const projects = require('./data/projects')
const projectsContent = []
projectsContent.push({ id: projects[0].id, content: require('./data/contentDefault') })
projectsContent.push({ id: projects[1].id, content: require('./data/contentProject1') })

module.exports = { projects, projectsContent }