const scenes = require('./scenes')

scenes.createScene("Intro","Body of Text in the scenario",
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