const express = require('express');

const resourceRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json());
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)

server.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    });
});
module.exports = server;