let scene = {}

async function createScene(id, description, options) {
    if (!options) {
      options = []  
    }
    scene[id] = {
        id,
        description,
        options
    }
}

async function findSceneById(id) {
    let scene = scene[id]
    if (!scene) {
        throw new Error("Scene " + id + " does not exist!")
    }
    return scene
}

module.exports = {
    createScene,
    findSceneById
}