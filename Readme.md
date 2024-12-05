# Matrix Rain Effect

This mini-project implements the iconic "Matrix rain" effect using the HTML5 `<canvas>` element, along with TypeScript for clean and structured code.

---

## Preview

The effect displays green symbols falling down the screen in a random, staggered pattern, resembling the visual style of the Matrix movie. The project features:

- **Dynamic Symbol Animation:** Symbols fall independently, creating a realistic rain effect.
- **Fading Effect:** The background uses a semi-transparent overlay to create a trail or "shimmering" effect.
- **Responsive Design:** The canvas adapts to changes in window size.

---

## Technologies Used

- **HTML5 Canvas**
- **TypeScript**
- **CSS (embedded styles)**

---

## Features

1. **Dynamic Symbols:**
   - Random symbols are selected from a predefined set of characters.
   - Each column has its own independent movement and resets randomly.

2. **Smooth Fading Effect:**
   - Previous frames are slightly faded using a semi-transparent overlay, creating the illusion of a trail.

3. **Responsive Layout:**
   - The canvas automatically resizes when the window dimensions change.

---

## Installation and Usage

1. Clone the repository or copy the project files.
2. Open the `index.html` file in any modern web browser.

---

## How It Works

1. **Canvas Initialization:**
   - The canvas is set to fill the entire browser window.
   - Its context (`2d`) is used for rendering symbols.

2. **Symbols and Columns:**
   - A predefined string of characters (`symbols`) serves as the pool of symbols.
   - The canvas width determines the number of columns based on the `fontSize`.
   - An array (`drops`) tracks the current vertical position of symbols in each column.

3. **Animation:**
   - Each frame:
     - A semi-transparent black rectangle is drawn to create the fading effect.
     - A random symbol is drawn for each column at its current vertical position.
     - Vertical positions are updated, and columns reset randomly when symbols exit the screen.

4. **Responsive Resizing:**
   - An event listener adjusts the canvas dimensions when the browser window is resized.

---

## Code Overview

### Core Variables

- `canvas` and `ctx`: Set up the canvas and its drawing context.
- `symbols`: A string containing all possible characters to display.
- `fontSize`: Determines the size of the symbols and spacing.
- `columns`: The number of columns calculated from the canvas width.
- `drops`: An array where each element tracks the vertical position of a column.

### Main Functions

#### `drawMatrix`
Handles the main animation loop:
- Draws the semi-transparent background for fading.
- Updates each column by drawing a new random symbol.
- Resets column positions randomly to create a staggered effect.

#### `resize` Event Listener
Adapts the canvas dimensions to match the browser window size.

## License
This project is free to use and modify for personal or educational purposes. Attribution is appreciated but not required.

## Author
Created by Itkina Evgeniya. If you have any feedback or suggestions, feel free to reach out!