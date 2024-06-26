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

router.delete('/menu/:id', async (request, response) => {
    const{id}=request.params
    const collection = await getCollection('FoodTruck-API', 'Menu')
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    response.json(result.deletedcount);
})

router.post('/menu', async (request, response) => {
    const { name, description, price } = request.body
    const collection = await getCollection('FoodTruck-API', 'Menu')
    const result = await collection.insertOne({ name, description, price })
	response.json(result)
})

router.put('/menu/:id', async (request, response) => {
    const id = request.params.id
    const collection = await getCollection('FoodTruck-API', 'Menu')
    const menuItem = await collection.findOne({ _id: new ObjectId(id) })
    const { name, description, price } = request.body
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { name, description, price } })
	response.json(result)
})

router.put('/event/:id', async (request, response) => {
    const id = request.params.id
    const collection = await getCollection('FoodTruck-API', 'Event')
    const events = await collection.findOne({ _id: new ObjectId(id) })
    const { name, location, date, hours } = request.body
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { name, location, date, hours } })
	response.json(result)
})

router.post('/event', async (request, response) => {
    const{name, location, date, hours} = request.body
    const collection = await getCollection('FoodTruck-API', 'Event')
    const result = await collection.insertOne({name, location, date, hours});
    response.json(result);
})

router.delete('/event/:id', async (request, response) => {
    const{id}=request.params
    const collection = await getCollection('FoodTruck-API', 'Event')
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    response.json(result.deletedcount);
})

router.get('/event', async (request, response) => {
    const collection = await getCollection('FoodTruck-API', 'Event')
    const event = await collection.find().toArray()
	response.json(event)
})

router.get('/event/:id', async (request, response) => {
    const{id}=request.params
    const collection = await getCollection('FoodTruck-API', 'Event')
    const result = await collection.findOne({ _id: new ObjectId(id) });
    response.json({result});
})
module.exports = router