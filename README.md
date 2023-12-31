# Astrology Matching Game
# Description
This is a simple card matching game themed around astrology. The game features a grid of cards with various astrology-themed images on their faces. The objective of the game is to match pairs of cards with identical images by flipping them over. The game includes a countdown timer and keeps track of the number of flips made by the player.

# How to Play
1. Click on the "Click to Start" button to initiate the game.
2. Flip two cards at a time by clicking on them.
3. If the images on the flipped cards match, they will remain visible and marked as "matched."
4. Continue flipping pairs of cards until all cards are matched or the timer runs out.
5. If all cards are matched before the timer reaches zero, the player wins. Otherwise, the game ends when the timer runs out.

# Features
Interactive card flipping and matching.
Countdown timer to add a time constraint.
Background music during the game.
Victory and game over screens with the option to restart.
Shuffle functionality to randomize the card positions at the start of each game.

# Technologies Used
* HTML
* CSS (with keyframe animations)
* JavaScript

# Dependencies
* The game uses audio files for background music and victory/game over sounds.
# How to Run
Simply open the index.html file in a web browser to play the game.

# Credits
* Background music: Jazz Happy
* Victory sound: Victory Game Classic Arcade
* Game over sound: [Game Over](../assets/audio/game over.mp3)

# Author
Miguel Angel Abadia

Feel free to modify and customize the game to suit your preferences or add additional features. Enjoy playing!





<!-- # Card-Matching
This is a card matching game the goals are to match a set of 16 cards. (Each match is given a total  points of 100.)*strech goal* You have 90 seconds to match all cards. When cards match they stay flipped over and your points increase(strech goal). 

# All photos are grabbed from Pixabay

# HTML and CSS
I started my project with creating a scoreboard to keep count of how many points in matches the player would have.(later became a stretch goal) I also included a flip count to keep track of how many flips the player is making when flipping for a match. I have included a countdown feature to be triggered when it reaches 0. Either giving you a game over or if your just in time a victory. Victory, Gameover, and Start game are all triggered similary with a start-text with their own id to trigger the proper end screen. All our cards and timer/flip counter are in a grid container to best lay out all the elements on the page. The Card Deck has 16 cards in it with 8 images total. Each card has a front and a back made with 2 divs with classes to propmt the css to create a transition roteting the card to hide one side and show the other. This took me the longets to do taking up a total of 2 days researching then trail and error. I was flummoxed by the concept and the stress of doing something this complex but knew i could do it which turned out to be very satisfactory. When i was able to do it. My next challenge was to get my back of card images just right to have them all fit in my card and have a little move when flipped over to spack some entertainment to the game. Reaching a goal that the cards had a nice transitions and look with the effects was a challenge. Once that was done the next struggle was creating javascript that allowed the cards to function properly to best reach the games goals.
# Javascript 
First getting the audio to play and the start text window to engage was a bit of a challenge to get uploaded but with some guidance and hard work found a way to make it work onto the page. I began to work on the start music which was another challenge it took me a few hours and most of class but i did it. I created a funtion that controls the music that needs some features to update the pause. I added the background music function to the start game function to be triggerd to play when the game begins. Next thing i worked on was the countdown which took me a pretty large amount of time specially with finding a way to stop it when it reaches 0. I began working on my flip card function which was a bit complex but im still dealing with its complexity. I worked on it for hours till i just stepped away and went to a new step the gameover trigger which was simple when the time hit 0 the function was triggered other functions in the work to be added. Next was my shuffle feature which was a challenge but after looking up some features online got some tips on how to create one that seemed to work on the page. Currently working on some other features like checking for a match and the victory funtion to complete the game. Check for match function was one of the complex functions that had me racking my brain hard for days everytime i would try an attempt it would have fired mismatches and continued to allow the cards to remain flipped. I was also playing around with where certain variables needed to be placed in order for the game to function more accurately. i changed how the check for match function searched for a match a few times till the function actually fired properly. After that i had trouble with the victory function firing properly which needed some adjustments with the restart function. The restart function had trouble reseting the board when it was clicked but after all the searching it was a simple fix by adding a for each on the restart function. which game me the fix needed for a proper output.

# Strech Goals
stretch goals-difficulty of game gets difficult. Every failed attempt cost you 50 points. matches back to back are double points. refactor code and make sure that the code isnt repetetive.  -->