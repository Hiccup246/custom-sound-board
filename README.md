# 🔉 A Custom Sound Board
![](https://img.shields.io/github/license/hiccup246/custom-sound-board)
![](https://img.shields.io/github/languages/code-size/hiccup246/custom-sound-board)

A project allowing custom sound bites to be played

![](https://i.imgur.com/JyN0wTj.png)

<br>

## 📓 Description
This project represents a custom sound board allowing mp3 files to be displayed and played within a browser.

The project itself is built using the <b>[Fre$h](https://fresh.deno.dev/)</b> framework which is yet another modern javascript framework built upon <b>[Deno](https://deno.com/deploy)</b> (an alternative to [Node.js](https://nodejs.org/en/)).

<br>

### How to add mp3 files
The mp3 files which will be rendered on the sound board are found within the `static/sound-clips` directory. The approach taken by this project is a "What you see is what you get" (WYSIWYG) in that:
- Sound clips can be added to the root of this directory or can be organised into further directories to aid in sound clip management.
- The name of the mp3 file is the name which will be rendered in the sound board.

<br>

### Understanding the project structure
This project is built using <b>[Fre$h](https://fresh.deno.dev/)</b> and follows its island architecture. This means that components that are heavily interactive are located within the `islands` directory and largly static components are found within the `components` directory.

The project can be understood on a high level perspective from the "top" down which begins with the projects routes:
- `routes/_app.tsx` - Constructs the projects layout, styles the page body

- `routes/index.tsx` - Renders the main page by composing the `SoundBoard` and `SoundBoardButton` islands. Processes the `static/sound-clips` directory and passes the results to the `SoundBoard` island.

As described the routes then render the core islands and components which make up the sound board.
- `islands/SoundBoard.tsx` - Renders the search bar and sets the layout for its multiple SoundBoardButtons

- `islands/SoundBoardButton.tsx` - Takes a name and src for a cound clip and renders a button which when clicked uses [Howler.js](https://howlerjs.com/) to play the sound clip.

- `components/HeadElement.tsx` - Renders the main `<Head>` tag of the site and contains all information related to SEO and site metadata.

<br>

## Usage
To use this project first clone this repository onto your local machine. After cloning the repository you can then navigate to the root of the project and run the following command.
```
deno task start
```

This will begin the a development server, watch the project directory and restart as necessary.

<br>

## 🔮 Future Additions
- Optimise lighthouse mobile score
- Add ability to sort clips by directory name
- Add functionality to track most used clips
- Add ability to filter cards by most used
- Think about light/dark theme
- Think about colour of clip buttons after clicked
