
$(document).ready(function(){
	$("form").submit(function(e) {
    		e.preventDefault();
  			})
	var trials = [];
	var creatNumber = function() {
  		numb= Math.floor((Math.random() * (100))+1);
  	};
  	creatNumber();
  	console.log(numb);
	var newGame = function(){
		$("#guessList li").remove();
		$("#feedback").text("Make your Guess!");
		$("#count").text(trials.length = 0);
		creatNumber();
		console.log(numb);
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
  	/*--- Guessing Function ---*/
  	var conf;
  	var guess = function() {
	  		var value = $("#userGuess").val().trim();
	  		var item = '<li>'+value+'</li>';
	  		var difference = Math.abs(value - numb);
	  		 if (value%1 == 0 && value <= 100 && value >= 0 && value !== "") {
	  		 	$( "#guessList").append(item);
	  		 	trials.push(value);
	  		 	$("#count").text(trials.length);
	  		 	if (difference == 1){
	  		 		$("#feedback").text("Almost on fire!");
	  		 	}
	  		 	else if (difference ==2){
	  		 		$("#feedback").text("Very Hot");
	  		 	}
	  		 	else if (difference <= 5 && difference !==0){
	  		 		$("#feedback").text("Hot");
	  		 	} else if (difference<=10 && difference !==0){
	  		 		$("#feedback").text("Warm");
	  		 	}
	  		 	else if (difference<=25 && difference !==0){
	  		 		$("#feedback").text("Luke warm");
	  		 	}
	  		 	else if (difference<=35 && difference !==0){
	  		 		$("#feedback").text("Cold");
	  		 	}
	  		 	else if (difference<=50 && difference !==0){
	  		 		$("#feedback").text("Very Cold");
	  		 	}
	  		 	else if (difference>50 && difference !==0){
	  		 		$("#feedback").text("Ice Cold");
	  		 	}
	  		 	 else if (value == numb){
	  		 		  $("#feedback").text("Correct");
	  		 		 conf = confirm("Correct...new game?");
	  		 		  if (conf === true) {
	  		 		  	newGame();
	  		 		  }
	  		 	}
	  	}
	  		else {
	  		var error = alert("Put in a number 1-100");
	  		error;
	  	}
	};
	/*--- When enter key is hit guess ---*/
$("#userGuess").keydown(function(event) {
	  		if (event.which == 13){
				guess();
		$("#userGuess").val("").select();
		return false;
			}
		});
/*--- When guess button is clicked on guess---*/
$("#guessButton").mousedown(function(event){
	guess();
	$("#userGuess").val("").select();
		return false;
})
$(".new").mousedown(function(event){
	newGame();
})
});


