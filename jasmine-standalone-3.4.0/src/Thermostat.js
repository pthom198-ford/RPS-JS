function Thermostat(temp) {
  this.temp = 20
};

Thermostat.prototype.uptemp = function(number) {
  this.temp = this.temp + 1
};
