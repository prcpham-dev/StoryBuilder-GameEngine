var scene3 = {
    "scene3.0": {
        "text": `After a very long sleep in a shed, you wake up to the sound of birds chirping outside.
                The sun shines through a small window, warming your face. Your bruises from yesterday are
                starting to heal. You sit up slowly, observing your surroundings. <br><br>

                There are sounds of movement outside. You cautiously peek out and see the same
                creatures that chased you from before. You panicked and thinking of {running away}. <br><br>

                But as you watch, you realize they are simply livving daily lives. Working with their hands,
                speaking softly unaware of your presence. You calm down and choose to {observe them from the shed}.
                <br><br>
                `,
        "choices": [
            { "label": "running away", "next": "scene3_run" },
            { "label": "observe them from the shed", "next": "scene3_drawing" }
        ]
    },

    "scene3_run": {
        "text": `You bolt from the shed and sprint into the forest, branches whipping past your face.
                Behind you, startled voices rise but no one follows for long. <br><br>

                You collapse against a fallen log, chest burning, fear twisting inside you.
                Hours pass before the panic fades. <br><br>

                But the truth settles uneasily in you running solves nothing.
                You are still alone. Still without answers. <br><br>

                As darkness falls, you feel drawn back toward the cottage toward the lives you glimpsed
                but did not understand. You decide to {return to the shed.}`,
        "choices": [
            { "label": "return to the shed.", "next": "scene3_observed" }
        ]
    },

    "scene3_drawing": {
        "text": `You stay hidden during the day, afraid to reveal yourself. Through the cracks in the wood,
                you watch the world beyond the shed. <br><br>

                You look into the distance. One man kneels beside a wall, dragging dark pigment across the surface.
                They remind you of things you once saw when you first started this adventure. Then you start to look at
                it a bit closer, a small white and black creature with four legs. That symbols looks exactly like gentle
                animal sharing the shed with you now. You seems to understand something. All of the symbols that you saw
                means something. <br><br>

                Beside those symbols, there are more as well. You {look around to find other symbols...}`,
        "choices": [
            { "label": "look around to find other symbols...", "next": "scene3_drawing_choice" }
        ]
    },

    "scene3_drawing_choice": {
        "text": `Among all the symbols you see, two catch your eyes. <br><br>

                {The first symbol shows chaos}: creatures with long teeth and hairy bodies fighting against
                humans holding stick similar to yesterday. It feels violent, frightening, and full of pain.
                <br><br>

                {The second symbol is the opposite}. A calm field under moonlight.
                A white and black animal rests in the grass, peaceful and unbothered.
                No fear. No anger. Just quiet and peace. <br><br>

                You look at both images carefully. One filled with rage.
                One filled with peace. One of them speaks to you more. <br><br>`,
        "choices": [
            { "label": "The first symbol shows chaos", "next": "scene3_chaos" },
            { "label": "The second symbol is the opposite", "next": "scene3_peace" }
        ]
    },

    "scene3_chaos": {
        "text": `The violent image stirs something inside you. You feel anger rising in your chest.
                Why were those creatures fighting humans? Were they trying to protect themselves like
                you did? <br><br>

                You decide that violence is the only way to survive in this world.
                You will need to be strong, fierce, and unyielding. <br><br>

                You carry these feelings back to the shed as you {close the door.}`,
        "choices": [
            { "label": "close the door.", "next": "scene3_observed" }
        ]
    },

    "scene3_peace": {
        "text": `The peaceful image fills you with a strange calm. You feel a longing in your heart to
                experience such tranquility. <br><br>

                You decide that understanding and kindness are the keys to surviving in this world.
                You will need to be gentle, patient, and open-hearted. <br><br>

                You carry these feelings back to the shed as you {close the door.}`,
        "choices": [
            { "label": "close the door.", "next": "scene3_observed" }
        ]
    },

    "scene3_observed": {
        "text": `You stay hidden during the day, watching the family quietly through the cracks in the shed.
                Their simple kindness pulls at something inside you. You do not understand their words,
                but you understand the warmth in them. <br><br>

                Day after day, you return to the same crack in the wood, drawn to their light. <br><br>

                Over time, you begin to notice patterns, repeated sounds, familiar tones. Slowly, bit by bit,
                you mimic their words in the darkness, shaping your mouth the way they do. <br><br>

                You listen especially to the old man. His voice is calm, steady, gentle. You copy the way he forms
                his sounds, practicing quietly when no one can hear you. <br><br>

                Sometimes, you hear the old man teaching the boy to speak more clearly, or helping him sound out words
                from a small book. You listen to every lesson, repeating each sound under your breath. <br><br>

                You also notice books lying in the field where the boy sometimes forgets them. When the family leaves,
                you pick them up and trace the symbols slowly with your finger, {trying to understand} what they mean.
                <br><br>`,
        "choices": [
            { "label": "trying to understand", "next": "scene3_observed_ending" }
        ]
    },

    "scene3_observed_ending": {
        "text": `You take the books back to the shed and study them one at a time.
                At first, the symbols blur together, but slowly they begin to understand. <br><br>

                Paradise Lost teaches you about creation, rejection, and the search for meaning. <br>
                Plutarch's Lives shows you heroes shaped by struggle and virtue. <br>
                The Sorrows of Werther fills you with a sadness you never knew had a name. <br><br>

                These stories change you. They teach you to think, to question, to imagine. You feel both grateful
                and guilty for taking the books without permission. <br><br>

                So, at night, you repay them in secret. You gather firewood. You clear snow from their path.
                You move heavy tools and water buckets to spare them the burden. <br><br>

                You do not speak to them, but in your own quiet way, you offer thanks. <br>
                Thanks for the warmth you watch each night. <br>
                Thanks for the voices that taught you sound and meaning. <br>
                Thanks for the books that taught you how to think. <br><br>

                With this new understanding burning inside you, you decide what to do next.
                It is time to {move forward}.`,
        "choices": [
            { "label": "move forward", "next": "scene4.0" }
        ]
    },
}