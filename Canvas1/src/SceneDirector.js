function SceneDirector(canvasElm) {
	this.context = canvasElm.getContext('2d');
	this.world = new World(1024,768);
	this.rain = new Rain(this.world);
	this.rain.init();
}

SceneDirector.prototype.run = function(){
   window.setTimeout(this.updateFrame(), 1000/60);
}

SceneDirector.prototype.updateFrame = function(){
	console.log('rect filled');
	this.context.fillRect(0,0,200,200);
}