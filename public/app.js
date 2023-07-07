// shuffel cards 
// keeps cards flipped 
// flip function (check for a match)
// for loop for points 
// unflip
// pop up message for end score 




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
            startGame()
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //game.flipCard(card);
        });
    });
}
// on click game starts
function startGame() {
    bgMusic();
    countdown();
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
    let timeRemaining = 100;
    timer.innerText = timeRemaining;
    gameInterval = setInterval(() => {
        timeRemaining--;
        timer.innerText = timeRemaining;
    }, 1000);
} 