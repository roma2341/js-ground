function RandomUtils(){

}
RandomUtils.prototype.getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
}