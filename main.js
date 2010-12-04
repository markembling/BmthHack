$(function() {
	var context = $("#myCanvas").get(0).getContext("2d");
	
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
	
	context.fillStyle = "#BEF3FF";
	context.fillRect(200, 40, 100, 100);
	context.fillRect(40, 40, 100, 100);
	context.fillStyle = "#9BFF8D";
	context.fillRect(320, 40, 100, 100);
});