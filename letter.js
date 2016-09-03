var Letter = function(let){
	this.charac = let;
	this.appear = false;
	tis.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = Letter;

//showing _ when there is not a correct letter guesses