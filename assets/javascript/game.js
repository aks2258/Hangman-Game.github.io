var wordArray = ["morbo", "fry", "leela", "hermes"];
var currentWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


function startGame () {
	currentWord = wordArray[Math.floor(Math.random()*wordArray.length)];
	lettersInWord = currentWord.split("");
	numBlanks = lettersInWord.length;

	guessesLeft = 9;
	wrongLetters = [];
	blankAndSuccesses = [];

	for (var i = 0; i<numBlanks; i++){
		blankAndSuccesses.push("_");
	}

	document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	console.log(currentWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blankAndSuccesses);
}

function checkLetters(letter){
	var isLetterInWord = false;

	for (var i = 0; i<numBlanks; i++){
		if(currentWord[i]==letter){
			isLetterInWord = true;
		}
	}

	if(isLetterInWord){
		for (var i=0; i<numBlanks; i++){
			if(currentWord[i]==letter){
				blankAndSuccesses[i]=letter;
				}
			}
		}
		else{
			wrongLetters.push(letter);
			guessesLeft--;
		}
		console.log(blankAndSuccesses);
	}

function roundComplete(){
	console.log("Win Count: "+winCount+" | Loss Count: "+lossCount+ " | Guesses Left: "+guessesLeft);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");

	if(lettersInWord.toString()==blankAndSuccesses.toString()){
		winCount++;
		alert("You Won!");

		document.getElementById("winCounter").innerHTML = winCount;
		startGame();
	}
	else if(guessesLeft == 0){
		lossCount++;
		alert("You Lost!");
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}
}

startGame();

document.onkeyup = function (event){
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(lettersGuessed)
	roundComplete();
	console.log(lettersGuessed);
}