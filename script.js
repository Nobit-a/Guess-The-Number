'use strict'

let secretNumber = Math.trunc(Math.random() * 20)
let lives = 10
let highScore = 0

document.querySelector('.again').addEventListener('click', newGame)

function newGame() {

    secretNumber = Math.trunc(Math.random() * 20)
    console.log(secretNumber)

    lives = 10
    document.querySelector('.number').textContent = "?"
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = lives
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

console.log(secretNumber)
document.querySelector('.score').textContent = lives
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage("😲 No Number!")
    }


    else if (guess === secretNumber) {
        displayMessage("😊 You Won!")
        document.querySelector('body').style.backgroundColor = '#149414'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if (lives > highScore) {
            document.querySelector('.highscore').textContent = lives
        }

    }

    else if (guess < secretNumber) {
        displayMessage("😏 Too low!")
        lives--
        document.querySelector('.score').textContent = lives


    }

    else {
        displayMessage("😏 Too High!")
        lives--
        document.querySelector('.score').textContent = lives


    }

    if (lives <= 0) {
        document.querySelector('body').style.backgroundColor = '#8B0000'
        displayMessage("😢 You lost!")
    }  
})
