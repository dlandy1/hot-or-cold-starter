
$(document).ready(function(){
	$("form").submit(function(e) {
    		e.preventDefault();
  			})
	var trials = [];
	var newGame = function(){
		$("#guessList li").remove();
		$("#feedback").text("Make your Guess!");
		$("#count").text(trials.length = 0);
	};
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	/*--- Creating Random Number ---*/
  	var numb; 
  	var creatNumber = function() {
  		numb= Math.floor((Math.random() * (100))+1);
  	};
  	creatNumber();
  	console.log(numb);
  	/*--- Guessing Function ---*/
  	var conf;
  	var guess = function() {
	  		var value = $("#userGuess").val().trim();
	  		var item = '<li>'+value+'</li>';
	  		var difference = value - numb;
	  		 if (value%1 == 0 && value <= 100 && value >= 0 && value !== "") {
	  		 	$( "#guessList").append(item);
	  		 	$("#userGuess").val(' ');
	  		 	trials.push(value);
	  		 	$("#count").text(trials.length);
	  		 	if (difference<=1 && difference >= -1 && difference !==0){
	  		 		$("#feedback").text("Almost on fire!");
	  		 	}
	  		 	else if (difference<=2 && difference >= -2 && difference !==0){
	  		 		$("#feedback").text("Very Hot");
	  		 	}
	  		 	else if (difference<=5 && difference >= -5 && difference !==0){
	  		 		$("#feedback").text("Hot");
	  		 	} else if (difference<=10 && difference >= -10 && difference !==0){
	  		 		$("#feedback").text("Warm");
	  		 	}
	  		 	else if (difference<=25 && difference >= -25 && difference !==0){
	  		 		$("#feedback").text("Luke warm");
	  		 	}
	  		 	 else if (value == numb){
	  		 		  $("#feedback").text("Correct");
	  		 		 conf = confirm("Correct...new game?");
	  		 		  if (conf === true) {
	  		 		  	newGame();
	  		 		  }
	  		 	}
	  		 	else {
	  		 		$("#feedback").text("Cold");
	  		 	}
	  	}
	  		else {
	  		$("#userGuess").val(' ');
	  		var error = alert("Put in a number 1-100");
	  		error;
	  	}
	};
	/*--- When enter key is hit guess ---*/
$("#userGuess").keydown(function(event) {
	  		if (event.which == 13){
				guess();
			}
		});
/*--- When guess button is clicked on guess---*/
$("#guessButton").mousedown(function(event){
	guess();
})
$(".new").mousedown(function(event){
	newGame();
})
});


