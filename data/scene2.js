var scene2 = {
    "scene2.0": {
        "text": `It is night when you finally arrive. 
                During that time, a part of your mind slowly recollects what this place was called -- a village.
                There are a few people still wandering around. Judging from your first encounter, they might not take too kindly to you.
                As such, you hide behind weathered walls and {view them} from afar. Unlike the figures that attacked you, these people seem much more calm.
                Perhaps you can {approach} one...`,
        "choices": [
            { "label": "view them", "next": "scene2.1" },
            { "label": "approach", "next": "scene2.2" }
        ]
    },

    "scene2.1": {
        "text": `You decide to keep watching these people for a while longer.
                Looking at your own skin, you know you are not what they are.
                Their fair, smooth skin is nothing like your putrid, green exterior.
                Your weeks of journeying here catch up to you. A deep exhaustion fills your body and mind, and you wish for nothing else but to sleep.
                You find a dreary grove of trees nearby and decide to retire there for the night.<br><br>

                ...<br><br>

                Your eyes flicker open as sunlight spills over you. You wander back to the village, feeling relatively better than your first night.<br>
                There are now much more people bustling through the streets. 
                Perhaps you can {approach} one, {look for somewhere else to go}, or continue to {watch from afar}.
                `,
        "choices": [
            { "label": "approach", "next": "scene2.2" },
            { "label": "watch from afar", "next": "scene2.3" },
            { "label": "look for somewhere else to go", "next": "scene2.4" },
        ]
    },

    "scene2.2": {
        "text": `You lumber onto the main road, trying to appear as demure as possible.
                Unexpectedly, despite their formerly calm demeanor, the people do not take so kindly to your appearance.
                One begins screaming and pointing, and another one tumbles to the ground.
                You can't make sense of their response. You haven't attacked them like the figures from before!<br><br>

                For half a minute, you stand there, blankly. 
                A third person approaches, waving around a weapon like the ones the figure had. 
                They glower at you, shouting something.
                Time to go. You turn around and try to escape, but in your confusion... you failed to notice a person behind you.
                Nothing to do but try to {run}.`,
        "choices": [
            { "label": "run", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2.3": {
        "text": `The people continue on with their day. You watch a man sit behind a large display of produce, happily chattering with some townsfolk. The man appears older than the others, sporting a scraggly, white beard and wrinkled skin. Despite his age, he looks substantially better than you do.<br>
                In what you gather is the center of the town, a statue of an unknown figure sits in the center. A crowd of people surround the figure, moving their bodies in an erratic manner. Some other people stand beside them, wielding strange-looking objects. These objects, you realize, are making noises for moving people. Are they controlling the people with those objects?<br>
                What catches your eye, however, are the several figures with garb of that like the men who attacked you march throughout the streets. You shiver slightly, remembering your first night. These figures seem much nicer than the others, though. Would they hurt you like before?<br>

                Perhaps you can {approach} them, or {look for somewhere else to go}.
                `,
        "choices": [
            { "label": "approach", "next": "scene2.2" },
            { "label": "look for somewhere else to go", "next": "scene2.4" },
        ]
    },

    "scene2.4": {
        "text": `You sneak behind buildings, trying your best to stay out of sight. Eventually, you come across a small collection of buildings.<br> 
                There are a few areas of residence you can go:<br><br>
                ● A {small green house dotted with neatly trimmed shrubbery and exotic flora.}<br>
                ● A {two story home with a giant door. The door makes it look as though the house is yawning.}<br>
                ● A {delicious-smelling home. Your mouth waters from the smell.}<br><br>
                Alternatively, staying hidden would be the safest option. You can maybe {hide until nightfall again}.
                `,
        "choices": [
            { "label": "small green house dotted with neatly trimmed shrubbery and exotic flora.", "next": "scene2.5" },
            { "label": "two story home with a giant door. The door makes it look as though the house is yawning.", "next": "scene2.6" },
            { "label": "delicious-smelling home. Your mouth waters from the smell.", "next": "scene2.7" },
            { "label": "hide until nightfall again", "next": "scene2.8" }
        ]
    },

    "scene2.5": {
        "text": `The house is quite nice and comfy. There's a crackling fireplace, and a plate of food on the table.<br>
                You could {stay and eat}, or {leave the house}.
                `,
        "choices": [
            { "label": "stay and eat", "next": "scene2.51" },
            { "label": "leave the house", "next": "scene2.4" }
        ]
    },

    "scene2.51": {
        "text": `You sit down and begin chomping away at the food. You haven't eaten in days, so it refuels your mind and body tremendously. <br>
                You finally begin to rest. You finally notice the soreness in your feet, and your tensed shoulders.<br> 
                Of course, this peace is short-lived.<br>
                Someone's voice yells from behind you, and a hand grabs your shoulder. You turn around.
                A large, beefy man holds a gigantic weapon. You don't want to hurt him... but you don't know if that he feels the same.<br>
                Not wanting to hurt the man, there's nothing you can do but {try to run}.
                `,
        "choices": [
            { "label": "try to run", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2.6": {
        "text": `The house is a beautiful, lonely place. A gallery of paintings line the walls.<br> 
                Unfortunately, there doesn't seem to be much of interest besides a {cloak} on the wall.<br> 
                You {wander} around and don't find anything useful. Might as well {leave}.<br> 
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" },
            { "label": "wander", "next": "scene2.61" },
            { "label": "cloak", "next": "scene2_cloak" }
        ]
    },

    "scene2.61": {
        "text": `Again, the house doesn't have much{... of interest}.<br>  
                You {wander} around some more and don't find anything useful. Might as well {leave}.
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" },
            { "label": "wander", "next": "scene2.62" },
            { "label": "... of interest", "next": "scene2.63", "requires": ["scene2.62"] }
        ]
    },

    "scene2.62": {
        "text": `Well, perhaps you need to look further.<br>
                You toss paintings to the ground.<br>
                You topple a jar, unintentionally.<br>
                You eat a plate of fruits in one large gulp.<br>
                Your giant form is much too large for the doorways, so you must crouch to fit within.<br>
                Even still, there is nothing of note here. Might as well {leave}.
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" }
        ]
    },

    "scene2.63": {
        "text": `Suddenly, something catches your eye. You {draw} closer to it. Another paper, it appears.<br>
                Is this particularly interesting? You were unable to decipher the scribbles on the paper before.<br>
                Strangely, this paper is blank.<br>
                Might as well {leave}.
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" },
            { "label": "draw", "next": "scene2.64" }
        ]
    },

    "scene2.64": {
        "text": `Inexplictably, you gain the urge to let out your artistic urges.<br> 
                You grab a pencil and begin drawing over the paper.<br>
                As you do, faint memories begin flooding your mind. You were once an artist -- at least, one part of your body was.<br>
                Judging by the result, it seems that your hand belonged to this artist.<br>
                You decide to sketch either {a flowerpot by the windowsill}, or {a recently consumed plate of fruit}.<br><br>
                <b><i><u>{Or... maybe you can draw the lone wolf.}<b><i><u>
                `,
        "choices": [
            { "label": "Or... maybe you can draw the lone wolf.", "next": "scene2.67", "requires": ["scene2.65", "scene2.66"] },
            { "label": "a flowerpot by the windowsill", "next": "scene2.65" },
            { "label": "a recently consumed plate of fruit", "next": "scene2.66" }
        ]
    },

    "scene2.65": {
        "text": `You pocket the drawing and {leave}.
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" }
        ]
    },

    "scene2.66": {
        "text": `The drawing makes you hungry. You pocket the drawing and {leave}.
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" }
        ]
    },

    "scene2.67": {
        "text": `You finally draw your magnum opus.<br>
                You finally remember who you are.<br>
                You are Darian Trep, a master artist who died from sickness many years prior.<br>
                At least, a part of you is this.<br>
                You have finally found your life's calling. It is time to draw.<br><br>

                Many years later, you have once more become a renowned artist.<br>
                The previous artist who once resided in this residence has not been seen for ages. However, you have taken up residency now.<br>
                None have seen your face. You deliver your commissions during the night.<br>
                Many revere your skills. Many chant your name. Many cry over your masterpieces.<br>
                With your newfound immortality, may Darian reign forevermore...<br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "scene2_cloak": {
        "text": `You swipe the cloak from off the wall and place it over your mottled skin. Best to stay anonymous.<br> 
                You decide to stay and {wander} around, but don't find anything useful. Might as well {leave}.<br> 
                `,
        "choices": [
            { "label": "leave", "next": "scene2.4" },
            { "label": "wander", "next": "scene2.61" }
        ]
    },

    "scene2.7": {
        "text": `You wander in through the back side of the house, attracted by the delicious scent of fresh food.
                You spot a large, delectable dessert of some kind. A... pie, if memory serves correctly.
                You think about {eating it}, or maybe {keeping it for later}. You can also try {leaving}. 
                `,
        "choices": [
            { "label": "eating it", "next": "scene2.71" },
            { "label": "leaving", "next": "scene2.4" },
            {"label": "keeping it for later", "next": "scene2_pie"}
        ]
    },

    "scene2.71": {
        "text": `You begin devouring the pie, and feel completely refreshed.
                Unfortunately, in your dazed, hungry state, you fail to notice a group of men approach from behind.
                One man barks an order, and the other draws a weapon.<br><br>

                BANG.<br><br>

                You fall to the ground, dazed. The pie tumbles to the side, crust and juices splattering everywhere.
                Strange liquid begins pouring from the across your face. You stand up and face the men, but are in no position to fight.
                In your weakened state, there is nothing you can do but {run}.
                `,
        "choices": [
            { "label": "run", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2_pie": {
        "text": `You take a cover and place it over the pie, then hold it on its side.<br>
                You think about {eating it still}, but you can also try {leaving}. 
                `,
        "choices": [
            { "label": "eating it still", "next": "scene2.71" },
            { "label": "leaving", "next": "scene2.4" }
        ]
    },
    "scene2.8": {
        "text": `You decide to stay hidden for the rest of the day.<br>
        When night falls, you decide it may be time to {leave the village}.<br><br>
        
        {You feel the need to pull your cloak's hood over your head.}`,
        "choices": [
            { "label": "leave the village", "next": "scene2.9" },
            { "label": "You feel the need to pull your cloak's hood over your head.", "next": "scene2.91", "requires": ["scene2_cloak"] }
        ]
    },

    "scene2.9": {
        "text": `As you run back to the path, someone spots you. A voice screams. Now, everyone knows you're here.<br>
                Several armed men, who had been patrolling the streets, begin running towards you.<br>
                There's no time to act. You can only {try to run}.
                `,
        "choices": [
            { "label": "try to run", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2.91": {
        "text": `You pull the cloak over your head, obscuring your face and body.
                Though, your gigantic form may still give you away, so you try to hunch over.
                You wander as quietly as you can through the main streets, keeping to alleyways and darting behind trees.
                Eventually, you make it out of the village. You nearly breath a sigh of relief, but then you hear something barking.
                One of the guarddogs have found you. Immediately, it lunges for you, knocking you over and bruising your back.
                You knock it off with a swift swipe, but the dog immediately gets back up, growling. You can try {fighting it} or {running away}.
                {Alternatively, you can try pacifying it with the pie.}
                `,
        "choices": [
            { "label": "fighting it", "next": "scene2.9dog" },
            { "label": "running away", "next": "scene2.9dog" },
            { "label": "Alternatively, you can try pacifying it with the pie.", "next": "scene2.92", "requires": ["scene2_pie"] }
        ]
    },

    "scene2.9dog": {
        "text": `Before you can run or fight, the dog leaps toward you once again.<br>
                This time, it latches onto your back with its claws. It sinks its teeth into your neck, causing you to yell through the pain.
                Suddenly, a horde of guards approach your locale. Drawn in by the noise, you assume.
                Before you can act, the lot of them fire at you.<br><br>
                
                BANG. BANG. BANG. BANG.<br><br>

                You tumble to the ground, and black out immediately.<br>
                When you awaken once more, {everything has changed}.
                `,
        "choices": [
            { "label": "everything has changed", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2.92": {
        "text": `You place the pie down gently onto the ground. Immediately, the dog's behavior changes in an instant.
                It switches its attention to the pie, as if you no longer existed. With the dog pacified, you can continue onwards once more.
                However, before you can start traveling, you spot a light in the distance. It seems some guards have found you, thanks to the noises.<br>
                You can try {fighting them} or {running away}.
                `,
        "choices": [
            { "label": "fighting them", "next": "scene2.93" },
            { "label": "running away", "next": "getting_caught_before_scene3" }
        ]
    },

    "scene2.93": {
        "text": `Before the men can draw their weapons, you leap towards them, tackling one to the ground.
                The other takes a blunt weapon, slamming you repeatedly in the head, yelling all the while.
                You grab him and toss him into a nearby tree, knocking him out on the spot.
                The men are mostly beaten by this point, but one remains. You can try {fighting him} or {running away}.
                `,
        "choices": [
            { "label": "fighting him", "next": "scene2.94" },
            { "label": "running away", "next": "scene2_end" }
        ]
    },

    "scene2.94": {
        "text": `Better for none of them to remain. The man wields a blunt weapon like the others, but to no avail.<br>
                You pick the man up with one hand, holding him by the neck.
                Eventually, the man stops struggling and you drop him to the ground.
                However, in the time it took for you to end that man's life, others have appeared to stop you.
                You attempt to attack these men, too, but this time, you are too slow.<br><br>

                BANG.<br><br>

                You fall to the ground, dazed.<br>
                Strange liquid begins pouring from the across your face. You stand up and face the men, but are in no position to fight.
                In your weakened state, there is nothing you can do but {run}.
                `,
        "choices": [
            { "label": "run", "next": "scene2_end" }
        ]
    },
    
    "scene2_end": {
        "text": `You quickly retreat into the night. Thankfully, the last man doesn't appear to follow you.
                It's clear to you now that the people of this world do not take kindly to your appearance.
                And how can blame them? Someone has seemingly designed you to appear as hideous as possible.
                You grit your teeth, wondering where to go now.<br><br>

                The night passes as you follow the path. As day breaks, the path ends.
                Along the way, you come across wandering people on horses.
                Each of them scream and run in horror upon seeing your face under the cloak. Better for them to run than fight you, you suppose.<br><br>
                The day runs past you in a blur, and before you know it, it is nightfall once more.
                Eventually, in the night, you come across a new residence.<br>
                You shiver, remembering your previous encounters with people. However, beside the residence lies a shoddy-looking shed. Though you do not intend to stay in this area, your body still aches in pain from the previous night. It would be nice to get some much-needed rest, you think.<br>
                Exhausted and in pain, you decide to {head to the shed}.
                `,
        "choices": [
            { "label": "head to the shed", "next": "scene3.0" }
        ]
    },
}
