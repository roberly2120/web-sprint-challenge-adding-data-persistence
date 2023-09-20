const db = require('../../data/dbConfig')

async function getResources () {
    return db('resources')
}
async function insertResource (resource) {
    const [newId] = await db('resources').insert(resource)
    const [newResource] = await db('resources').where('resource_id', newId)
    return newResource;
}
module.exports = {
    getResources,
    insertResource
}