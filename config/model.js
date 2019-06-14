const db = require('../database/dbConfig.js')

module.exports = {
    findBy, addUser, findById
}

function findBy (param) {
    return db('users').where(param)
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById (id) {
    return db('users')
    .where ( { id })
    .first();
}