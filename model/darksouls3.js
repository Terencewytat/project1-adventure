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

scenes.createScene("Submerged_Pathway","\n You find yourself walking down the submerged pathway. The water reaches just above your knees as you navigate your feet through the mud, rock, and grass. The further you go, the light illuminating the path gets darker and darker. The path leads into a trench. As two cliff faces block sunlight from entering. The deeper you go the way forward begins to fade and your other senses start to enhance. For what you cannot see, you can hear and smell. Your footsteps sloshing through the water and the smell of rotting corpses in the air. Shortly thereafter, you notice the water begin to shallow and the path begin to widen. Here you see a faint soul sitting on top of a rotten corpse at the end of the path. Surrounded by the walls of the trench, you notice that this poor fellow must've fallen in from great heights and died here.",
[ 
    { description: "Touch the faint light.", scene: "Soul_of_a_deserted_corpse" },
    { description: "Go back.", scene: "COA_Crossroads" }
])

scenes.createScene("Soul_of_a_deserted_corpse","You touch the light and pick up the Soul of a Deserted Corpse. It does not weigh anything and you slide it into your bag.",
[ 
    { description: "Go back.", scene: "COA_Crossroads" },
])

scenes.createScene("COA_Crossroads","You are now in the middle of the crossroad. You look left and see what looks like a stone path towards the exit of cemetary. You look right and see a narrow pathway submerged in shallow water leading towards a cavern.",
[ 
    { description: "Go left.", scene: "Stone_Pathway" },
])

scenes.createScene("Stone_Pathway","You make your way on to the stone path. The stone tiles look worn and aged. The weather really has done a number on this place. Tiles are upheaved and tree roots have pushed the slabs of stone around. The path is hard to walk on, but you can see that it leads towards the middle of the cemetary. There in the middle, you see what looks like a broken stone fountain with a couple deceased corpses laying about. One corpose on the ground covered in a black cloak. One corpose propped up against the broken fountain with an item clasped in its hand. As you make your way towards the fountain, the corpse cloaked in black suddenly springs up and charges at you with a a dagger!",
[ 
    { description: "Proceed to fight!", scene: "Second_Encounter" },
    { description: "Run!", scene: "Escape_Second_Encounter" }
])

scenes.createScene("Second_Encounter","You defeat the cloaked man! That was quite the shock. But nonetheless, you carry on forward. Making your way to the fountain you see an item clenched in the fist of the corpse. It looks like a bottle.",
[ 
    { description: "Pick it up.", scene: "Ashen_Estus_Flask" },
    { description: "Keep on walking down the stone path.", scene: "Middle_of_the_Cemetary" }
])

scenes.createScene("Ashen_Estus_Flask","You bend down to the corpse and notice that it is holding onto a flask. You pry his fingers open and free the item. You just aquired flask of Ashen Estus.",
[ 
    { description: "Keep on walking down the stone path.", scene: "Middle_of_the_Cemetary" }
])

scenes.createScene("Middle_of_the_Cemetary","Here you find yourself in the middle of the cemetary. Before are three path ways. One leads right up a small set of steps. The second leads straihgt through a dilapidated stone arch. The third leads left towards a cliff face further into the cemetary.",
[ 
    { description: "Go right and up the steps.", scene: "COA_Steps" },
    { description: "Go straigh through the stone arch.", scene: "COA_Arch" },
    { description: "Go left further into the cemetary.", scene: "COA_Cliff" }
])

scenes.createScene("Epilogue","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Epilogue","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])

scenes.createScene("Epilogue","Body of Text in the scenario",
[ 
    { description: "Choice option one", scene: "Scene_name" },
    { description: "Choice option two", scene: "Scene_name" }
])