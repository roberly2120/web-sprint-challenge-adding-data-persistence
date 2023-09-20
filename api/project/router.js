const express = require('express')
const Project = require('./model')
const projectsRouter = express.Router();
const { checkProjectName } = require('./middleware')

projectsRouter.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            const proj = projects.map(project => {
                if (project.project_completed === 0) {
                    project.project_completed = false
                } else if( project.project_completed === 1) {
                    project.project_completed = true
                }
                return project
            })
            res.status(200).json(proj)
        })
})
projectsRouter.post('/' , checkProjectName, (req, res, next) => {
    const { project_id, project_name, project_description, project_completed } = req.body
   
    Project.insertProject(req.body)
        .then(project => {
            const newProj = {
                project_id: project.project_id,
                project_name: project.project_name,
                project_description: project.project_description,
                project_completed: project.project_completed == 0 ? false : true
            }
            res.status(201).json(newProj)
        })
})
module.exports = projectsRouter
