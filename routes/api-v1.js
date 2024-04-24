const router = require('express').Router()
const { MongoClient, ObjectId } = require('mongodb')

const url =  require('../secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}

router.get('/menu', async (request, response) => {
    const collection = await getCollection('FoodTruck-API', 'Menu')
    const menu = await collection.find().toArray()
	response.json(menu)
})

module.exports = router