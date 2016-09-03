var prompt = require('prompt');
var Word = require('./word.js');
var gameWords = require('./game.js');
prompt.start();

game = {
	wordBank : gameWords.game.wordBank, //["heart and soul", "physical touch"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //object for word
	//start game needs to take word param
	startGame : function (wrd){
		//guesses
		this.resetGuessesRemaining ();

		//random word from array
		this.currentWrd = new Word(this.wordBank[math.floor(math.random()*this.wordBank.length)]);

		this.currentWrd.getLets();

		this.keepPromptingUser();

	},
	resetGuessesRemaining : function(){
		this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;
		prompt.get(['guessLetter'], function(err,result){

		});
	}
}

startGame()