var endings = {
    "getting_caught_before_scene3": {
        "text": `You try to run, but a sharp blow hits your back. Darkness swallows everything. <br><br>

                When you wake, you are being dragged through the snow by several men.
                Chains bite into your wrists and ankles. You cannot stand on your own. <br><br>

                Angry voices rise around you. You want to speak, to explain, to ask for help but you cannot
                form their words. Only broken sounds escape your throat. <br><br>

                You are forced onto your knees. More chains are wrapped around your arms and neck,
                holding you still. <br><br>

                Someone yell something outloud. And suddenly something sharp hit your neck, Pain explodes through your body.
                But slowly you become better. All you could hear is they are chanting something <br><br>

                FREAK <br><br>

                The world spins. The shouting grows louder and louder until it becomes a single roar. And something hit
                your head again. You are getting dizzy and dizzy than everything goes black. <br><br>

                When you awaken, that same feeling like you once had before. The first moment you open your eyes. 
                {But this time is different.}`,
        "choices": [
            { "label": "But this time is different.", "next": "circusEnding" }
        ]
    },

    "getting_caught_after_scene3": {
        "text": `Right when the flame swallows eveything in front of your eye, you turn to leave. But before you can take
                a siingle step, a sharp blow hits your back. Darkness swallows everything. <br><br>

                When you wake, you are chained in a room that is fill with people people. You seems to be in a crowded courtroom.
                People stare as if you are not real. <br><br>

                A figure in a white gown steps forward. <br>
                “WHAT ARE YOU?” <br><br>

                You can speak now. The question stings.
                You remember the drawings you once saw. {A violent wolf fighting humans.}
                {A peaceful cow resting under moonlight.} <br><br>

                You must choose what to say. <br><br>`,
        "choices": [
            { "label": "A violent wolf fighting humans.", "next": "knightEnding", "requires": ["scene3_chaos"] },
            { "label": "A peaceful cow resting under moonlight.", "next": "poetEnding", "requires": ["scene3_peace"] },
        ]
    },

    "preOriginalEnding": {
        "text": `You push through the snow, retracing your steps to the place where you first open your eyes.  
                The cold bites into your skin. Your breath clouds in the cold air. <br><br>

                Hours pass. The wind howls. And then, through the trees, you finally see it:  
                An enormous structure rising from the cliffside. It looks partly like a castle and partly like 
                a mansion, with cracked stone walls, shattered windows, and towers swallowed by ice.  
                No lights. No voices. Only silence. <br><br>

                As you step inside, a heavy smell hits you. Damp wood. Mold. Old chemicals that have rotted  
                into something sour. The air clings to your throat like smoke from a dying fire.  
                Everything inside was left to decay. <br><br>

                Rusted machines slump across the floor. Metal has been eaten through by time.  
                Glass jars lie shattered and stained with colors you cannot name.  
                Strange tools are scattered everywhere, like pieces of forgotten experiments.  
                This place created you, yet now it whispers only of ruin. <br><br>

                You move deeper. The halls twist with shadows. Every surface is slick with damp. The stairs crumble 
                beneath your feet. The deeper you go, the thicker the smell becomes, until it feels like even the air 
                has spoiled. <br><br>

                In a small storage room, dust coats everything. Shelves have collapsed. Tools lie rusted together.  
                A room that once held purpose now feels like a burial ground for failed ideas. <br><br>

                Beneath a fallen shelf, something catches your eye. A journal marked with the name Victor Frankenstein.  
                The pages are yellowed and curled, but still readable. <br><br>

                You open it and {read everything, pages after pages...}`,
        "choices": [
            { "label": "read everything, pages after pages...", "next": "originalEnding" }
        ]
    },

    "originalEnding": {
        "text": `Eveything you read terrified you. You are not born you are made. Created in a labaratory from
                death flesh and bones stitched together. You are a monster. An abomination. A freak. <br><br>
        
                You think of all you have seen. Every door closed to you. Every face twisted in fear. You understand 
                now, no human will ever stand beside you. <br><br>

                You are different. Made, not born. Brought into a world that never asked for you.
                However, if one man could shape your body from death, if he could breathe life into
                cold flesh, then he is more than a creator. He is a god. <br><br>

                And a god who can make life can make another like you someone who will not fear your face,
                someone who can share the world with you, someone who can end the endless silence.
                You do not seek revenge. You seek companionship. <br><br>

                With this new purpose, you now have to find the man Victor. You will find him and you will 
                demand not love from humanity but the chance to not be alone. <br><br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "nomadEnding": {
        "text": `You think carefully. Should you read the notes? Should you finally learn the truth of your beginning?
                After a long moment, you decide against it. <br><br>

                Maybe not knowing where you come from is a kind of freedom.
                The world has given you nothing but pain. If this is the life you were made for, then
                what good can truth bring? <br><br>

                Perhaps forgetting your beginning is a blessing. Perhaps your story does not need a creator
                to tell it. You walk deeper into the wilds, among wolves, bears, and wandering creatures,
                you see them being hunted, rejected, feared, torn apart by human. They are not monsters.
                They are simply different. Just like you. <br><br>

                Maybe your place has never been among humans at all. Maybe your difference means you are
                meant to roam beyond them into forests, mountains, and distant lands untouched by mankind. <br><br>

                You remember the books you once found like Paradise Lost, The Sorrows of Young Werther,
                and Plutarch's Lives. All of the great stories are of wanderers, exiles, and adventurers.
                And so you choose adventure. Maybe you are not meant to belong here but somewhere else entirely.
                A world where your difference is not a curse, but a beginning.<br><br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "circusEnding": {
        "text": `Metal cuffs bite into your wrists and ankles. A collar digs into your neck. A creature drag you into a
                bright circular tent filled with cheers. You blink, confused—until the first whip strikes your back.
                The crowd laughs. You are forced to stand, forced to perform, forced to move heavy things for their
                amusement. <br><br>

                Every day is the the same. They are fill with screams, laughter, pain. <br><br>

                Night after night, you lie in chains and think of your beginning. You wish you had never opened your eyes
                at all. Once, in desperation, you even try to end yourself. But you cannot die. You just simply heal. <br><br>

                You look at the other beings with fangs and fur, creatures who only wanted to protect themself.
                They tremble when the human raise the whip. And when they look at you, they tremble even harder.
                To them, you look like the the ones who walk upright who hurt them. They fear you too. <br><br>

                You are not a two-leg creatures. <br>
                You are not like the caged ones. <br>
                Then what are you? <br><br>

                In the darkness of the cage, you listen to the crowd outside the cheering, the clapping, the laughter
                that rises whenever you fall. <br><br>

                And maybe you understand at last. <br><br>

                You are a tool. You were made to suffer for others to entertained. <br>
                Nothing more. <br>
                Nothing less. <br><br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "knightEnding": {
        "text": `You lift your head. The courtroom waits, tense and trembling. <br><br>

                “Violence,” you say slowly. “It is in me. It is what I understand.” <br><br>

                You speak of the stories you read, battles, heroes, warriors who
                lived and died by the blade. In those pages, you found something that finally made sense. <br><br>

                “War does not care for faces or shape,” you tell them. <br>
                “Only strength. Only will.” <br><br>

                You look at a man who wears a cloak and a crown in the corner of the room. You bow your head. <br>
                “Use me,” you say. “I do not want gold. I do not want land. Only battle. Imagine it, an undead warrior that
                only bows to you."" <br><br>

                The king steps forward slowly, studying you with a strange mix of caution and curiosity. Then he smiles, a sharp, knowing smile.
                He signals the guards. Chains fall from your wrists. <br><br>

                From that day on, you become his warrior. Iron armor hides your face from the world. No one judges you. No one screams.
                No one asks what you are. <br><br>

                Behind the helmet, you know this is the closest thing you will ever have. The hunger for violence,
                the echo of war, the weight of metal on your skin… it is the only place the world
                ever lets you exist. <br><br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "poetEnding": {
        "text": `“I have read stories, chased ideas, gathered wisdom. All I am capable of is to think, to speak, to shape meaning 
                from silence. That is all. <br><br>

                You look at a man who wears a cloak and a crown in the corner of the room. He steps forward, his gaze moves across you slowly <br> 
                “Look at yourself,” he says. “What beauty can come from you?” <br><br>

                “Your Majesty… stories and poems,” you reply. “Words. Ideas. Imagination. That is what I have.” <br><br>
                
                The king frowns. <br>
                “Poetry,” he says, “is the purest form of beauty. It belongs to those touched by grace — the lovely, the blessed, the ones the world longs to remember.” 
                <br><br>

                His eyes sweep over you once more. <br>
                “And you,” he adds softly, “are none of those things.” <br><br>

                The guards grip your arms against the chains.  
                “Lock them below,” the king orders. “If they want to speak, let the darkness be their audience.” <br><br>

                You are dragged downward, past torches, past stone walls, past the last traces of daylight. The world narrows. At the 
                bottom of the kingdom, they abandon you in chains. <br><br>

                {Time passes by...}`,
        "choices": [
            { "label": "Time passes by...", "next": "poetEndingFinish" }
        ]
    },

    "poetEndingFinish": {
        "text": `A new prisoner is dragged down the stairs and thrown into the cell beside yours.  
                He lies still for a moment, then lifts his head. His eyes meeting your metal-covered face. <br><br>

                He should scream. But he doesn’t. <br><br>

                You tilt your head in the dark.  
                “Why aren’t you afraid?” <br><br>

                The man lets out a shaky breath. “Rumors up there,” he murmurs. “An old convict... talks about a creature 
                with an iron face. He said there was something down here that told stories. Said listening to it was the only 
                thing that give him hope. The only thing that kept him hoping he might see the sky again.” <br><br>

                A quiet thought rises in you, maybe this is why you were brought here. Not to suffer alone, but to keep others 
                from falling apart in the dark. Your stories and poems, untouched by any chain, are the only things holding the 
                broken together down here. They listen because it helps them breathe. Maybe this is your purpose. <br><br>

                {The end...}`,
        "choices": [
            { "label": "The end...", "next": "restartArea" }
        ]
    },

    "restartArea": {
        "text": `It seems this path has come to an end. You have found 1 out 5 endings.<br>
                Will you try again? {Yes...} <br><br>

                {test}`,
        "choices": [
            { "label": "Yes...", "next": "start" }
        ]
    }
}