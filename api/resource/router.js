const Resource = require('./model')
const express = require('express')
const { checkResourceNameUnique } = require('./middleware')

const resourceRouter = express.Router();

resourceRouter.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
})
resourceRouter.post('/', checkResourceNameUnique, (req, res, next) => {
    const { resource_name, resource_description } = req.body
    Resource.insertResource(req.body)
        .then(resource => {
            console.log(resource);
            res.status(201).json(resource)
        })
})

module.exports = resourceRouter

