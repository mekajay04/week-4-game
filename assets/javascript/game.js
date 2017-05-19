// JavaScript Document
$(document).ready(function () {

	var magicNumber = Math.floor(Math.random() * 100) + 1;
	

	$("#magicNumber").text(magicNumber);

	var counter = 0;
	var wins = 0;
	var losses = 0;
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;
	
//Assign each crystal to a random number
	
	function assignRandomNumbers() {
		
		crystal1 = Math.floor(Math.random() * 25) + 1;
		crystal2 = Math.floor(Math.random() * 25) + 1;
		crystal3 = Math.floor(Math.random() * 25) + 1;
		crystal4 = Math.floor(Math.random() * 25) + 1;
	}
	
	
	
//	CALL FUNCTION
	
	
	assignRandomNumbers();
	
//	MAKE A FUNCTION FOR EACH CRYSTAL. WHEN CLICKED ADD THE VALUE OF THE CRYSTAL TO THE COUNTER WHICH IS INITIALLY SET TO 0
	
	$("#redCrystal").on("click", function () {

			
			$("#userguess").text(counter += crystal1);
			console.log(crystal1);
		
		if (counter === magicNumber) {
		alert("You Win");
		wins++;
		$("#wins").text(wins);
	}
	
	else if ( counter >= magicNumber) {
		alert("You Lose");
		losses++;
		$("#losses").text(losses);
	}
	
	});
		
	$("#blueCrystal").on("click", function () {

			
			$("#userguess").text(counter += crystal2);
			console.log(crystal2);
	
		if (counter === magicNumber) {
		alert("You Win");
		wins++;
		$("#wins").text(wins);
	}
	
	else if ( counter >= magicNumber) {
		alert("You Lose");
		losses++;
		$("#losses").text(losses);
	}
	
		});
	
	$("#blackCrystal").on("click", function () {

			
			$("#userguess").text(counter += crystal2);
			console.log(crystal2);
	
		if (counter === magicNumber) {
		alert("You Win");
		wins++;
		$("#wins").text(wins);
	}
	
	else if ( counter >= magicNumber) {
		alert("You Lose");
		losses++;
		$("#losses").text(losses);
	}
	
		});
	
	$("#rainbowCrystal").on("click", function () {

			
			$("#userguess").text(counter += crystal2);
			console.log(crystal2);
	
		

	if (counter === magicNumber) {
		alert("You Win");
		wins++;
		$("#wins").text(wins);
	}
	
	else if ( counter >= magicNumber) {
		alert("You Lose");
		losses++;
		$("#losses").text(losses);
	}
		
		});



	});






//		var Crystal2 = Math.floor(Math.random() *25) +1;
//	

//	$("#blackCrystal").on("click", function() {
//	
//	var Crystal3 = Math.floor(Math.random() *25) +1;
//$("#userguess").text(Crystal3);
//	console.log(Crystal3);	
//	
//	
//});
//	
//	$("#rainbowCrystal").on("click", function() {
//	
//	var Crystal4 = Math.floor(Math.random() *25) +1;
//$("#userguess").text(Crystal);
//	console.log(Crystal);	
//	







//	
//	});