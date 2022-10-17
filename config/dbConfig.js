const mongodb = require('mongodb')
const dbName = 'food-app'
const dbUrl = `process.env.dbUrl`

module.exports = {mongodb,dbName,dbUrl}