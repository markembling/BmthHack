$(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	
	function resizeCanvas() {
		canvas.attr("width", $(window).get(0).innerWidth);
		canvas.attr("height", $(window).get(0).innerHeight);
		
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();
	}
	
	function generateStars() {
		context.fillStyle = "#FFF";
		
		for (var i = 0; i < 50; i++) {
			context.beginPath();
			context.arc(
				Math.random() * canvasWidth, 
				Math.random() * canvasHeight, 
				Math.random() * 3, 
				0, Math.PI * 2, false
			);
			context.closePath();
			context.fill();
		}
	}
	
	resizeCanvas();
	generateStars();
	
	$(window).resize(function() { 
		resizeCanvas(); 
		generateStars(); 
	});
	
	
	

});