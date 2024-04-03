'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //  set the range 
let score = 20; // set the max score
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // when no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No NUMBER!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

    } // dry (dont repeat yourself code structure)
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High📈' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
            score;
        } else {
            document.querySelector('.message').textContent = 'You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    } // when number is larger than the actual number
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!📈';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         score;
    //     } else {

    //     }
    // }
    // //when number is smaller than the actual number
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game !';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

