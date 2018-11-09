var computerChoices = ["r","p","s"];
// creates an array that lists out all of the options (rock,paper,scissors

// Creating variables to hold the number of wins, loses, ties,etc
var wins = 0;
var losses = 0;
var ties = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
		// determines which key was pressed
		var userGuess = event.key;
		// randomly chooses a choice from the options array. computers choice
		//var randomNumber = Math.random() * computerChoices.length;
		//var randomInt = Math.floor(randomNumber);
		//var computerGuess = computerChoices[randomInt];
		// Math.random();  random decimal number between 0 and 1
		// Math.floor(); rounds a decimal number down to an integer.
		// Math.floor(Math.random() * 3); javascript runs the inside method/function first.

		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		// only run the following code block if the user presses r or p or s.
		if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

				// If we choose rock and the computer guesses scissors, increment our wins variable.
				if ((userGuess === "r") && (computerGuess === "s")) {
						wins++;
				}

				// If we choose rock and the computer guesses paper, increment our losses variable.
				else if ((userGuess === "r") && (computerGuess === "p")) {
						losses++;
				}
				else if ((userGuess === "s") && (computerGuess === "p")) {
						wins++;
				}
				// If we choose scissors and the computer guesses paper, increment our wins varibale.

				// If we choose paper and the computer guesses rock, increment our wins variable.
				else if ((userGuess === "p") && (computerGuess === "r")) {
						wins++;
				}
				// If we choose paper and the computer chooses scissors, increment our losses variable.
				else if ((userGuess === "p") && (computerGuess === "s")) {
						losses++;
				}

				// If we choose the same thing as the computer, increment our ties variable.
				else if (userGuess === computerGuess) {
						ties++;
				}

			// creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer...
				var html =
						"<p>You chose: " + userGuess + "</p>" +
						"<p>The computer chose: " + computerGuess + "</p>" +
						"<p>wins: " + wins + "</p>" +
						"<p>losses: " + losses + "</p>" +
						"<p>ties: " + ties + "</p>";

				// Set the inner HTML contents of the #game div to our html string
				document.querySelector("#game").innerHTML = html;
		} else {
				alert("Oops, you can only press 'r', 'r', or 's'. Try again please!");
		}
};

				// alert the userGuess and comuterGuess
				//alert("user guess: " + userGuess);
				//alert("computer guess: " + computerGuess);
				//document.querySelcetor("#game").innerHTML =
						//"You chose: " + userGuess + ". The computer chose: " + computerGuess;
		//}












































