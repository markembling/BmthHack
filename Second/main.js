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
	
	resizeCanvas();
	$(window).resize(resizeCanvas);
});