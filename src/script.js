
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let bird = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    gravity: 0.6,
    lift: -10,
    velocity: 0
};

let pipes = [];
let score = 0;
let frameCount = 0;
let gameState = 'start'; // 'start', 'playing', 'gameOver'

const pipeWidth = 40;
const pipeGap = 100;

// --- Game States ---

function startGame() {
    bird = {
        x: 50,
        y: 150,
        width: 20,
        height: 20,
        gravity: 0.6,
        lift: -10,
        velocity: 0
    };
    pipes = [];
    score = 0;
    frameCount = 0;
    gameState = 'playing';
}

function gameOver() {
    gameState = 'gameOver';
}

// --- Drawing ---

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(bird.x + bird.width / 2, bird.y + bird.height / 2, bird.width / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw beak
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(bird.x + bird.width, bird.y + bird.height / 2);
    ctx.lineTo(bird.x + bird.width + 10, bird.y + bird.height / 2 - 5);
    ctx.lineTo(bird.x + bird.width + 10, bird.y + bird.height / 2 + 5);
    ctx.closePath();
    ctx.fill();

    // Draw eye
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(bird.x + bird.width / 2 + 5, bird.y + bird.height / 2 - 5, 2, 0, Math.PI * 2);
    ctx.fill();


    // Draw pipes
    for (let i = 0; i < pipes.length; i++) {
        // Top pipe
        ctx.fillStyle = 'green';
        ctx.fillRect(pipes[i].x, 0, pipeWidth, pipes[i].top);
        ctx.strokeStyle = 'darkgreen';
        ctx.lineWidth = 3;
        ctx.strokeRect(pipes[i].x, 0, pipeWidth, pipes[i].top);

        // Bottom pipe
        ctx.fillRect(pipes[i].x, canvas.height - pipes[i].bottom, pipeWidth, pipes[i].bottom);
        ctx.strokeRect(pipes[i].x, canvas.height - pipes[i].bottom, pipeWidth, pipes[i].bottom);
    }

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px "Press Start 2P"';
    ctx.textAlign = 'left';
    ctx.fillText('Score: ' + score, 10, 30);

    if (gameState === 'start') {
        ctx.fillStyle = 'white';
        ctx.font = '20px "Press Start 2P"';
        ctx.textAlign = 'center';
        ctx.fillText('Press Space to Start', canvas.width / 2, canvas.height / 2);
    }

    if (gameState === 'gameOver') {
        ctx.fillStyle = 'white';
        ctx.font = '30px "Press Start 2P"';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '20px "Press Start 2P"';
        ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillText('Press Space to Restart', canvas.width / 2, canvas.height / 2 + 60);
    }
}

// --- Game Logic ---

function update() {
    if (gameState !== 'playing') {
        return;
    }

    // Bird physics
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Pipe generation
    frameCount++;
    if (frameCount % 90 === 0) {
        const top = Math.random() * (canvas.height - pipeGap - 100) + 50;
        const bottom = canvas.height - top - pipeGap;
        pipes.push({ x: canvas.width, top: top, bottom: bottom, passed: false });
    }

    // Move pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].x -= 2;

        // Remove off-screen pipes
        if (pipes[i].x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }
    }

    // Collision detection
    // Ground collision
    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameOver();
    }

    // Pipe collision
    for (let i = 0; i < pipes.length; i++) {
        if (
            bird.x < pipes[i].x + pipeWidth &&
            bird.x + bird.width > pipes[i].x &&
            (bird.y < pipes[i].top || bird.y + bird.height > canvas.height - pipes[i].bottom)
        ) {
            gameOver();
        }
    }
    
    // Score
    for (let i = 0; i < pipes.length; i++) {
        if (pipes[i].x + pipeWidth < bird.x && !pipes[i].passed) {
            score++;
            pipes[i].passed = true;
        }
    }
}

// --- Game Loop ---

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// --- Event Listeners ---

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (gameState === 'playing') {
            bird.velocity = bird.lift;
        } else if (gameState === 'start' || gameState === 'gameOver') {
            startGame();
        }
    }
});

gameLoop();
