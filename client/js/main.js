import InputManager from './core/inputManager.js';
import Player from './entities/player.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Set resolution match CSS
    canvas.width = 800;
    canvas.height = 600;

    // Initialize Systems
    const input = new InputManager();
    
    // Create Entities
    const player1 = new Player(canvas.width, canvas.height, 100, false);
    const player2 = new Player(canvas.width, canvas.height, 600, true); // Enemy dummy for now
    player2.isEnemy = true; // Flag for differentiation

    // Game Loop Variables
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        // 1. Clear Screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. Draw Background (เวทีมวยชั่วคราว)
        ctx.fillStyle = '#222';
        ctx.fillRect(0, 450, canvas.width, 150); // พื้นเวที
        
        // 3. Update Entities
        player1.update(input);
        // player2.update(); // AI จะมาใน Part หน้า

        // 4. Draw Entities
        player1.draw(ctx);
        player2.draw(ctx);

        // Loop
        requestAnimationFrame(animate);
    }

    animate(0);
});
