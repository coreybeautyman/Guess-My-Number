'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'corrrect Number';

// document.querySelector('.number').textContent = 17;

// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 15;

let secretNumber = randomNum();

let score = 20;
let highScore = 0;

// random number function
function randomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

// message function
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// box width function
function setBoxWidth(size) {
  document.querySelector('.number').style.width = size;
}

// background colour function
function setBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

// reset the game using the 'again' button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = 20;
  setBackgroundColor('#222');
  setBoxWidth('15rem');
  document.querySelector('.number').textContent = '?';
  secretNumber = randomNum();
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   if there is no guess
  if (!guess) {
    displayMessage('NO NUMBER!🚫');
  }

  //   correct guess
  else if (guess === secretNumber) {
    displayMessage('🔥CORRECT NUMBER!✅');
    setBackgroundColor('#60b347');
    setBoxWidth('30rem');
    document.querySelector('.number').textContent = secretNumber;

    // High Score set
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  }

  // score too high or low
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'TOO HIGH!📈' : 'TOO LOW!📉');
    score--;
    document.querySelector('.score').textContent = score;
  }

  //   //   guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'TOO HIGH!📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥YOU LOST THE GAME💥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //   guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'TOO LOW!📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥YOU LOST THE GAME💥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
