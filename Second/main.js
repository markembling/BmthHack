$(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	var stars = [];
	
	function resizeCanvas() {
		canvas.attr("width", $(window).get(0).innerWidth);
		canvas.attr("height", $(window).get(0).innerHeight);
		
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();
		
		context.fillStyle = "#FFF";
		for (var i in stars) {
			stars[i].x = Math.random() * canvasWidth;
			stars[i].y = Math.random() * canvasHeight;
			stars[i].draw(context);
		}
	}
	
	function generateStars() {
		for (var i = 0; i < 50; i++) {
			var s = new Star();
			s.radius = Math.random() * 3;
			stars.push(s);
		}
	}
	
	generateStars();
	resizeCanvas();
	
	$(window).resize(function() { 
		resizeCanvas();
	});
	
	
	

});