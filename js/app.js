
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	var guess = function(value) {
	  	$("input").keydown(function(event) {
	  		var value = $("#userGuess").val().trim();
	  		var item = '<li>'+value+'</li>';
	  		if (event.keyCode == 13){
	  		 if (value%1 ==0 && value <= 100 && value.length > 0) {
	  		 	$( "#guessList").append(item);
	  		 	$("input").val('');
	  	}
	  		else {
	  		var error = alert("Put in a number 1-100");
	  		error;
	  	};
	  }
	  })
	   $("#guessButton").mousedown(function(event){
	   		var value = $("#userGuess").val().trim();
	  		var item = '<li>'+value+'</li>';
	  		if (value%1 ==0){
	  		 	$( "#guessList").append(item);
	  		 	$("input").val('');
	  		 };
	  	})
	}
guess();
});


