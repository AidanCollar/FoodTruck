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
    await collection.insertOne({ name, description, price })
	response.json({"Message": "Menu item added"})
})

router.put('/menu/:id', async (request, response) => {
    const id = request.params.id
    const collection = await getCollection('FoodTruck-API', 'Menu')
    const menuItem = await collection.findOne({ _id: new ObjectId(id) })
    // will need to grab info from menu page with site.js
    // await collection.updateOne()

})

module.exports = router