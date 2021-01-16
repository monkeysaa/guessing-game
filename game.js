/* A number-guessing game. */

var randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
var counter = 1
const prompt = require('prompt-sync')();

console.log('Hiya, welcome to the guessing game!'); 
const name = prompt('What is your name? ');
console.log(`Hey there, ${name}! I'm thinking of a number between 1 and 100. 
    Can you guess it in 10 guesses or fewer? (Please enter digits.)`);
var guess = prompt('What is your first guess? ' )

for (x = 0; x < 10; x++){
    if (guess == randNum){
        if (counter == 1){
            console.log(`Astounding! You guessed it on your first try!`)
        } else {
            console.log(`You guessed it in ${counter} tries! It was ${guess}!`);
        }
        break;
    } else if (guess < randNum){
        console.log("Too low. Try again.");
        counter += 1
    } else if (guess > randNum){
        console.log("Too high. Try again.");
        counter += 1 
    } else {
        console.log(`Game done broke. Way to go, ${name}`);
        break;
    }
    var guess = prompt('What is your next guess? ' );
}

/* This while loop is broken. Error: Illegal break statement at line 45
while (guess !== randNum){
    } if (guess < randNum){
        console.log("Too low. Try again.");
        counter += 1
    } else if (guess > randNum){
        console.log("Too high. Try again.");
        counter += 1 
    } else {
        console.log(`Game done broke. Way to go, ${name}`);
        break;
    }
    var guess = prompt('What is your next guess? ' );
    if (guess == randNum){
        if (counter == 1){
            console.log(`Astounding! You guessed it on your first try!`)
        } else {
            console.log(`You guessed it in ${counter} tries! It was ${guess}!`);
        }
        break;
}
*/

