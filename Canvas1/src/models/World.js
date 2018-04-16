function World(width,height) {
	this.width = width;
	this.height = height;
	this.gravity = 1.25;
	this.rain = null;
}
function nextMoment(){
	this.rain.nextMoment();
}