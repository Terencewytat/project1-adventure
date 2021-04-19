const scenes = require('./scenes')

scenes.createScene("Intro","\n Yes indeed. It is called Lothric. Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. The fire fades. And the lords go without thrones. When the link of fire is threatened, the bell tolls; Unearthing the old lords of cinder from their graves. Aldrich Saint of the Deep; Farron’s Undead Legion the Abyss Watchers; and their reclusive lord of the profaned capitol Yhorm the Giant. Only in truth, the lords will abandon their thrones. And the unkindled will rise. Nameless accursed undead, unfit even to be cinder. And so it is, that ash seeketh embers.",
[ 
    { description: "Begin your journey Ashen One.", scene: "Cemetary_of_Ash" }
])

scenes.createScene("Cemetary_of_Ash","\n On the side of a hill... Towards the corner of a cemetary... Night has fallen as you wake up from your dilapidated grave. A light fog and cold breeze makes its way through the area, it must've rained recently. Covered in dirt and ash you slowly rise to your feet. The evening bell has tolled and its echoes can be heard from miles away. Around you lay countless other tombstones. Dirt, weeds, and dead trees have run rampant, you can't make out what these other tombstones say. This place hasn't been cared for in years. \n In front of you is a dirt path down the hill. You walk along the path and arrive at the bottom. The dirt slowly turns to mud as water encroaches the path from all sides. You gaze at the sight of dead trees and fallen stone structures. You make your way further along as the path begins to widen. You notice a cloaked figure off in the distance, he's slightly hunched over in the middle of the crossroad. He's just standing there. His expression is empty. He's also not wearing any shoes. \n You slowly make your way towards him. Suddenly, he jerks his head! His eyes roll around and he noticed you approaching. He lets out a screeching cry as he charges you with what appears to be a shiv in his right hand!",
[ 
    { description: "Proceed to fight!", scene: "First_Encounter" },
])

scenes.createScene("First_Encounter","\n You defeat the hooded man! His body lay stiff in the mud. You take a part of his soul as he slowly disintigrates into nothing. You are now in the middle of the crossroad. You look left and see what looks like a stone path towards the exit of cemetary. You look right and see a narrow pathway submerged in shallow water leading towards a cavern.",
[ 
    { description: "Go left.", scene: "Stone_Pathway" },
    { description: "Go Right.", scene: "Submerged_Pathway" }
])

scenes.createScene("Stone_Pathway","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Submerged_Pathway","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Epilogue","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])