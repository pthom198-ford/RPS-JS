function Airport(capacity) {
  this.capacity = capacity
  this.hangar = []
};

Airport.prototype.addplane = function(plane) {
  this.hangar.push(plane)
};
