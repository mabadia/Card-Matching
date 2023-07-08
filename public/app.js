//global variables
let cards = document.getElementsByClassName('card');
let cardClickCount = 0;
let gameInterval;
let cardsArray = Array.from(cards);
let matchedCards = [];

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

    startText.forEach(start => {
        start.addEventListener('click', () => {
            start.classList.remove('visible');
            startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            clickCard(card);
        });
    });
}
// on click game starts
function startGame() {
    bgMusic();
    countdown();
}
// shuffel cards 
function shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}
// background music
function bgMusic() {
    let music = new Audio('../assets/audio/jazz-happy-110855.mp3');
    music.loop = true;
    music.play();
}

// countdown timer
function countdown() {
    let timer = document.getElementById('time-remaining');
    let timeRemaining = 10;
    timer.innerText = timeRemaining;
    gameInterval = setInterval(() => {
        timeRemaining--;
        timer.innerText = timeRemaining;
        if (timeRemaining === 0) {
            gameOver();
            return clearInterval(gameInterval);
        }
    }, 1000);
}
// flip function
function clickCard(card) {
    if (cardClickCount === 0);
    cardClickCount++;
    document.getElementById('flips').innerHTML = cardClickCount;
    card.classList.add('visible');
    //if statement 
}
// (check for a match)
// unflip
//victory funtion
// when game ends
function gameOver() {
    document.getElementById('gameover').classList.add('visible');
}
shuffleCards(cardsArray);