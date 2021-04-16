require('./model/adventure')

const sceneRoutes = require('./routes/scene-route')

const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use('/scene-route', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene-route/intro')
})

app.listen(port, () => {
    console.log(`Game Server is listening at http://localhost:${port}`)
})