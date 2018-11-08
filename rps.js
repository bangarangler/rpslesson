var computerChoices = ["r","p","s"];
// creates an array that lists out all of the options (rock,paper,scissors

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
		// determines which key was pressed
		var userGuess = event.key;
		// randomly chooses a choice from the options array. computers choice
		//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoice
		// only run the following code block if the user presses r or p or s.
		if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
				// alert the userGuess and comuterGuess
				alert("user guess: " + userGuess);
				alert("computer guess: " + computerGuess);

		}
};









































document.onkeyup = function() {
		alert("pressed a button");
};

