const db = require('../../data/dbConfig')

const checkProjectId = async (req, res, next) => {
    const { project_id } = req.body
    const [project] = await db('projects').where('project_id', project_id);
    if(!project) {
        next({
            status: 400,
            message: "no project with given id"
        })
    } else {
        next();
    }
}
const checkPostObject = async (req, res, next) => {
    const { project_id, task_description } = req.body;
    if(!project_id || !task_description) {
        next({
            status: 400,
            message: "new task requires project_id and task_description"
        })
    } else {
        next();
    }
}

module.exports = {
    checkProjectId,
    checkPostObject
}