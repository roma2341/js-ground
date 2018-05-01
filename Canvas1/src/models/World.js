function World(width,height) {
	this.width = width;
	this.height = height;
	this.gravity = 1.25;
	this.rain = new Rain();
	this.wind = 1;
	this.speed = 4;
}
 
World.prototype.nextMoment = function(){
	this.rain.nextMoment();
}
World.prototype.draw = function(){
	this.rain.draw();
}