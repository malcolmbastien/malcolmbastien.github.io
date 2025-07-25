const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game constants (from PRD)
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

// Game loop variables
// Bird properties
const BIRD_RADIUS = 12;
const BIRD_COLOR = "yellow";
const GRAVITY = 980; // pixels/second^2 (approx. 2x original Flappy Bird for more noticeable drop)
const FLAP_STRENGTH = -350; // initial velocity upwards when flapping

let bird = {
  x: GAME_WIDTH / 4,
  y: GAME_HEIGHT / 2,
  velocityY: 0,
};

// Game state
let gameOver = false;

// Pipe properties
const PIPE_WIDTH = 52; // Standard Flappy Bird pipe width
const PIPE_GAP_HEIGHT = 100; // Gap for the bird to fly through
const PIPE_SPEED = 120; // pixels/second
const PIPE_INTERVAL = 1.5; // seconds between new pipe generation

// Ground properties
const GROUND_HEIGHT = 112; // Standard Flappy Bird ground height
const GROUND_COLOR = "#ded895"; // Brownish color

const PIPE_INTERVAL = 1.5; // seconds between new pipe generation

const HIGH_SCORES_KEY = "flappyBirdHighScores";

function getHighScores() {
  const scores = JSON.parse(localStorage.getItem(HIGH_SCORES_KEY) || "[]");
  return scores.sort((a, b) => b - a).slice(0, 5); // Get top 5 scores
}

function saveScore(score) {
  const scores = getHighScores();
  scores.push(score);
  scores.sort((a, b) => b - a);
  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(scores.slice(0, 5))); // Store only top 5
}

let pipes = []; // Array to hold all active pipes
let timeSinceLastPipe = PIPE_INTERVAL; // Timer for pipe generation
let score = 0; // Initialize score
let gameState = "start"; // 'start', 'playing', 'gameOver'

// Game loop variables
let lastTime = 0;

function gameLoop(currentTime) {
  // Calculate delta time for frame-rate independent movement
  const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
  lastTime = currentTime;

  // 2. Clear canvas (always clear before drawing current frame)
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // Draw sky blue background
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "playing") {
    // 1. Update game state
    update(deltaTime);
    // 3. Draw all game elements
    draw();
    drawScore();
  } else if (gameState === "gameOver") {
    draw(); // Draw final state of bird and pipes
    drawGameOverScreen();
    drawScore(); // Show final score
    showHighScoresDialog();
  }

  // Request next frame
requestAnimationFrame(gameLoop);

document.getElementById("closeScoresDialog").addEventListener("click", () => {
  document.getElementById("topScoresDialog").style.display = "none";
});}

function handleInput() {
  if (gameState === "start") {
    gameState = "playing";
    bird.velocityY = FLAP_STRENGTH; // Initial flap
  } else if (gameState === "playing") {
    bird.velocityY = FLAP_STRENGTH;
  } else if (gameState === "gameOver") {
    resetGame();
    gameState = "playing";
    bird.velocityY = FLAP_STRENGTH; // Initial flap on restart
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    handleInput();
  }
});

canvas.addEventListener("mousedown", () => {
  handleInput();
});

function resetGame() {
  bird = {
    x: GAME_WIDTH / 4,
    y: GAME_HEIGHT / 2,
    velocityY: 0,
  };
  pipes = [];
  score = 0;
  timeSinceLastPipe = PIPE_INTERVAL; // Ensure first pipe generates correctly
  gameOver = false;
  document.getElementById("topScoresDialog").style.display = "none";
}

function drawStartScreen() {
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText(
    "Flappy Bird Clone",
    GAME_WIDTH / 2 - ctx.measureText("Flappy Bird Clone").width / 2,
    GAME_HEIGHT / 2 - 50,
  );
  ctx.font = "20px Arial";
  ctx.fillText(
    "Press Space to Start",
    GAME_WIDTH / 2 - ctx.measureText("Press Space to Start").width / 2,
    GAME_HEIGHT / 2,
  );
}

function showHighScoresDialog() {
  const highScores = getHighScores();
  const highScoresList = document.getElementById("highScoresList");
  highScoresList.innerHTML = ""; // Clear previous scores

  highScores.forEach((s, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `#${index + 1}: ${s}`;
    highScoresList.appendChild(listItem);
  });

  document.getElementById("topScoresDialog").style.display = "block";
}

function drawGameOverScreen() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText(
    "Game Over!",
    GAME_WIDTH / 2 - ctx.measureText("Game Over!").width / 2,
    GAME_HEIGHT / 2 - 30,
  );
  ctx.font = "20px Arial";
  ctx.fillText(
    `Score: ${score}`,
    GAME_WIDTH / 2 - ctx.measureText(`Score: ${score}`).width / 2,
    GAME_HEIGHT / 2 + 10,
  );
  ctx.fillText(
    "Press Space to Restart",
    GAME_WIDTH / 2 - ctx.measureText("Press Space to Restart").width / 2,
    GAME_HEIGHT / 2 + 40,
  );
}

function update(deltaTime) {
  // If the game is over, do not update anything further
  if (gameOver) {
    return;
  }

  // Apply gravity to bird
  bird.velocityY += GRAVITY * deltaTime;
  bird.y += bird.velocityY * deltaTime;

  // Keep bird within top boundary
  if (bird.y < BIRD_RADIUS) {
    bird.y = BIRD_RADIUS;
    bird.velocityY = 0;
  }

  // Update pipes
  timeSinceLastPipe -= deltaTime;
  if (timeSinceLastPipe <= 0) {
    // Generate a new pipe
    // The top pipe's height can range from a minimum safe height up to (GAME_HEIGHT - ground - PIPE_GAP_HEIGHT - minimum safe height)
    const minTopPipeHeight = GAME_HEIGHT * 0.15; // Minimum 15% of game height for top pipe
    const maxTopPipeHeight = GAME_HEIGHT - GAME_HEIGHT * 0.15 - PIPE_GAP_HEIGHT; // Max top pipe height based on bottom boundary and gap
    const topPipeHeight =
      Math.random() * (maxTopPipeHeight - minTopPipeHeight) + minTopPipeHeight;

    pipes.push({
      x: GAME_WIDTH,
      topHeight: topPipeHeight,
      bottomHeight: GAME_HEIGHT - topPipeHeight - PIPE_GAP_HEIGHT,
      passed: false, // To track if the bird has passed this pipe for scoring
    });
    timeSinceLastPipe = PIPE_INTERVAL; // Reset timer for next pipe
  }

  // Move pipes and remove off-screen pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].x -= PIPE_SPEED * deltaTime;

    // Remove pipes that are completely off-screen
    if (pipes[i].x + PIPE_WIDTH < 0) {
      pipes.splice(i, 1);
    }
  }

  // Check for ground collision
  if (bird.y + BIRD_RADIUS > GAME_HEIGHT - GROUND_HEIGHT) {
    bird.y = GAME_HEIGHT - GROUND_HEIGHT - BIRD_RADIUS; // Snap bird to ground
    gameOver = true;
    gameState = "gameOver"; // Transition to game over state
    saveScore(score);
  }

  // Collision detection with pipes and scoring
  for (let i = 0; i < pipes.length; i++) {
    const p = pipes[i];

    // Check for horizontal overlap with pipe
    const horizontalOverlap =
      bird.x + BIRD_RADIUS > p.x && bird.x - BIRD_RADIUS < p.x + PIPE_WIDTH;

    // Collision with top pipe
    if (horizontalOverlap && bird.y - BIRD_RADIUS < p.topHeight) {
      gameOver = true;
      gameState = "gameOver"; // Transition to game over state
      saveScore(score);
    }

    // Collision with bottom pipe
    if (
      horizontalOverlap &&
      bird.y + BIRD_RADIUS > p.topHeight + PIPE_GAP_HEIGHT
    ) {
      gameOver = true;
      gameState = "gameOver"; // Transition to game over state
      saveScore(score);
    }

    // Check for scoring (bird passed pipe)
    // Only score if the game is not over and the bird has passed the pipe
    if (!gameOver && !p.passed && bird.x > p.x + PIPE_WIDTH) {
      score++;
      p.passed = true;
    }

    if (gameOver) break; // No need to check other pipes if collision already occurred
  }
}

function draw() {
  // Draw bird
  ctx.fillStyle = BIRD_COLOR;
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, BIRD_RADIUS, 0, Math.PI * 2);
  ctx.fill();

  // Draw pipes
  ctx.fillStyle = "green"; // Pipe color
  for (let i = 0; i < pipes.length; i++) {
    const p = pipes[i];

    // Draw top pipe
    ctx.fillRect(p.x, 0, PIPE_WIDTH, p.topHeight);

    // Draw bottom pipe
    ctx.fillRect(
      p.x,
      p.topHeight + PIPE_GAP_HEIGHT,
      PIPE_WIDTH,
      p.bottomHeight,
    );
  }

  // Draw ground
  ctx.fillStyle = GROUND_COLOR;
  ctx.fillRect(0, GAME_HEIGHT - GROUND_HEIGHT, GAME_WIDTH, GROUND_HEIGHT);

  // Optional: Draw a subtle line at the top of the ground for definition
  ctx.strokeStyle = "#6a5a4d"; // Darker brown
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, GAME_HEIGHT - GROUND_HEIGHT);
  ctx.lineTo(GAME_WIDTH, GAME_HEIGHT - GROUND_HEIGHT);
  ctx.stroke();
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30); // Top-left corner
}

// Start the game loop
requestAnimationFrame(gameLoop);
