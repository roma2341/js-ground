let MAX_DROPS_COUNT = 1000;
let MAX_DROPS_PER_MOMENT = 50;
let ALPHA_CHANGE_STEP = 0.01;
let DIFFERENCE_X_DEBOUNCER = 10;
 function Rain(world) {
 	this.world = world;
	this.drops = [];
}
Rain.prototype.init = function() {
	for (let i = 0; i < 1000; i++) {
		this.drops.push(Drop.getRandomInstanceForWorld(this.world));
	}
}
Rain.prototype.nextMoment = function() {
	let itemsToRemove = [];
	this.drops.forEach(function(drop,index){
		drop.y  += drop.dy * this.world.speed;
		drop.x += drop.dx * this.world.speed;
		if (drop.y > this.world.height + 100) {
			drop.y = 0;
			drop.x = RandomUtils.getRandomArbitrary(0,this.world.width);
		}
	}.bind(this));

	let newDropsCount = RandomUtils.getRandomArbitrary(0,MAX_DROPS_PER_MOMENT);
	let deltaCount = MAX_DROPS_COUNT - (newDropsCount + this.drops.length);
	if (deltaCount < 0 ) {
		newDropsCount -= Math.abs(deltaCount);
	}

}