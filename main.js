$(function() {
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	
	//context.fillRect(200, 40, 100, 100);
	//context.strokeRect(200, 40, 100, 100);
	
	/*context.beginPath();
	context.moveTo(40, 40);
	context.lineTo(340, 340);
	context.stroke();*/
	
	/*context.beginPath();
	// x, y, radius, start angle, end angle, anticlockwise?
	//context.arc(230, 90, 50, 0, Math.PI * 2, false);
	context.arc(230, 90, 50, 0, Math.PI, true);
	context.closePath();
	context.fill();*/
	
	/*context.fillStyle = "#BEF3FF";
	context.fillRect(200, 40, 100, 100);
	context.fillRect(40, 40, 100, 100);
	context.fillStyle = "#9BFF8D";
	context.fillRect(320, 40, 100, 100);*/
	
	/*context.strokeStyle = "#0072AD";
	context.strokeRect(40, 40, 100, 100);
	context.strokeRect(180, 40, 100, 100);
	
	context.lineWidth = 10;
	context.beginPath();
	context.moveTo(40, 180);
	context.lineTo(420, 180);
	context.stroke();
	
	context.lineWidth = 20;
	context.beginPath();
	context.moveTo(40, 200);
	context.lineTo(420, 200);
	context.stroke();*/
	
	/*var text = "Hello World";
	context.font = "italic 30px Calibri";
	context.fillText(text, 40, 40);
	// or strokeText 
	*/
	
	/*
	context.fillRect(40, 40, 100, 100);
	
	context.beginPath();
	context.arc(230, 90, 50, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
	
	context.clearRect(80, 80, 40, 40);
	
	// clear whole canvas
	context.clearRect(0, 0, canvas.width(), canvas.height());
	*/
	
	/*canvas.attr("width", $(window).get(0).innerWidth);
	canvas.attr("height", $(window).get(0).innerHeight);
	
	context.fillRect(0, 0, canvas.width(), canvas.height());*/
	
	function resizeCanvas() {
		canvas.attr("width", $(window).get(0).innerWidth);
		canvas.attr("height", $(window).get(0).innerHeight);
		
		context.fillRect(0, 0, canvas.width(), canvas.height());
	}
	
	resizeCanvas();
	$(window).resize(resizeCanvas);
});