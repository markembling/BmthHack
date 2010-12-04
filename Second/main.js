$(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	
	function resizeCanvas() {
		canvas.attr("width", $(window).get(0).innerWidth);
		canvas.attr("height", $(window).get(0).innerHeight);
		
		context.fillRect(0, 0, canvas.width(), canvas.height());
	}
	
	resizeCanvas();
	$(window).resize(resizeCanvas);
});