function Star() {
	this.x;
	this.y;
	this.radius;
	
	this.draw = function(context) {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.closePath();
		context.fill();
	}
};
