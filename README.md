# StoryBuilder-GameEngine

A simple, lightweight game engine for creating choice-based interactive stories using HTML, CSS, JSON, and JavaScript. Inspired by Twine, Storybase, and classic Choose Your Adventure games.

## Features

- Create interactive stories with branching choices
- Scene and ending management via JSON data files
- Easy customization with HTML and CSS
- Lightweight, fast, and browser-based
- No dependencies; pure JavaScript implementation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/prcpham-dev/StoryBuilder-GameEngine.git
   ```
2. Open `index.html` in your browser to start playing or editing stories.

## How It Works

- Story content is defined in JSON files (`data/scene1.js`, `data/endings.js`, etc.).
- Customize visuals with `style.css` and logic with `engine.js`.
- Simple scene set up:
```js
"Scene_3": {
    "text": `Testing <br><br>
            {Choice 1.} <br>
            {Choice 2.}

            Layout will be: 
            Testing
            
            Choice 1.
            Choice 2.`,
            
    "choices": [
        { "label": "Choice 1.", "next": "Scene_4", "requires": ["Scene_2"] },
        { "label": "Choice 2.", "next": "Scene_5", "requires": ["Scene_1"] },
    ]
},
```


## Credits

- Inspired by [Twine](https://twinery.org/), Storybase, and classic Choose Your Adventure books.
- Co-writer [Minh Pham](https://github.com/Bubseatbubs)

## License

MIT License
