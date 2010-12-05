$(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	var stars = [];
	
	function resizeCanvas() {
		canvas.attr("width", $(window).width());
		canvas.attr("height", $(window).height());
		
		var oldCanvasWidth = canvasWidth;
		var oldCanvasHeight = canvasHeight;
		
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();
		
		var xRatio = canvasWidth / oldCanvasWidth;
		var yRatio = canvasHeight / oldCanvasHeight;
		
		for (var i in stars) {		
			stars[i].x *= xRatio;
			stars[i].y *= yRatio;
			stars[i].draw(context);
		}
	}
	
	function generateStars() {
		for (var i = 0; i < 50; i++) {
			var s = new Star();
			s.x = Math.random() * canvasWidth;
			s.y = Math.random() * canvasHeight;
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