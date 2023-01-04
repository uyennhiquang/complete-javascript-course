'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

// Check if guess is correct
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess)
    {        
        document.querySelector('.message').textContent = "No Number!";
    }
    
    // Correct guess
    else if (guess === secretNumber)
    {
        // Reveal secret number
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = "Correct Number!";

        // Victory styling
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Update high score
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // Wrong guess
    else
    {
        // Decrease score for wrong guess; continue to subtract when score is larger than 0
        if (score > 0)
        {
            document.querySelector('.score').textContent = --score;
            
            // Tell user they have lost the game
            if (score === 0)
            {
                document.querySelector('.message').textContent = "You lost the game!";
            }
            
            // Tell user whether their guess is too high/low
            else
            {
                if (guess < secretNumber)
                {
                    document.querySelector('.message').textContent = "Too low!";
                }
                else
                {
                    document.querySelector('.message').textContent = "Too high!";
                }
            }
        }
    }
});

// Reset button
document.querySelector('.again').addEventListener('click', function() {
    // Set new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";

    // Reset current score to 20
    score = 20;
    document.querySelector('.score').textContent = score;

    // Reset guess message
    document.querySelector('.message').textContent = "Start guessing...";
    
    // Remove special styling
    document.querySelector('body').style.removeProperty('background');
    document.querySelector('.number').style.removeProperty('width');

    // Empty field
    document.querySelector('.guess').value = "";
});
