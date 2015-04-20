var clickedTime; var createdTime; var reactionTime;

function getRandomColor() {
	// Gets a random hex colour
	 var letters = '0123456789ABCDEF'.split('');
	 var color = '#';
	 for (var i = 0; i < 6; i++ ) {
	 color += letters[Math.round(Math.random() * 15)];
	 }
	 return color;
}
			
/* function getRandomShape() {
		// Gets a circle or a square
		if (Math.random()>0.5) {		
			$("#box").css("borderRadius", "100px");		
		} else {				
			$("#box").css("borderRadius", "0");
} */
		
/* function getRandomPosition() {
		// Chooses random position of shapes
		 var top=Math.random();
			
		 top=top*300;
			
		 var left=Math.random();
			
		 left=left*500;
			
		 $("#box").style.top=top+"px";
			
		 $("#box").style.left=left+"px";
		} */

function makeBox() {
	 	
	 	 var time=Math.random();
	 	
	 	 time=time*5000;
	 	
			 setTimeout(function() {
				
				 if (Math.random()>0.5) {
					$("#box").css("borderRadius","100px");
				 } else {
					$("#box").css("borderRadius","0");
				 }
					
				 var top=Math.random();
					
				 top=top*300;
					
				 var left=Math.random();
					
				 left=left*500;
					
				 $("#box").css("marginTop", top+"px");
				 $("#box").css("marginLeft", left+"px");
				
				 $("#box").css("backgroundColor", getRandomColor());
				 $("#box").css("display","block");				 
					
				 createdTime=Date.now();
			
			 }, time);   // end setTimeout
	 	
}

// get reaction time when shape is clicked
$("#box").on("click", function() {
	 	
	 	 clickedTime=Date.now();
		 	
	 	 reactionTime=(clickedTime-createdTime)/1000;
		 	
		 $("#time").html(reactionTime);
		 $(this).css("display","none");
	 	
	 	 makeBox();
});
	 	
makeBox();