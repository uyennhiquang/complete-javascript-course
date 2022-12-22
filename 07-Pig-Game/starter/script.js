'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Set styling back to normal; player--0 is the active player, player--1 is not
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');

  // Loop that resets each player's visible scores
  for (let i = 0; i < scores.length; i++) {
    // Visible overall scores to 0
    document.getElementById(`score--${i}`).textContent = 0;

    // Visible scores held to 0
    document.getElementById(`current--${i}`).textContent = 0;
  }
};
init();

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchActivePlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionarlity
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    // If true, switch to next player
    else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchActivePlayer();
    }
  }
});

// Hold points
btnHold.addEventListener('click', function () {
  // State variable
  if (playing) {
    // 1. Add current player's score to their score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.toggle('hidden');
      document.querySelector('.player--active').classList.add('player--winner');
      document
        .querySelector('.player--active')
        .classList.remove('player--active');
    } else {
      // 3. Switch active player
      switchActivePlayer();
    }
  }
});

// Reset game
btnNew.addEventListener('click', init);
