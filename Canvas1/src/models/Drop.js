function Drop(x,y) {
this.x = x;
this.y = y;
}
Drop.getRandomInstanceForWorld = function(world){
	let dropX = getRandomArbitrary(0,world.width);
	let dropY = getRandomArbitrary(0,world.height);
	let drop = new Drop(dropX,dropY);
	return drop;
}