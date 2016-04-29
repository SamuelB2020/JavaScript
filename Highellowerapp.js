// Higher or Lower Game- A Simple Guessing Game 
// Code Written by Samuel Bell
var boscode = require('boscode'); 
var newNumber; 
var anotherNumber;
var Yes = 0;
var correct = 1;
var correctGuesses = 0;
function createGame() {
    newNumber = Math.floor((Math.random() * 1000) + 1);
    anotherNumber = Math.floor((Math.random() * 1000) + 1);
    boscode.display("Is a mystery number higher or lower than "+ newNumber+ "?");
}
boscode.display("Type 'y' or 'yes' to begin");
var userBegins = boscode.get();

if(userBegins == 'y' || userBegins == 'yes' || userBegins == 'Yes') {
Yes = 1;
}
if(Yes == 1){
while(correct == 1){
createGame();
var userResponse= boscode.get();
check(userResponse);
}
}
function check(predic) {
    if(predic == 'h' || predic == 'H' || predic == 'higher' || predic == 'Higher') {
        boscode.display('You guessed higher!');
        if(newNumber < anotherNumber) {
            boscode.display('You win !');
            correctGuesses++
        }
        else {
            boscode.display('Sorry you lose');
            correct = 0;
            boscode.display("You guessed correctly "+correctGuesses+" times!");
        }
    }
    if(predic =='l' || predic =='lower' || predic =='L' || predic =='Lower') {
        boscode.display('You guessed lower!');
        if(newNumber > anotherNumber){
            boscode.display('You Win!');
            correctGuesses++
        }
        else {
            boscode.display('Sorry you lose')
            correct = 0
            boscode.display("You guessed correctly "+correctGuesses+" times!");
        }
    }
}
boscode.display("The number was "+anotherNumber);
