const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', require('./routes/api-v1'))

app.listen(port, () => console.log(`Server is running http://localhost:${port}`))