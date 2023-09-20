const db = require('../../data/dbConfig');

async function getProjects () {
    return db('projects');
}
async function insertProject(project) {
    const [newId] = await db('projects').insert(project);
    const [newProject] = await db('projects').where('project_id', newId)
    return newProject;
}

module.exports = {
    getProjects,
    insertProject
}
