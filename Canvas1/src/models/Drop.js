function Drop(x,y) {
this.x = x;
this.y = y;
this.dx = 1;
this.dy  = 1;
this.width = 1;
this.height = 1;
this.alpha = 0;
}
Drop.getRandomInstanceForWorld = function(world){
	let dropX = RandomUtils.getRandomArbitrary(0,world.width);
	let dropY = RandomUtils.getRandomArbitrary(0,world.height);
	let drop = new Drop(dropX,dropY);
	drop.alpha = Math.random();
	drop.dx = -1 + Math.random() * 2 + 2;
	drop.dy = Math.random();
	return drop;
}