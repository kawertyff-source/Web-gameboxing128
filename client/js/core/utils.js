// client/js/core/utils.js
export function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    );
}

export function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    document.querySelector('.timer').innerHTML = 'KO';
    
    const displayResult = document.createElement('div');
    displayResult.style.position = 'absolute';
    displayResult.style.color = 'white';
    displayResult.style.fontSize = '4rem';
    displayResult.style.top = '40%';
    displayResult.style.left = '50%';
    displayResult.style.transform = 'translate(-50%, -50%)';
    displayResult.style.textShadow = '0 0 10px red';

    if (player.health === enemy.health) {
        displayResult.innerHTML = 'DRAW';
    } else if (player.health > enemy.health) {
        displayResult.innerHTML = 'PLAYER 1 WINS';
    } else {
        displayResult.innerHTML = 'CURSED SPIRIT WINS';
    }
    
    document.body.appendChild(displayResult);
}
