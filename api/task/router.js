const express = require('express')
const tasksRouter = express.Router()
const Tasks = require('./model')
const {checkProjectId, checkPostObject} = require('./middleware')

tasksRouter.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            const userTasks = tasks.map(task => {
                if(task.task_completed === 0) {
                    task.task_completed = false
                } else if(task.task_completed === 1) {
                    task.task_completed = true
                }
                return task
            })
            res.status(200).json(userTasks)
        })
})
tasksRouter.post('/', checkPostObject, checkProjectId, (req, res, next) => {
    Tasks.insertTask(req.body)
        .then(task => {
            const newTask = {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: task.task_completed == 0 ? false: true,
                project_id: task.project_id
            }
            res.status(201).json(newTask)
        })
})

module.exports = tasksRouter
