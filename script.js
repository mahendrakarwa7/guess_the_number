// script.js

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');
    const character = document.getElementById('character');
    const attemptsDisplay = document.getElementById('attempts');

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = '🎉 Woohoo! You got it!';
        message.style.color = 'green';
        character.textContent = '😁';
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
        launchConfetti();
    } else {
        let difference = Math.abs(userGuess - randomNumber);

        if (difference <= 5) {
            message.textContent = '🔥 Super close!';
            message.style.color = 'orange';
            character.textContent = '😅';
        } else if (difference <= 15) {
            message.textContent = '🙂 Getting warmer!';
            message.style.color = 'yellow';
            character.textContent = '😊';
        } else {
            message.textContent = '🥶 Too far off!';
            message.style.color = 'blue';
            character.textContent = '😨';
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    }
}

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';
    // Confetti animation logic here (could use a library or create a simple CSS animation)
}
