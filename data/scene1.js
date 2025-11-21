var scene1 = {
    "scene1.0": {
        "text": `A loud shriek jolts you awake.<br><br>

                Instinctively, you try to move, but you can't. Every muscle in your body aches. Your head 
                thrums painfully. Your eyes blare open, only to be greeted with a room of light devoid.
                You raise your withered hand into the air, trying to grasp something, anything... <br><br>

                All you feel is soft cloth beneath your back and weathered stones to your left. 
                A bedroom, you surmise. <br><br>

                After a few moments, your eyes adjust to the darkness... at least enough to make out the 
                dismal place. Another shriek. Is someone coming? You need to escape. You're not sure why, 
                but you know it to be true. Maybe you should try to {stand...} <br><br>
                `,
        "choices": [
            { "label": "stand...", "next": "scene1.1" }
        ]
    },
    "scene1.1": {
        "text": `THUMP.<br><br>

                In your fugue state, you stumble straight into a table. You fall to the ground, and find yourself 
                jolted awake by the ice-cold cobblestone floor. Your hands scramble to find solid ground to push yourself up. 
                Surprisingly, you feel something smooth and thin...<br><br>

                Paper?<br><br>

                In the darkness, you can barely make out a scrambled mess of scribbles on the sheets. The sounds are getting louder. Something is approaching. There is little time left. 
                Decide whether to {take} or {leave} the papers behind.`,
        "choices": [
            { "label": "take", "next": "scene1.2" },
            { "label": "leave", "next": "scene1.3" }
        ]
    },
    "scene1.2": {
        "text": `The sounds grow louder, too close to ignore. You pat your pants and find a dusty pocket. That'll have to do.
                You stuff the papers inside your clothes. The footsteps are right outside your room now, leaving you only one 
                option: {hide.}`,
        "choices": [
            { "label": "hide.", "next": "scene1.4" }
        ]
    },
    "scene1.3": {
        "text": `You tried to study the paper, but couldn't make sense of it. 
                The sounds are approaching your room. So you think to yourself, should I {run} or {hide.}`,
        "choices": [
            { "label": "run", "next": "scene1.8" },
            { "label": "hide.", "next": "scene1.4" }
        ]
    },
    "scene1.4": {
        "text": `You resign to stay in this room for now. The world outside could be hostile, after all.
                You swiftly dive behind a cluttered stack of boxes, pushing aside metallic bits and dirty clothes.
                The doors slam open, and a paltry light spreads across the room. 
                Gazing above the boxes, you can make out two figures, one of which holds a bright object. Is that the source of this light?
                Foreign noises emanate from these creatures -- a form of communication, perhaps?
                Best to stay hidden for now.<br><br>

                As the figures draw closer, their faces come into view.
                One sports a worried expression and grunts as it pushes a chair to the side.
                The other swings the glowing object this way and that, sighing.
                The light, shifting around the room, eventually draws your attention to a crude metal plate. It's within reach.
                At this rate, you'll most assuredly be caught.<br><br>

                A few thoughts come to mind. Perhaps you can throw the plate {across the room} or {at the figure with the glowing object}.
                `,
        "choices": [
            { "label": "at the figure with the glowing object", "next": "scene1.5" },
            { "label": "across the room", "next": "scene1.7" }
        ]
    },
    "scene1.5": {
        "text": `You toss the plate at one of the figures. It shoots through the room and juts itself within the figure, causing it to
                collapse. The other screams, grabbing something within the darkness. You sense that this one could be dangerous, so you
                bolt at it.<br><br>
                
                BANG.<br><br>
                
                A sharp, searing pain fills your skull, and a strange liquid begins pouring over your eyes. No matter. You fight the pain and grab
                the figure by its neck. You squeeze the figure tightly as it attempts to sputter something. No matter. It would hurt you again if you
                spared it.<br><br>
                
                After a while, it stops moving. You drop the figure to the ground, wipe the liquid off of your face, and wince at the pain.
                Though it has begun to reside, it has left a strange, stinging pain. What did the figure do to you? With your limited knowledge, you aren't quite sure.<br><br>
                
                You hear familiar noises approaching your location. More of these creatures? Perhaps before, you may have been able to run off, but the pain
                in your head causes you to stumble slowly. You can only barely {make it out the door}.`,
        "choices": [
            { "label": "make it out the door", "next": "scene1.6" }
        ]
    },
    "scene1.6": {
        "text": `As you stumble out into the open hallway, you are greeted with a forboding sight: multiple figures, with weapons like the one
                the other one had, block your way. Behind them, however, is what catches your eye. A gaunt man with sagging eyes and frazzled hair mutters
                something to the others. The others nod -- from what you can understand, a sign of agreement between the two parties.<br><br>
                
                You try to run towards them and attack them, yet it doesn't go as planned. Immediately, the
                creatures fire something at you in rapid succession. BANG. BANG. BANG. Pain erupts throughout your body. 
                Your vision blurs, and you crumple to the ground. The pain is too much to bear.<br><br>
                
                BANG. <b>BANG</b>.<br><br> 
                
                Pain... <i>so much</i> pain. The firing stops, but you cannot move. You bounce in and out of consciousness, attempting at any cost to hold onto your life.
                After some time -- you cannot gauge how long -- the man from before steps into your view. Through your blurred eyes, he seems... relieved. 
                He brandishes an object unlike the others, and cautiously approaches your fallen form.<br><br>
                
                You try to plead. You try to explain you didn't mean to attack those men. But in your final moments, you can only groan. The man cuts into your
                body with that object, and everything goes black.

                {When you wake up,...}
            `,
        "choices": [
            { "label": "When you wake up,...", "next": "getting_caught_before_scene3" }
        ]
    },
    "scene1.7": {
        "text": `You toss the plate across the room, and a loud <b>clatter</b> causes both of the figures to yelp in surprise.
                With not a moment to spare, you burst out from behind the boxes. 
                At the same time, with eyes bulging, the figures point their light at you and screech in horror.
                One of them stammers something at you.Though you cannot understand it, you can feel a cold sense of disgust in its tone.
                The two figures scurry back and begin chattering quickly amongst each other.
                It appears they are distracted, so you take the opportunity to dash out into the open hallway.<br> <br>

                Once more, the place you find yourself in is entirely foreign to you. You have no idea who you are, or how you
                arrived here. At the very least, you have a base sense of what certain objects are, but nothing beyond that.<br><br>

                Large windows line the hallway, and a lone candle fights back against the overwhelming darkness of the night. Perhaps
                you can {run through the halls} or {jump through a window}.`,
        "choices": [
            { "label": "run through the halls", "next": "scene1.6" },
            { "label": "jump through a window", "next": "scene1.8" }
        ]
    },
    "scene1.8": {
        "text": `You burst through the window, glass shards clattering all around you.<br> 
                The glass reflects the pale glow of moonlight, which draws your attention to your surroundings.<br> 
                A weathered dirt road meanders through a packed forest.<br>
                Beatdown fences struggle to stand, clearly wracked by weather.<br> 
                You hear someone yell in the distance. Best not to stay in this area any longer. Best to {keep running}.`,
        "choices": [
            { "label": "keep running", "next": "scene1.9" }
        ]
    },
    "scene1.9": {
        "text": `You wander forth, following the dirt trail. Your stamina, surprisingly, knows no bounds.
                You trudge for days. The forest soon clears, but the trail continues onward. 
                You pass through dismal meadows, worn rubble, and shallow riverbeds.
                Cloudy skies turn to rainy days. Rainy days lead to sun-scorched afternoons. Still, you continue walking.
                Eventually, after an eternity, you spot a strange collection of buildings on the horizon.
                The path seems to split from here. You can decide whether to {go to the buildings} or {try another path}.`,
        "choices": [
            { "label": "go to the buildings", "next": "scene2.0" },
            { "label": "try another path", "next": "scene1.91" }
        ]
    },
    "scene1.91": {
        "text": `You try the other path first. Fortunately, it does not lead far, bringing you into another forest.
                You come across some sort of campsite. A pack of tents surrounds a campfire long extinguished.
                All you hear are the rustling of leaves and chirping birds. It seems to be abandoned, so you might as well look around.<br><br>
                
                You rip the tent covers to shreds. While most contain nothing of note, you recover a rusted locket. 
                There seems to be some person inside... someone quite beautiful, in your eyes. You quickly collect the locket.
                It seems there isn't much more of note in this area. Perhaps you should {return to the buildings}.
                `,
        "choices": [
            { "label": "return to the buildings", "next": "scene2.0" }
        ]
    },
}
