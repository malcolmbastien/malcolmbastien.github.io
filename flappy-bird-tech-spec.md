# Technical Specification: Minimal Flappy Bird Clone

## Introduction
This document provides a detailed technical specification for the implementation of a minimal Flappy Bird clone, based on the accompanying Product Requirements Document (`flappy-bird-prd.md`). It outlines the technical details, including data structures, algorithms, and interaction flows for core game features, and elaborates on the use of HTML, CSS, and JavaScript.

## 1. Game Canvas

### Context
The game will be rendered within a dedicated HTML `<canvas>` element. This element will serve as the primary drawing surface for all game entities, including the bird, pipes, and background. Its dimensions will be fixed to ensure a consistent game area, mimicking the original game's aspect ratio.

### Examples

#### Scenario: Canvas Initialization
Given:
- A web page is loaded.

When:
- The JavaScript game initialization script runs.

Then:
- An HTML `<canvas>` element with `id="gameCanvas"` is present in the DOM.
- The canvas has a `width` of `288` pixels and a `height` of `512` pixels.
- A 2D rendering context is obtained from the canvas for drawing operations.

## 2. Bird Mechanics

### Context
The bird is the player-controlled entity. Its primary mechanics involve continuous downward movement due to gravity, upward "flaps" in response to user input, and boundary checks to prevent it from moving completely off-screen vertically.

### Data Structures
The bird's state will be managed by a JavaScript object or class instance.

```javascript
const bird = {
    x: 50,          // X-coordinate (fixed for horizontal movement)
    y: 250,         // Y-coordinate (changes with gravity and flap)
    width: 24,      // Width of the bird (e.g., square)
    height: 24,     // Height of the bird (e.g., square)
    velocity: 0,    // Current vertical velocity
    gravity: 0.25,  // Downward acceleration per frame
    lift: -5        // Upward velocity applied on flap
};
```

### Algorithms

#### Gravity Application
- In each game loop iteration, `bird.velocity` will be incremented by `bird.gravity`.
- `bird.y` will then be incremented by `bird.velocity`.

#### Flap Action
- On user input (spacebar or mouse click), `bird.velocity` will be set to `bird.lift`.

#### Boundary Checks
- If `bird.y` falls below `canvas.height - bird.height`, the game ends (collision with ground).
- If `bird.y` goes above `0`, `bird.y` will be clamped to `0` to prevent it from going off the top of the screen.

### Interaction Flow

1.  **Game Start:** Bird is initialized at a starting `(x, y)` position with `velocity = 0`.
2.  **Game Loop:**
    *   Apply gravity to `bird.velocity`.
    *   Update `bird.y` based on `bird.velocity`.
    *   Check for top boundary collision.
    *   Render the bird at its new `(x, y)` position.
3.  **User Input (Flap):**
    *   Event listener detects spacebar press or mouse click.
    *   `bird.velocity` is immediately set to `bird.lift`.

### Examples

#### Scenario: Bird Falling Due to Gravity
Given:
- The game is in the "Playing" state.
- The bird's `y` is `250` and `velocity` is `0`.
- `gravity` is `0.25`.

When:
- One game frame passes without user input.

Then:
- The bird's `velocity` becomes `0.25`.
- The bird's `y` becomes `250.25`.

#### Scenario: Bird Flapping
Given:
- The game is in the "Playing" state.
- The bird's `y` is `250` and `velocity` is `2`.
- `lift` is `-5`.

When:
- The user presses the spacebar.

Then:
- The bird's `velocity` immediately becomes `-5`.
- In the next frame, the bird's `y` will decrease, moving it upwards.

#### Scenario: Bird Hits Top Boundary
Given:
- The game is in the "Playing" state.
- The bird's `y` is `-10` (above the canvas top).

When:
- The game loop updates the bird's position.

Then:
- The bird's `y` is clamped to `0`.

## 3. Pipe Mechanics

### Context
Pipes are the primary obstacles in the game, consisting of an upper and a lower segment with a variable gap. They are generated off-screen, move horizontally across the canvas, and are removed once they exit the screen to the left.

### Data Structures
An array will store multiple pipe objects. Each pipe object will contain properties for its position, dimensions, and gap information.

```javascript
const pipes = []; // Array to hold all active pipe objects

// Example pipe object structure
const pipe = {
    x: 288,         // X-coordinate (starts off-screen right)
    y: 0,           // Y-coordinate of the top pipe (determines gap position)
    width: 52,      // Width of the pipe
    height: 320,    // Height of the individual pipe segment (e.g., fixed)
    gap: 100,       // Vertical size of the gap
    passed: false   // Flag to check if bird has passed for scoring
};
```

### Algorithms

#### Pipe Generation
- A timer or frame counter will trigger pipe generation at regular intervals (e.g., every 90-100 frames).
- When generated, a new `pipe` object is created.
- `pipe.x` is initialized to `canvas.width`.
- `pipe.y` (top pipe's bottom edge) will be randomly determined within a safe range to ensure the gap is always visible and passable (e.g., `min_y` to `max_y - gap`).
- The new `pipe` object is added to the `pipes` array.

#### Pipe Movement
- In each game loop iteration, for every `pipe` in the `pipes` array, `pipe.x` will be decremented by a constant `pipeSpeed` (e.g., `2` pixels per frame).

#### Off-screen Removal
- After updating `pipe.x`, if `pipe.x + pipe.width` is less than `0`, the pipe is considered off-screen.
- These pipes will be removed from the `pipes` array (e.g., using `splice` or filtering the array).

### Interaction Flow

1.  **Game Start/Playing:**
    *   Initialize `pipes` array as empty.
    *   Start a pipe generation timer/counter.
2.  **Game Loop:**
    *   **Generate Pipes:** If the timer/counter reaches its threshold, create a new pipe with a random gap position and add it to `pipes`. Reset the timer/counter.
    *   **Move Pipes:** Iterate through `pipes`, decrementing each `pipe.x` by `pipeSpeed`.
    *   **Remove Off-screen Pipes:** Iterate through `pipes`, removing any that have moved completely off-screen to the left.
    *   **Render Pipes:** For each pipe, draw both the top and bottom segments based on `pipe.x`, `pipe.y`, `pipe.width`, `pipe.height`, and `pipe.gap`.

### Examples

#### Scenario: Pipe Generation
Given:
- The game is in the "Playing" state.
- The pipe generation timer is due.
- `canvas.width` is `288`.

When:
- The game loop executes the pipe generation logic.

Then:
- A new `pipe` object is created.
- The new `pipe.x` is `288`.
- The new `pipe.y` is a random value within the allowed range.
- The new `pipe` object is added to the `pipes` array.

#### Scenario: Pipe Movement
Given:
- The game is in the "Playing" state.
- A `pipe` object has `x = 100` and `pipeSpeed = 2`.

When:
- One game frame passes.

Then:
- The `pipe.x` becomes `98`.

#### Scenario: Pipe Removal
Given:
- The game is in the "Playing" state.
- A `pipe` object has `x = -60` and `width = 52`.

When:
- The game loop executes the off-screen pipe removal logic.

Then:
- The `pipe` object is removed from the `pipes` array because `x + width` (`-8`) is less than `0`.

## 4. Collision Detection

### Context
Collision detection determines when the game ends. This involves checking for overlaps between the bird's bounding box and the pipes' bounding boxes, as well as the bird's bounding box and the ground (bottom of the canvas).

### Algorithms

#### Axis-Aligned Bounding Box (AABB) Collision
This method is suitable for rectangular shapes. Two rectangles `R1` (x1, y1, w1, h1) and `R2` (x2, y2, w2, h2) collide if:
`(R1.x < R2.x + R2.w && R1.x + R1.w > R2.x && R1.y < R2.y + R2.h && R1.y + R1.h > R2.y)`

#### Bird-Pipe Collision
- For each `pipe` in the `pipes` array:
    - Define the bounding box for the top pipe segment: `(pipe.x, 0, pipe.width, pipe.y)`.
    - Define the bounding box for the bottom pipe segment: `(pipe.x, pipe.y + pipe.gap, pipe.width, canvas.height - (pipe.y + pipe.gap))`.
    - Check for AABB collision between the `bird`'s bounding box and the top pipe segment.
    - Check for AABB collision between the `bird`'s bounding box and the bottom pipe segment.
    - If any collision is detected, trigger "Game Over".

#### Bird-Ground Collision
- Check if `bird.y + bird.height` is greater than or equal to `canvas.height`.
- If true, trigger "Game Over".

### Examples

#### Scenario: Bird Collides with Top Pipe
Given:
- Bird: `x=50, y=100, width=24, height=24`
- Pipe: `x=60, y=110, width=52, gap=100` (top pipe segment ends at `y=110`)

When:
- The collision detection logic runs.

Then:
- A collision is detected between the bird and the top pipe segment.
- The game state transitions to "Game Over".

#### Scenario: Bird Collides with Ground
Given:
- Bird: `x=50, y=490, width=24, height=24`
- Canvas height: `512`

When:
- The collision detection logic runs.

Then:
- A collision is detected because `bird.y + bird.height` (`490 + 24 = 514`) is greater than `canvas.height` (`512`).
- The game state transitions to "Game Over".

## 5. Scoring

### Context
The player's score increases by one each time the bird successfully navigates through a pair of pipes. The score is displayed on the screen.

### Data Structures
A simple numerical variable will store the current score.

```javascript
let score = 0;
```

### Interaction Flow

1.  **Game Start:** `score` is initialized to `0`.
2.  **Game Loop (Scoring Check):**
    *   For each `pipe` in the `pipes` array:
        *   If `pipe.x + pipe.width < bird.x` (the pipe has passed the bird horizontally) AND `pipe.passed` is `false`:
            *   Increment `score` by `1`.
            *   Set `pipe.passed` to `true` to prevent multiple increments for the same pipe.
3.  **Display:** The current `score` is rendered on the canvas or in a separate HTML element.

### Examples

#### Scenario: Bird Passes Through Pipes
Given:
- Bird: `x=50, width=24`
- Pipe: `x=20, width=52, passed=false`

When:
- The game loop executes the scoring logic.

Then:
- `pipe.x + pipe.width` (`20 + 52 = 72`) is greater than `bird.x` (`50`), so no score increment yet.

Given:
- Bird: `x=50, width=24`
- Pipe: `x=10, width=52, passed=false`

When:
- The game loop executes the scoring logic.

Then:
- `pipe.x + pipe.width` (`10 + 52 = 62`) is greater than `bird.x` (`50`), so no score increment yet.

Given:
- Bird: `x=50, width=24`
- Pipe: `x=-5, width=52, passed=false`

When:
- The game loop executes the scoring logic.

Then:
- `pipe.x + pipe.width` (`-5 + 52 = 47`) is less than `bird.x` (`50`).
- `score` is incremented by `1`.
- `pipe.passed` is set to `true`.

## 6. Game State

### Context
The game will operate in distinct states: "Start Screen", "Playing", and "Game Over Screen". Each state dictates what is rendered and what user inputs are active.

### Data Structures
A single variable will manage the current game state.

```javascript
const GAME_STATE = {
    START: 'start',
    PLAYING: 'playing',
    GAME_OVER: 'gameOver'
};
let currentState = GAME_STATE.START;
```

### Interaction Flow

#### Start Screen
- **Display:** "Press Space to Start" message.
- **Input:** Only spacebar/mouse click is active to transition to "Playing".
- **Game Loop:** No game logic (bird movement, pipe generation) is active.

#### Playing
- **Display:** Bird, pipes, current score.
- **Input:** Spacebar/mouse click for bird flap.
- **Game Loop:** All core game logic (gravity, pipe movement, collision, scoring) is active.

#### Game Over Screen
- **Display:** "Game Over", final score, "Press Space to Restart" message.
- **Input:** Only spacebar/mouse click is active to transition to "Playing" (restarts game).
- **Game Loop:** No game logic is active.

### Examples

#### Scenario: Transition from Start to Playing
Given:
- `currentState` is `GAME_STATE.START`.

When:
- The user presses the spacebar.

Then:
- `currentState` transitions to `GAME_STATE.PLAYING`.
- Bird and pipe positions are reset.
- Score is reset to `0`.
- Game loop begins processing game logic.

#### Scenario: Transition from Playing to Game Over
Given:
- `currentState` is `GAME_STATE.PLAYING`.
- A collision is detected (e.g., bird hits a pipe).

When:
- The collision detection logic triggers the game over condition.

Then:
- `currentState` transitions to `GAME_STATE.GAME_OVER`.
- Game loop pauses all game logic updates.
- "Game Over" screen is displayed.

#### Scenario: Transition from Game Over to Playing (Restart)
Given:
- `currentState` is `GAME_STATE.GAME_OVER`.

When:
- The user presses the spacebar.

Then:
- `currentState` transitions to `GAME_STATE.PLAYING`.
- Bird and pipe positions are reset to initial states.
- Score is reset to `0`.
- Game loop resumes processing game logic.

## 7. Technical Considerations

### HTML Usage
- **`index.html`:** This will be the main entry point.
    - A `<canvas>` element will be the primary game rendering surface.
    - A `<div>` or `<p>` element might be used to display the score, or the score could be drawn directly onto the canvas.
    - Simple text elements for "Start" and "Game Over" messages, potentially hidden/shown with CSS or rendered directly on canvas.
    - A `<script>` tag to link `game.js`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flappy Bird Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="gameCanvas" width="288" height="512"></canvas>
    <div id="gameMessages">
        <p id="startMessage">Press Space to Start</p>
        <p id="gameOverMessage" style="display:none;">Game Over! Score: <span id="finalScore">0</span><br>Press Space to Restart</p>
    </div>
    <script src="game.js"></script>
</body>
</html>
```

### CSS Usage
- **`style.css`:** Basic styling for the page and potentially the canvas container.
    - Centering the canvas on the page.
    - Setting a background color for the body.
    - Styling for the score display and game messages (e.g., font, color, position).
    - Hiding/showing game messages using `display: none;` and JavaScript manipulation of `style.display`.

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #333;
    font-family: 'Arial', sans-serif;
    color: white;
    flex-direction: column;
}

canvas {
    background-color: #70c5ce; /* Sky blue */
    border: 2px solid #555;
    display: block; /* Remove extra space below canvas */
}

#gameMessages {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
}

#startMessage, #gameOverMessage {
    margin: 0;
}
```

### JavaScript Usage
- **`game.js`:** All game logic will reside here.
    - **Initialization:** Get canvas and 2D context, define game constants (bird properties, pipe speed, gravity, etc.).
    - **Game Loop (`requestAnimationFrame`):** The core of the game, continuously updating game state and rendering.
        - `update()` function: Handles all game logic (bird physics, pipe movement, collision detection, scoring).
        - `draw()` function: Renders all game elements onto the canvas.
    - **Input Handling:** Event listeners for `keydown` (spacebar) and `click` (mouse) to trigger bird flaps and game state transitions.
    - **Game State Management:** A `switch` statement or `if/else if` chain within the game loop to execute different logic based on `currentState`.
    - **Object Management:** Arrays for pipes, and objects for bird and game state.
    - **Randomization:** `Math.random()` for pipe gap positions.

```javascript
// game.js

// Game Constants
const CANVAS_WIDTH = 288;
const CANVAS_HEIGHT = 512;
const BIRD_WIDTH = 24;
const BIRD_HEIGHT = 24;
const PIPE_WIDTH = 52;
const PIPE_GAP = 100; // Vertical gap between top and bottom pipes
const PIPE_SPEED = 2;
const GRAVITY = 0.25;
const LIFT = -5;
const PIPE_INTERVAL = 90; // Frames between new pipe generation

// Game State
const GAME_STATE = {
    START: 'start',
    PLAYING: 'playing',
    GAME_OVER: 'gameOver'
};
let currentState = GAME_STATE.START;

// Game Variables
let bird;
let pipes = [];
let score;
let frameCount;

// DOM Elements
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startMessage = document.getElementById('startMessage');
const gameOverMessage = document.getElementById('gameOverMessage');
const finalScoreDisplay = document.getElementById('finalScore');

// Initialize Game
function initGame() {
    bird = {
        x: 50,
        y: CANVAS_HEIGHT / 2 - BIRD_HEIGHT / 2,
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT,
        velocity: 0
    };
    pipes = [];
    score = 0;
    frameCount = 0;

    startMessage.style.display = 'block';
    gameOverMessage.style.display = 'none';
    draw(); // Draw initial state
}

// Game Loop
function gameLoop() {
    requestAnimationFrame(gameLoop);

    switch (currentState) {
        case GAME_STATE.START:
            // Only draw initial state, wait for input
            break;
        case GAME_STATE.PLAYING:
            update();
            draw();
            break;
        case GAME_STATE.GAME_OVER:
            // Display game over screen, wait for restart input
            break;
    }
}

// Update Game Logic
function update() {
    frameCount++;

    // Bird physics
    bird.velocity += GRAVITY;
    bird.y += bird.velocity;

    // Bird boundary checks
    if (bird.y + bird.height >= CANVAS_HEIGHT) {
        // Collision with ground
        currentState = GAME_STATE.GAME_OVER;
        finalScoreDisplay.textContent = score;
    }
    if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0; // Stop upward movement if hitting top
    }

    // Pipe generation
    if (frameCount % PIPE_INTERVAL === 0) {
        const minPipeY = 50; // Minimum height for top pipe
        const maxPipeY = CANVAS_HEIGHT - PIPE_GAP - 50; // Maximum height for top pipe
        const topPipeHeight = Math.floor(Math.random() * (maxPipeY - minPipeY + 1)) + minPipeY;

        pipes.push({
            x: CANVAS_WIDTH,
            y: topPipeHeight, // This is the bottom edge of the top pipe
            width: PIPE_WIDTH,
            gap: PIPE_GAP,
            passed: false
        });
    }

    // Pipe movement and removal
    for (let i = 0; i < pipes.length; i++) {
        const p = pipes[i];
        p.x -= PIPE_SPEED;

        // Collision detection (Bird-Pipe)
        // Top pipe collision
        if (bird.x < p.x + p.width &&
            bird.x + bird.width > p.x &&
            bird.y < p.y &&
            bird.y + bird.height > 0) { // Bird's bottom is above top of canvas
            currentState = GAME_STATE.GAME_OVER;
            finalScoreDisplay.textContent = score;
        }
        // Bottom pipe collision
        if (bird.x < p.x + p.width &&
            bird.x + bird.width > p.x &&
            bird.y < CANVAS_HEIGHT && // Bird's top is below bottom of canvas
            bird.y + bird.height > p.y + p.gap) {
            currentState = GAME_STATE.GAME_OVER;
            finalScoreDisplay.textContent = score;
        }

        // Scoring
        if (p.x + p.width < bird.x && !p.passed) {
            score++;
            p.passed = true;
        }
    }

    // Remove off-screen pipes
    pipes = pipes.filter(p => p.x + p.width > 0);
}

// Draw Game Elements
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw background (if not using CSS)
    // ctx.fillStyle = '#70c5ce';
    // ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw bird
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    // Draw pipes
    ctx.fillStyle = 'green';
    for (let i = 0; i < pipes.length; i++) {
        const p = pipes[i];
        // Top pipe
        ctx.fillRect(p.x, 0, p.width, p.y);
        // Bottom pipe
        ctx.fillRect(p.x, p.y + p.gap, p.width, CANVAS_HEIGHT - (p.y + p.gap));
    }

    // Draw score
    if (currentState === GAME_STATE.PLAYING) {
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
    }

    // Display messages based on state
    if (currentState === GAME_STATE.START) {
        startMessage.style.display = 'block';
        gameOverMessage.style.display = 'none';
    } else if (currentState === GAME_STATE.GAME_OVER) {
        startMessage.style.display = 'none';
        gameOverMessage.style.display = 'block';
    } else {
        startMessage.style.display = 'none';
        gameOverMessage.style.display = 'none';
    }
}

// Input Event Listener
document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        if (currentState === GAME_STATE.START || currentState === GAME_STATE.GAME_OVER) {
            initGame(); // Reset and start/restart
            currentState = GAME_STATE.PLAYING;
        } else if (currentState === GAME_STATE.PLAYING) {
            bird.velocity = LIFT; // Flap
        }
    }
});

document.addEventListener('click', () => {
    if (currentState === GAME_STATE.START || currentState === GAME_STATE.GAME_OVER) {
        initGame(); // Reset and start/restart
        currentState = GAME_STATE.PLAYING;
    } else if (currentState === GAME_STATE.PLAYING) {
        bird.velocity = LIFT; // Flap
    }
});

// Start the game loop
initGame();
gameLoop();
```