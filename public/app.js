//global variables
let cardClickCount = 0;
let gameInterval;
let matchedCards = [];
let flippedCards = [];
let cardsArray = [];
let music = new Audio('../assets/audio/jazz-happy-110855.mp3');
let final = new Audio('../assets/audio/game over.mp3');
let vMusic = new Audio('../assets/audio/victory-game-classic-arcade-game-116830-[AudioTrimmer.com].mp3');

// click to start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}
// ready function
function ready() {
    let cards = Array.from(document.getElementsByClassName('card'));
    let startText = Array.from(document.getElementsByClassName('start-text'));
    let restartButtons = Array.from(document.getElementsByClassName('restart'));

    startText.forEach(start => {
        start.addEventListener('click', () => {
            start.classList.remove('visible');
            startGame();
        });
    });

    restartButtons.forEach(restart => {
        restart.addEventListener('click', () => {
            restartGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (flippedCards.length < 2 && !card.classList.contains('visible') && !card.classList.contains('matched')) {
                clickCard(card);
                if (flippedCards.length === 2) {
                    checkForMatch();
                }
            }
        });
    });
}

// flip function
function clickCard(card) {
    card.classList.add('visible');
    flippedCards.push(card);
    cardClickCount++; 
    document.getElementById('flips').textContent = cardClickCount;
}
// Check for a match and unflip
function checkForMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
    const img1 = card1.querySelector('.front-card img').src;
    const img2 = card2.querySelector('.front-card img').src;

    if (img1 === img2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (checkForVictory()) {
            clearInterval(gameInterval);
            victory();
        }
    } else {
        // Cards do not match
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            flippedCards = [];
        }, 1000);
    }
}

// Check for victory
function checkForVictory() {
    return matchedCards.length === cardsArray.length;
}
// on click game starts
function startGame() {
    cardsArray = Array.from(document.getElementsByClassName('card'));
    shuffleCards(cardsArray);
    bgMusic();
    countdown();
}
// shuffel cards // Fisher-Yates Shuffle Algorithm.
function shuffleCards(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randomIndex].style.order = i;
        cardsArray[i].style.order = randomIndex;
    }
}
// background music
function bgMusic() {
    final.pause();
    music.loop = true;
    music.play();
}

// countdown timer
function countdown() {
    let timer = document.getElementById('time-remaining');
    let timeRemaining = 90;
    timer.innerText = timeRemaining;
    gameInterval = setInterval(() => {
        timeRemaining--;
        timer.innerText = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(gameInterval);
            gameOver();
        }
    }, 1000);
}

//victory funtion
function victory() {
    document.getElementById('victory').classList.add('visible');
    music.pause();
    vMusic.loop = true;
    vMusic.play();
}
// when game ends
function gameOver() {
    document.getElementById('gameover').classList.add('visible');
    music.pause();
    final.play();
    const restartButton = document.querySelector('#gameover .restart');
    restartButton.addEventListener('click', restartGame);
}
// restart game
function restartGame() {
    clearInterval(gameInterval);
    cardClickCount = 0;
    matchedCards = [];
    flippedCards = [];
    document.getElementById('flips').textContent = '0';
    document.getElementById('time-remaining').textContent = '90';
    document.getElementById('gameover').classList.remove('visible');
    document.getElementById('victory').classList.remove('visible');

    cardsArray.forEach(card => {
        card.classList.remove('visible');
        card.classList.remove('matched');
    });

    ready();
    vMusic.pause();
    vMusic.currentTime = 0;
    music.play();
}
shuffleCards(cardsArray);