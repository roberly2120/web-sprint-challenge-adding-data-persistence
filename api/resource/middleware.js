const db = require('../../data/dbConfig')

async function checkResourceNameUnique (req, res, next) {
    const {resource_name} = req.body
    const [resourceName] = await db('resources').where('resource_name', resource_name)
    if(resourceName) {
        next({
            status: 400,
            message: "resource name must be unique"
        })
    } else {
        next()
    }
}

module.exports = {
    checkResourceNameUnique
}