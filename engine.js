// engine.js
const start = {
    "start": {
        text: `Press the green text to move forward through the story. If you ever wish to go back in 
            time, a back button will always be waiting at the top. Are you ready to begin? {Yes...}`,
        choices: [
            { label: "Yes...", next: "scene1.0" }
        ]
    }
};

const story = {
  ...start,
  ...(scene1 || {}),
  ...(scene2 || {}),
  ...(scene3 || {}),
  ...(scene4 || {}),
  ...(endings || {})
};

const textDiv = document.getElementById('text');
const backDiv = document.getElementById('back');
let historyStack = [];

/**
 * Cleans up a string by removing excessive newlines and leading whitespace.
 * @param {string} str - The input string to clean.
 * @returns {string} - The cleaned string.
 */
const cleanText = str => str.replace(/\n+/g, ' ').replace(/^\n/, "").replace(/^[ \t]+/gm, "").replace(/\n+/g, ""); 

/**
* Replaces {choice} placeholders inside the scene text with clickable buttons.
* @param {string} text - The scene text containing placeholders like {talk}.
* @param {Array} choices - A list of choices, each with "label" and "next".
* @returns {string} - The final HTML string with <button> elements inserted.
*/
function renderText(text, choices) {
    let rendered = cleanText(text);
    choices.forEach(choice => {
        let show = true;
        if (choice.requires) {
            if (Array.isArray(choice.requires)) {
                show = choice.requires.every(req => historyStack.includes(req));
            } else {
                show = historyStack.includes(choice.requires);
            }
        }
        const regex = new RegExp("\\{" + choice.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\}", "gi");
        if (show) {
            rendered = rendered.replace(
                regex,
                `<button class="option-link" onclick="window.goTo('${choice.next}')">${choice.label}</button>`
            );
        } else {
            rendered = rendered.replace(regex, "");
        }
    });
    return rendered;
}

/**
* Displays a scene (text + choices) and shows/hides the Back button.
* @param {string} sceneName - The key of the scene to display.
*/
function displayScene(sceneName) {
    const scene = story[sceneName];
    if (!scene) return;

    textDiv.style.transition = "opacity 0.3s cubic-bezier(.4,0,.2,1)";
    textDiv.style.opacity = 0;
    setTimeout(() => {
        textDiv.innerHTML = renderText(scene.text, scene.choices);
        textDiv.style.opacity = 1;
    }, 200);

    if (historyStack.length > 1) {
        backDiv.innerHTML =
            `<button class="back-link" onclick="window.goBack()">← Back</button>`;
    } else {
        backDiv.innerHTML = "";
    }
}

/**
* Goes to a specified scene and pushes it onto the history stack.
* @param {string} name - The scene to navigate to.
*/
window.goTo = function (name) {
    if (name === "start") historyStack = [];
    if (historyStack.length === 0 || historyStack[historyStack.length - 1] !== name) historyStack.push(name);
    displayScene(name);
};

/**
* Returns to the previous scene in history.
*/
window.goBack = function () {
    if (historyStack.length > 1) {
        historyStack.pop();
        const prev = historyStack[historyStack.length - 1];
        displayScene(prev);
    }
};

/**
 * Initializes the game by resetting history and going to the start scene.
 */
window.addEventListener('DOMContentLoaded', () => {
    historyStack = [];
    window.goTo('start');
});
