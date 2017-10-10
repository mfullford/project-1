$(document).ready(function() {


		// Creates an image for the cursor
	$("body").css('cursor', 'url(images/hand.png) 6 6, auto');

		// To randomize the puppies I used math random and math round
		function random(min,max){
 	 		return Math.round(Math.random() * (max-min) + min);
 		}

 		//Used math round and math random to give the two different puppy options

		function setBG(){
			if (Math.round(Math.random())){
				return "http://www.pholody.com/img/running_dog.png";
			 } else {
 	    		return "https://s-media-cache-ak0.pinimg.com/originals/30/82/d0/3082d0250b91ff5dc176160101f744e4.jpg";																								  } 
			 	}	
		// Create a function to drop the puppies - need to specify size and velocity so that they drop at different times and don't look exactly the same.

		function dropBox(){																								
			var length = random(100, ($(".game").width() - 100));
			var velocity = random(8000, 12000);
			var size = random(100, 120);
			var thisBox = $("<div/>", {
			class: "box",
			style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
 			});

	  
		// Within the math round and math ranoom, we created 2 different 'boxes', here we style those boxes so they actually look like puppies.
		thisBox.data("test", Math.round(Math.random()));
			if(thisBox.data("test")){
				thisBox.css({"background": "url('http://www.pholody.com/img/running_dog.png')", "background-size":"contain", "background-repeat":"no-repeat"});
			} else {
				thisBox.css({"background": "url('https://s-media-cache-ak0.pinimg.com/originals/30/82/d0/3082d0250b91ff5dc176160101f744e4.jpg')", "background-size":"contain", "background-repeat":"no-repeat"});
			} 
	  
		//Append the 'boxes' or puppies to the actual game
		$(".game").append(thisBox);
  
		//Start for animation
		setTimeout(function(){
		thisBox.addClass("move");
		}, random(0, 6000) );
  
		//Remove this object when you click - found webkit online
		thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
               function(event) {
    			$(this).remove();
	  			});
				
		}
		
		for (i = 0; i < 10; i++) { 
			dropBox();
		}
		// When you click the "boxes", add exponentially to the score
		var currentScore = 0;

		$(document).on('click', '.box', function(){
  			if($(this).data("test")){
				currentScore++;
			} else {
				currentScore++;
			}
   			$(".score").html(currentScore);
  			$(this).remove();
  		// Add audio function (audio file has been attached) when a "box" aka puppy is clicked
  			audio.play();
 		});

		var runGame = setInterval(function(){
                 for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 6000);

	 //   // basic timer layout
		// 	function startTimer(duration, display) {
		// 	    var timer = duration, minutes, seconds;
		// 	    setInterval(function () {
		// 	        minutes = parseInt(timer / 60, 10);
		// 	        seconds = parseInt(timer % 60, 10);

		// 	        minutes = minutes < 10 ? "0" + minutes : minutes;
		// 	        seconds = seconds < 10 ? "0" + seconds : seconds;

		// 	        display.text(minutes + ":" + seconds);
		// 	        	// need to cap it at 30 secs
		// 	        if (--timer < 0) {
		// 	        	alert ("Sorry out of time! Hit that reset button to play again!")
		// // 	        	if(window.prompt('Out of time! Check out the high scores at','the Scoreboard Page'))
  // 		// location.href='https://mfullford.github.io/project1/scoreBoard.html';
		// 	            timer = duration;
		// 	        }
		// 	    }, 1000);
		// 	}
		// 		// 30 seconds per round
		// 	jQuery(function ($) {
		// 	    var thirtySeconds = 30 * 1,
		// 	        display = $('#counter');
		// 	        console.log("hey this is counting")
		// 	    startTimer(thirtySeconds, display);
		// 	});


		// Created a form for users to submit their high scores

		// $(document).ready(function() {
		// 	$("div#form1").append(
		// 		// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
		// 		$("<h3/>").text("Player Info"), $("<p/>").text("Fill out the info bellow to save your high score!"), $("<form/>", {
		// 		action: '#',
		// 		method: '#'
		// 		}).append(
		// 		// Create <form> Tag and Appending in HTML Div form1.
		// 		$("<input/>", {
		// 		type: 'text',
		// 		id: 'vname',
		// 		name: 'name',
		// 		placeholder: 'Your Name'
		// 		}), // Creating Input Element With Attribute.
		// 		$("<input/>", {
		// 		type: 'text',
		// 		id: 'vemail',
		// 		name: 'email',
		// 		placeholder: 'Your Highscore'
		// 		}), $("<br/>"), $("<input/>", {
		// 		type: 'submit',
		// 		id: 'submit',
		// 		value: 'Submit'
		// 	})))
		// });

		// The timer resets automatically, but the score doesn't so I needed to add a restart button
		var reset = document.querySelector('.reset');
		 	console.log(reset);
		 	function resetGame () {
		  	reset.addEventListener("click", function() {
		    location.reload();
		    // alert("clicked reset button");
		  });
		  
		 }
		 resetGame();

		 // This is the audio link that is used on click

		 var audio=document.getElementsByTagName("audio")[0];

});