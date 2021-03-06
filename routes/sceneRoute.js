const express = require('express')

const scenes = require('../model/scenes')
const formatSceneAsText = require('../view/format-scene-as-text')

let router = express.Router()

router.get('/:sceneId', async (req, res) => {
    let wrapWidth = req.query.wrapWidth || 60
    let sceneId = req.params.sceneId
    try {
        let scene = await scenes.findSceneById(sceneId)
        res.send(formatSceneAsText(scene, wrapWidth, "http://localhost:3000"))
    }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
    }
})

module.exports = router