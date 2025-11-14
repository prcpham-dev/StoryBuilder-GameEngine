let story = {};
const textDiv = document.getElementById('text');
const backDiv = document.getElementById('back');
let historyStack = [];

/**
 * Loads story.json and starts the game
 */
async function loadStory() {
    const response = await fetch("story.json");
    story = await response.json();
    historyStack = [];
    goTo('start');
}

/**
 * Replaces placeholders {choice} with clickable buttons.
 */
function renderText(text, choices) {
    let rendered = text;
    choices.forEach(choice => {
        const regex = new RegExp("\\{" + choice.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\}", "gi");
        rendered = rendered.replace(
            regex,
            `<button class="twine-link" onclick="window.goTo('${choice.next}')">${choice.label}</button>`
        );
    });
    return rendered;
}

/**
 * Displays a scene and handles back button visibility.
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
            `<button id="back-link" onclick="goBack()">← Back</button>`;
    } else {
        backDiv.innerHTML = "";
    }
}

/**
 * Goes to a specified scene and updates history.
 */
function goTo(name) {
    if (historyStack.length === 0 || historyStack[historyStack.length - 1] !== name) {
        historyStack.push(name);
    }
    displayScene(name);
}

/**
 * Moves back one step.
 */
function goBack() {
    if (historyStack.length > 1) {
        historyStack.pop();
        displayScene(historyStack[historyStack.length - 1]);
    }
}

window.onload = loadStory;
