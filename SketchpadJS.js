/*var question = prompt("Would you like to build a grid?")
	if(question === "yes"){
		alert("Great!!");
	}else if(question === "no"){
		alert("That's to bad");
	}else{
		alert("That is a strange answer");
	}
*/



$(document).ready(function(){
	var numberOfSquares = prompt("What size grid would you like? Enter 3 for 3x3, 4 for 4x4, etc");

	for(var i = 1; i <= numberOfSquares*(numberOfSquares-1); i++){
		$(".container").append("<div class = grid></div> ")
		if(i <= numberOfSquares){
			$(".container").append("<div class = grid2></div> ")
		};
	};

	//$(".container").width(numberOfSquares*100);   This code will change container size to fit fixed grid box size
	$(".grid").width((1/numberOfSquares)*(1000-(10*numberOfSquares)));
	$(".grid2").width((1/numberOfSquares)*(1000-(10*numberOfSquares)));
	$(".grid").height((1/numberOfSquares)*(500-(10*numberOfSquares)));
	$(".grid2").height((1/numberOfSquares)*(500-(10*numberOfSquares)));
	
	$("#pencolor").click(function(){
		var pcolor = prompt("What color would you like to change your picture to?");
		$(".colorchange").css("background-color", pcolor);
	});
	
	
	//This code will change box to different color (specified in CSS)
	$(".grid").on("mouseover", function(){
		$(this).addClass("colorchange");
	});
	
	$(".grid2").on("mouseover", function(){
	$(this).addClass("colorchange");
	});
	

	
	//This is code to just have box fade when hovered over
	/*$(".grid").hover(function(){
		$(this).fadeTo("slow", 0.5);
		});*/
	
	//This is code to have fade in and out
	/*$(".grid").mouseover(function(){
		$(this).fadeTo("slow", 0.5);
	});
	
	$(".grid").mouseout(function(){
		$(this).fadeTo("slow", 1.0);
	});*/
	
	$("#clear").click(function(){
		$(".grid").removeClass("colorchange");
	});
	
	$("#clear").click(function(){
		$(".grid2").removeClass("colorchange");
	});
	
	$("#refresh").click(function(){
		location.reload();
	});

});

