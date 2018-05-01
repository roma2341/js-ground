function SceneDirector(canvasElm) {
	this.context = canvasElm.getContext('2d');
	this.world = new World(1024,300);
	let rain = new Rain(this.world);
	rain.init();
	this.world.rain = rain;
}

SceneDirector.prototype.run = function(){
   this.updateFrame();//.bind(this), 1000/60);
}

SceneDirector.prototype.updateFrame = function(){
	this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);


	for (let drop of this.world.rain.drops) {
		this.context.lineWidth = 1;
		 this.context.strokeStyle = 'rgba(174,194,224,0.5)';
		this.context.beginPath();
		this.context.moveTo(drop.x,drop.y);
		this.context.lineTo(drop.x+this.world.wind,drop.y+drop.height);
		this.context.stroke();

	}
	this.world.nextMoment();
	window.setTimeout(this.updateFrame.bind(this),1000 / 60);
	//this.context.fillRect(0,0,200,200);
}