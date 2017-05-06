$(document).ready(function() {

// ====================RESET WINS/LOSSES ON PAGE READY================================================

	console.log("test");
	var wins = 0;
	var losses = 0;
	var puppyOne;
	var puppyTwo;
	var puppyThree;
	var puppyFour;
	var targetNumber;
	var totalScore;
	console.log(puppyFour);
	$('#number-of-wins').text("Wins: " + wins);
	$('#number-of-losses').text("Losses: " + losses);
	newGame();

//=====================CLICK EVENT LISTENERS==========================================================

	$('.puppy-image1').on('click', function() {
	totalScore += puppyOne;
	$('#total-score').text(totalScore);
	checkScore();
	});

	$('.puppy-image2').on('click', function() {
	totalScore += puppyTwo;
	$('#total-score').text(totalScore);
	checkScore();
	});

	$('.puppy-image3').on('click', function() {
	totalScore += puppyThree;
	$('#total-score').text(totalScore);
	checkScore();
	});

	$('.puppy-image4').on('click', function() {
	totalScore += puppyFour;
	$('#total-score').text(totalScore);
	checkScore();
	});

// ====================FUNCTIONS======================================================================

	function newGame() {
	
	puppyOne = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	puppyTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	puppyThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	puppyFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	totalScore = 0;
	console.log("test inside newGame()");
	console.log(puppyOne);
	console.log(puppyTwo);
	console.log(puppyThree);
	console.log(puppyFour);
	console.log(targetNumber);
	
	$('#target-number').text(targetNumber);
	$('#total-score').text(totalScore);
	};

	function checkScore() {

	if (totalScore === targetNumber) {
		$('#you-win-lose').text("You Win!!!");
		wins++;
		$('#number-of-wins').text("Wins: " + wins);
		newGame();
		}

	else if (totalScore > targetNumber) {
		$('#you-win-lose').text("You Lose!!!");
		losses++;
		$('#number-of-losses').text("Losses: " + losses);
		newGame();
		}
	};
});
















