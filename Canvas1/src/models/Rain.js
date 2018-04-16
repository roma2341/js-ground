
 function Rain(world) {
 	this.world = world;
	this.drops = [];
}
Rain.prototype.init = function() {
	for (let i = 0; i < 100; i++) {
		this.drops.push(Drop.getRandomInstanceForWorld(this.world));
	}
}
Rain.prototype.nextMoment = function() {
	for (let drop of this.drops) {
		drop.y = y + this.world.gravity;
	}
}