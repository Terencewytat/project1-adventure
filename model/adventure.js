const scenes = require('./scenes')

scenes.createScene("Intro","Yes indeed. It is called Lothric. Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. The fire fades. And the lords go without thrones. When the link of fire is threatened, the bell tolls; Unearthing the old lords of cinder from their graves. Aldrich Saint of the Deep; Farron’s Undead Legion the Abyss Watchers; and their reclusive lord of the profaned capitol Yhorm the Giant. Only in truth, the lords will abandon their thrones. And the unkindled will rise. Nameless accursed undead, unfit even to be cinder. And so it is, that ash seeketh embers.",
[ 
    { description: "Choice option one", scene: "Act_1_The_Beginning" }
])

scenes.createScene("Act_1_The_Beginning","Body of Text in the scenario for Act 1",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Act 2: Winter is Coming","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Act 3: The Eclipse","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Act 4: For the King","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Epilogue","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])