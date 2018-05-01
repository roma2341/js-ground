function RandomUtils(){

}
RandomUtils.getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
}
RandomUtils.getRandomOne = function(){
	return Math.round(Math.random()) * 2 - 1;
}
RandomUtils.boolean = function(){
	return Math.random() >= 0.5;
}