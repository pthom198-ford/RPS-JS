function Thermostat(temp) {
  this.temp = 20
};

Thermostat.prototype.uptemp = function() {
  this.temp = this.temp + 1
};

Thermostat.prototype.downtemp = function() {
  if (this.temp >= 11) {
  return this.temp = this.temp - 1;
  }
};
