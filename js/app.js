
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	var numb; 
  	var creatNumber = function() {
  		numb= Math.floor((Math.random() * (100))+1);
  		numb= +numb;
  	};
  	creatNumber();
  	console.log(numb);
  	var guess = function(value) {
	  		var value = $("#userGuess").val().trim();
	  		var item = '<li>'+value+'</li>';
	  		 if (value%1 ==0 && value <= 100 && value >= 0 && value !== "") {
	  		 	$( "#guessList").append(item);
	  		 	$("input").val('');
	  	}
	  		else {
	  		$("input").val('');
	  		$("form").submit(function(e) {
    		e.preventDefault();
  			});
	  		var error = alert("Put in a number 1-100");
	  		error;
	  	}
	};
$("#userGuess").keydown(function(event) {
	  		if (event.which == 13){
				guess();
			}
		});
$("#guessButton").mousedown(function(event){
	guess();
})
});


