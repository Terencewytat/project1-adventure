const scenes = require('./scenes')

scenes.createScene("Intro","\n Yes indeed. It is called Lothric. Where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words. The fire fades. And the lords go without thrones. When the link of fire is threatened, the bell tolls; Unearthing the old lords of cinder from their graves. Aldrich Saint of the Deep; Farron’s Undead Legion the Abyss Watchers; and their reclusive lord of the profaned capitol Yhorm the Giant. Only in truth, the lords will abandon their thrones. And the unkindled will rise. Nameless accursed undead, unfit even to be cinder. And so it is, that ash seeketh embers.",
console.log("Combat sequence"),
[ 
    { description: "Begin your journey Ashen One.", scene: "Cemetary_of_Ash" }
])

scenes.createScene("Cemetary_of_Ash","\n On the side of a hill... Towards the corner of a cemetary... Night has fallen as you wake up from your dilapidated grave. A light fog and cold breeze makes its way through the area, it must've rained recently. Covered in dirt and ash you slowly rise to your feet. The evening bell has tolled and its echoes can be heard from miles away. Around you lay countless other tombstones. Dirt, weeds, and dead trees have run rampant, you can't make out what these other tombstones say. This place hasn't been cared for in years. \n In front of you is a dirt path down the hill. You walk along the path and arrive at the bottom. The dirt slowly turns to mud as water encroaches the path from all sides. You gaze at the sight of dead trees and fallen stone structures. You make your way further along as the path begins to widen. You notice a cloaked figure off in the distance, he's slightly hunched over in the middle of the crossroad. He's just standing there. His expression is empty. He's also not wearing any shoes. \n You slowly make your way towards him. Suddenly, he jerks his head! His eyes roll around and he noticed you approaching. He lets out a screeching cry as he charges you with what appears to be a shiv in his right hand!","",
[ 
    { description: "Proceed to fight!", scene: "First_Encounter" },
])

scenes.createScene("First_Encounter","\n You defeat the hooded man! His body lay stiff in the mud. You take a closer look and notice that he is undead. Before you leave, you take a part of his soul as he slowly disintigrates into nothing. You now reach the middle of the crossroad. You look left and see what looks like a stone path towards the exit of cemetary. You look right and see a narrow pathway submerged in shallow water leading towards a cavern.","",
[ 
    { description: "Go left.", scene: "Stone_Pathway" },
    { description: "Go Right.", scene: "Submerged_Pathway" }
])

scenes.createScene("Submerged_Pathway","\n You find yourself walking down the submerged pathway. The water reaches just above your knees as you navigate your feet through the mud, rock, and grass. The further you go, the light illuminating the path gets darker and darker. The path leads into a trench. As two cliff faces block sunlight from entering. The deeper you go the way forward begins to fade and your other senses start to enhance. For what you cannot see, you can hear and smell. Your footsteps sloshing through the water and the smell of rotting corpses in the air. Shortly thereafter, you notice the water begin to shallow and the path begin to widen. Here you see a faint soul sitting on top of a rotten corpse at the end of the path. Surrounded by the walls of the trench, you notice that this poor fellow must've fallen in from great heights and died here.","",
[ 
    { description: "Touch the faint light.", scene: "Soul_of_a_deserted_corpse" },
    { description: "Go back.", scene: "COA_Crossroads" }
])

scenes.createScene("Soul_of_a_deserted_corpse","\n You touch the light and pick up the Soul of a Deserted Corpse. It does not weigh anything and you slide it into your bag.","",
[ 
    { description: "Go back.", scene: "COA_Crossroads" },
])

scenes.createScene("COA_Crossroads","\n You are now in the middle of the crossroad. You look left and see what looks like a stone path towards the exit of cemetary. You look right and see a narrow pathway submerged in shallow water leading towards a cavern.","",
[ 
    { description: "Go left.", scene: "Stone_Pathway" },
])

scenes.createScene("Stone_Pathway","\n You make your way on to the stone path. The stone tiles look worn and aged. The weather really has done a number on this place. Tiles are upheaved and tree roots have pushed the slabs of stone around. The path is hard to walk on, but you can see that it leads towards the middle of the cemetary. There in the middle, you see what looks like a broken stone fountain with a couple deceased corpses laying about. One corpose on the ground covered in a black cloak. One corpose propped up against the broken fountain with an item clasped in its hand. As you make your way towards the fountain, the corpse cloaked in black suddenly springs up and charges at you with a a dagger!","",
[ 
    { description: "Proceed to fight!", scene: "Second_Encounter" },
    { description: "Run!", scene: "Escape" }
])

scenes.createScene("Escape","\n You attempt to run! However, the cloaked undead cuts you off. You have no choice here. You need to fight!","",
[ 
    { description: "Proceed to fight!", scene: "Second_Encounter" },
])

scenes.createScene("Second_Encounter","\n You defeat the cloaked man! That was quite the shock. But nonetheless, you carry on forward. Making your way to the fountain you see an item clenched in the fist of the corpse. It looks like a bottle.","",
[ 
    { description: "Pick it up.", scene: "Ashen_Estus_Flask" },
    { description: "Keep on walking down the stone path.", scene: "Middle_of_the_Cemetary" }
])

scenes.createScene("Ashen_Estus_Flask","\n You bend down to the corpse and notice that it is holding onto a flask. You pry his fingers open and free the item. You just aquired flask of Ashen Estus.","",
[ 
    { description: "Keep on walking down the stone path.", scene: "Middle_of_the_Cemetary" }
])

scenes.createScene("Middle_of_the_Cemetary","\n Here you find yourself in the middle of the cemetary. Before are three path ways. One leads right up a small set of steps. The second leads straihgt through a dilapidated stone arch. The third leads left towards a cliff face further into the cemetary.","",
[ 
    { description: "Go right and up the steps.", scene: "COA_Steps" },
    { description: "Go straigh through the stone arch.", scene: "COA_Arch" },
    { description: "Go left further into the cemetary.", scene: "COA_Cliff" }
])

scenes.createScene("COA_Steps","\n You walk up the steps of the cemetary. There you see a long path of tombstones which sit rows behind other tombstones. This must've been an extension of the cemetary. You walk along the rows of tombstones towards another set of steps. At the top of the second set of step you see another cloaked figure. He does not notice your presence.","",
[ 
    { description: "Proceed to ambush!", scene: "Third_Encounter" },
    { description: "Sneak past him.", scene: "COA_Arch" },
])

scenes.createScene("Third_Encounter","\n You successfully ambush the undead man. Having defeated the him, you notice that the path leads back towards the arches leading into of the cemetary.","",
[ 
    { description: "Follow the path towards the cemetary arches.", scene: "COA_Arch" },
])

scenes.createScene("COA_Arch","\n You arrive just past the arches near the entrance of the cemetary. There you make eye contact with an cloaked undead man. Like some of the previous undead he is immediately hostile, however, unlike the other ones he is carrying a crossbow. He makes piercing eye contact with you as he loads up his first bolt. There is no way to escape. If you turn around he will shoot you in your back.","",
[ 
    { description: "Close the distance and fight!", scene: "Fourth_Encounter" },
])

scenes.createScene("Fourth_Encounter","\n You defeat the undead bowman. Further ahead is the path that leads you to the entrance of the cemetary.","",
[ 
    { description: "Go to the entrance.", scene: "COA_Entrance" },
])

scenes.createScene("COA_Cliff","\n You arrive underneath the cliff face. There you notice a cloacked figure standing upright while facing a stone wall. He does not seem to notice your approach.","",
[ 
    { description: "Surprise attack him!", scene: "Surprise" },
    { description: "Sneak past him.", scene: "COA_Entrance" },
])

scenes.createScene("Surprise","\n While you sneak up behind the undead man, you inadvertently kick a rock which clacks against the stone wall. Another undead notices you walking behind and lets out a scream! This alerts the other undead. Both make a shrieking cry as the two surround you with weapons drawn.","",
[ 
    { description: "Proceed to fight both!", scene: "Fifth_Encounter" },
])

scenes.createScene("Fourth_Encounter","\n You defeat both undead! Further ahead is the path that leads you to the entrance of the cemetary.","",
[ 
    { description: "Go to the entrance.", scene: "COA_Entrance" },
])

scenes.createScene("COA_Entrance","\n There you finally arrive just before the entrance of the cemetary. The area forks into two paths. On the right, the path leads into a dark cavern. Straight ahead the path leads towarads a path along a cliff illuminated by sunlight.","",
[ 
    { description: "Go forward.", scene: "Outside_Cemetary" },
    { description: "Go right.", scene: "COA_Cavern" },
])

scenes.createScene("COA_Cavern","\n You follow a winding path into the cavern. A portion of the path is submerged in water. You proceed to walk through the water. Your movement slows down. You make your way further inside and see the cavern begin to widen. This room is large and spacious. On one corner of the room you see an item. The other corner of the room is covered in crystal. ","",
[ 
    { description: "Go pick up the item.", scene: "Unknown_soul" },
])

scenes.createScene("Unknown_soul","\n You pick up the soul of an unknown traveler. As you begin to make your way out, you notice the crystals that were on the opposite side of the room begin to move. This was no ordinary rock formation. It was actually a crystal lizard. Its body covered in crystals and nearly three times as tall as a full grown man while standing. It seems as though you've just walked into its lair. You begin to back up slowly, but the entrance to the cavern is on the opposite side of where you are. The crystal lizard cuts off your means of escape. You have no choice now. You must fight!","",
[ 
    { description: "Proceed to fight!", scene: "Crystal_lizard" },
])

scenes.createScene("Crystal_lizard","\n You vanquish that crystal lizard. It's body collapsed on its side as the crystals on its back come hurling to the ground. You grab a titanite slab off of its body. This item may come in handy when upgrading equipment in the future. Slowly, you make your way back towards cemetary. As you backtrack, you see rays of light pierce that darkness of of the entrance. ","",
[ 
    { description: "Go towards the light.", scene: "Outside_Cemetary" },
])

scenes.createScene("Outside_Cemetary","\n You run towards the entrance of the cemetary. This is your ticket out of this place. As you approach the entrance, the path begins to open and the sunlight starts to break through the darkness of the cemetary. The path slowly curves left and slopes upwards following the cliff face. Off in the distance you see a mountain range that spans your vision and several clouds overhead. It is good to be outside. You can hear the wind howling as it passes through the mountain range. As you make your way towards the first bonfire. The bonfire is positioned near the outskirts of the firelink shrine.","",
[ 
    { description: "Rest Up.", scene: "Bonfire" },
    { description: "Ignore the bonfire and go forward.", scene: "Shrine_Outskirt" },
])

scenes.createScene("Bonfire","\n You sit down and rest next to the bonfire.","",
[ 
    { description: "Go forward towards the shrine outskirts.", scene: "Shrine_Outskirt" },
])

scenes.createScene("Shrine_Outskirt","\n You make your way down a path from the bonfire and arrive at the outer wall of the firelink shrine. You notice its architecture and make note that it looks more decently maintained in comparison to the cemetary, although it still looks run down. Two lamps light the entrance of the outer wall. The front gate is wide open and leads toward an open space with a statue of a man taking a knee in the middle. Behind the statue is the second gate, which appears to be closed. You walk up and attempt to open the second gate but no matter how much strength you use, you can't seem to get the gate to budge. You ponder your head as you pace back and forward around the statue. Then you notice that there is a sword stuck in the statue. The sword has pierced the the statue's heart but intuitively you believe that you can pull it out. Once again, you muster up your strength and pull the sword out inch by inch. Once the sword comes out comepletely it fades into ashes. The statue slowly begins to move! Getting up from one knee, the statue towers above you. It picks up a weapon, a massive halberd and proceeds to circle you. Perhaps defeating this opponent will open the second gate. ","",
[ 
    { description: "Proceed to fight!", scene: "Iudex_Gundyr" },
])

scenes.createScene("Iudex_Gundyr","\n You defeat Iudex Gundyr! His body drops to the ground and makes a heavy thud. Inside his body is a coiled sowrd. You retrieve the sword from his body and place it in your bag. You make your way towards the second gate. With your strength you push open the doors and notice that you are at the foot of the firelink shrine.","",
[ 
    { description: "Go into Firelink Shrine", scene: "Firelink_Shrine" },
])

scenes.createScene("Firelink_Shrine","\n You walk into Firelink Shrine. You immediately notice its architecture. The base of the shrine is a bonfire. While in the middle section is the throne room. On both sides there are stairs which lead outside towards the back of the shrine. As your eyes are scanning the room, you notice next to the bonfire there is a slender woman standing next to the bonfire. She is the shrine's current fire keeper. You make your way towards her and proceed to talk to her. She says ' Welcome to the bonfire, unkindled one. I am a fire keeper. I tend to the flame, and tend to thee. The Lords have left their thrones, and must be deliver'd to them. To this end, I am at thy side. Ashen one, produce the coiled sword at the bonfire. The mark of ash will guide thee to the land of the Lords. To Lothric, where the homes of the Lords converge. Ashen one, to be unkindled is to be a vessel for souls. Sovereignless souls will be thy strength. I will show thee how. Ashen one, bring me souls, plucked from their vessels...' ","",
[ 
    { description: "Place the coiled sword in the bonfire.", scene: "To_be_continued" },
])

scenes.createScene("To_be_continued","\n Thanks for playing!","",
)