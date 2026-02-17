export default class Player {
    constructor(gameWidth, gameHeight, startX, isEnemy = false) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        
        // Position & Physics
        this.x = startX;
        this.y = gameHeight - 150; // ยืนบนพื้น
        this.width = 50;
        this.height = 100;
        this.speed = 5;
        this.color = isEnemy ? 'red' : 'cyan';
        
        // Stats (เตรียมไว้สำหรับ Part ถัดไป)
        this.hp = 100;
        this.maxHp = 100;
        this.stamina = 100;
        this.cursedEnergy = 0;
        
        // State
        this.isBlocking = false;
    }

    update(input) {
        // การเคลื่อนที่ (ซ้าย/ขวา)
        // Player 1 controls: A / D
        if (!this.isEnemy) {
            if (input.isKeyDown('KeyA')) this.x -= this.speed;
            if (input.isKeyDown('KeyD')) this.x += this.speed;
        }

        // Boundary Check (ห้ามเดินตกเวที)
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > this.gameWidth) this.x = this.gameWidth - this.width;
    }

    draw(ctx) {
        // Draw Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.ellipse(this.x + this.width/2, this.y + this.height, 20, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw Boxer (Placeholder)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw Facing direction (ตา)
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x + (this.isEnemy ? 10 : 30), this.y + 10, 10, 10);
    }
}
