var Letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.lets = []; //letter objects
	this.found = false;
	this.getLets = function(){
		for(var i = 0; i < this.word.length; i++){
			this.lets.push(new Letter(this.word[i]));
		}
	};

	//found
	this.didWeFindTheWord = function(){
		this.found = this.lets.every(function(curLet){
			return curLet.appear;
		});
		return this.found;
	};

	this.checkIfLEtterFound = function(guessLetter){
		var whatToReturn = 0;

		for(var i = 0; i < this.lets.length; i++){
			idf (this.let[i].charac == guessLetter){
				this.lets[i].appear = true;
			}
		}
	}
}