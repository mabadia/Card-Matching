//global variables
let cards = document.getElementsByClassName('card');
let cardClickCount = 0;
let gameInterval;
let cardsArray = Array.from(cards);
let matchedCards = [];
let music = new Audio('../assets/audio/jazz-happy-110855.mp3');
let final = new Audio('../assets/audio/game over.mp3');
let vMusic = new Audio('../assets/audio/victory-game-classic-arcade-game-116830-[AudioTrimmer.com].mp3');
let flippedCards = [];
// click to start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}
// ready function
function ready() {
    let startText = Array.from(document.getElementsByClassName('start-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
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
            clickCard(card);
            if (flippedCards.length === 2) {
                checkForMatch();
            }
        });
    });
}

// flip function
function clickCard(card) {
    if (cardClickCount === 0);
    cardClickCount++;
    document.getElementById('flips').innerHTML = cardClickCount;
    card.classList.add('visible');
    flippedCards.push(card);
}
// (check for a match) and/or unflip
function checkForMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
    const framework1 = card1.querySelector('.front-card').getAttribute('data-framework');
    const framework2 = card2.querySelector('.front-card').getAttribute('data-framework');

    if (framework1 === framework2) {
        matchedCards.push(card1);
        matchedCards.push(card2);
        flippedCards = [];

        if (matchedCards.length === cards.length) {
            clearInterval(gameInterval);
            victory();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            flippedCards = [];
        }, 1000);
    }
}

// on click game starts
function startGame() {
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
//checking for a victory
function checkForVictory() {
    return matchedCards.length === cards.length;
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
}
// restart game
function restartGame() {
    clearInterval(gameInterval);
    cardClickCount = 0;
    matchedCards = [];
    flippedCards = [];
    document.getElementById('flips').innerHTML = '0';
    document.getElementById('time-remaining').innerHTML = '90';
    document.getElementById('gameover').classList.remove('visible');
    document.getElementById('victory').classList.remove('visible');

    cardsArray.forEach(card => {
        card.classList.remove('visible');
    });

    ready();
}
shuffleCards(cardsArray);