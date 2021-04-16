require('./model/adventure')

const sceneRoutes = require('./routes/sceneRoute')

const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use('/sceneRoute', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/sceneRoute/intro')
})

app.listen(port, () => {
    console.log(`Game Server is listening at http://localhost:${port}`)
})