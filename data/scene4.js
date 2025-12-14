var scene4 = {
    "scene4.0": {
        "text": `Night falls. The cottage glows softly. Through the crack in the shed, you see the old man sitting alone. 
                His face is peaceful. His hands rest on his knees. <br><br>

                You decide this is the moment. The only moment. He cannot see you; he cannot judge you by your face. <br><br>

                You step out of the shed and approach the door. Your heart pounds. Your voice trembles. <br><br>

                “Sir,” you say softly. <br><br>

                The old man turns toward the sound of your voice. <br>
                “You sound troubled,” he says kindly. “What is wrong with you, my son?” <br><br>

                Hearing the word son gives you hope for a connection to the world. You sit beside him. His kindness feels 
                unreal. You tell him you are alone, unwanted, and afraid. He reaches out, placing a gentle hand on your 
                arm. <br><br>

                “No being deserves loneliness,” he tells you. “Stay. When my children return, I will speak for you.” <br><br>

                For the first time in your life, hope grows inside you. <br><br>

                You choose to {stay with him.}`,
        "choices": [
            { "label": "stay with him.", "next": "scene4_meetingFelix" }
        ]
    },

    "scene4_meetingFelix": {
        "text": `Footsteps approach outside. The old man smiles gently. <br>
                “My children have returned,” he says. “They will welcome you.” <br><br>

                The door opens. Felix enters first. He freezes when he sees you sitting beside his father. 
                His face twists in shock, turn into fear and then rage. <br><br>

                “Get away from him!” Felix shouts. <br><br>

                You raise your hands to show you mean no harm, but he does not see your hands, only your face. <br><br>

                He seizes a heavy stick and swings. Pain bursts across your skull. The old man cries out, 
                “Felix, stop! He is a friend!” <br><br>

                But fear has already blinded Felix. Blow after blow, he drives you out of the home you hoped would 
                finally accept you. <br><br>

                You flee into the cold night, into the forest with a broken heart. {Waiting}, hoping that
                maybe, by morning, they will change their minds.`,
        "choices": [
            { "label": "Waiting", "next": "scene4_delaceyMorningAfter" }
        ]
    },

    "scene4_delaceyMorningAfter": {
        "text": `You spend the night alone in the woods. The snow stings your skin. You have never felt so unwanted.
                <br><br>

                But the house is empty. Silent. The family has fled. They abandoned their home rather than 
                live near you. <br><br>

                The last warmth you ever knew is gone. <br><br>

                Rage and grief twist together inside you. With shaking hands, you knock over a lantern. 
                Flames crawl up the wooden wall. The cottage, your first hope, begins to burn. <br><br>

                You stand outside as the fire grows. Your body refuses to move. A part of you wants 
                to {stay and watch it burn into ashes.} <br><br>

                From the distance, you hear shouting. Shouting. Footsteps. Something is coming. 
                You decide to {flee}, runaway before anything catches you. <br><br>
            `,
        "choices": [
            { "label": "stay and watch it burn into ashes.", "next": "getting_caught_after_scene3" },
            { "label": "flee", "next": "scene4_runaway" }
        ]
    },

    "scene4_runaway": {
        "text": `You run as fast as your legs will carry you, snow scattering beneath your feet. The morning sun glows 
                faintly behind the clouds, cold light reflecting across the white forest floor. <br><br>

                Behind you, smoke rises into the pale daylight. Your first fragile hope, the cottage, is now only burning 
                timber and drifting ash. <br><br>

                Branches scrape your arms as you push deeper into the snowy woods. At last, your strength fails and you 
                collapse beneath a tree covered in snow, breath sharp and trembling. <br><br>

                The world around you is silent. <br>
                No shouting. <br>
                No footsteps. <br>
                Only the stillness of morning and the ache in your chest. <br><br>

                No one is chasing you. <br>
                No one is coming. <br>
                You are completely alone in the winter cold. <br><br>

                Or all you can think of now is: {Who you are?} <br>
                {Why are you like this?}`,
        "choices": [
            { "label": "Who you are?", "next": "scene4_ending_with_notes", "requires": ["scene1.2"] },
            { "label": "Why are you like this?", "next": "scene4_without_notes", "requires": ["scene1.3"] }
        ]
    },

    "scene4_with_notes": {
        "text": `As you sit in the snow, breathing hard, a memory returns. <br><br>

                The papers. The strange notes you found long ago, the ones you could not read. <br><br>

                Your hand reaches into your pocket. The pages are still there, crumpled and worn, but still readable. 
                <br><br>

                Now, with your given knowledge, you know that you are able to understand them. <br><br>

                This is the answer to eveything. But this thoughts also terrifies you. 
                In there it could be anything. Good or bad. So now you thinking to yourslef again. Should
                I {read it} or {not?}`,
        "choices": [
            { "label": "read it", "next": "originalEnding" },
            { "label": "not?", "next": "nomadEnding" }
        ]
    },

    "scene4_without_notes": {
        "text": `Sitting in the snow, a memory rises in your mind. <br>
                "THE NOTES..." you shoted.  <br><br>

                The strange papers you once found but never understood. Now that you can read, you realize they 
                might hold every answer you fear to know. The truth of where you came from. The truth of why you 
                exist. <br><br>

                The thought frightens you. Should you return to the place where you found them?  
                Should you go back and face whatever truth waits for you there? <br><br>

                You are not ready to go now. But the question hangs heavy in your chest. <br><br>

                {Will you choose to return to the place where it all began?} <br>
                {Or walk away from the truth forever?}
                `,
        "choices": [
            { "label": "Will you choose to return to the place where it all began?", "next": "preOriginalEnding" },
            { "label": "Or walk away from the truth forever?", "next": "nomadEnding" }
        ]
    },
}