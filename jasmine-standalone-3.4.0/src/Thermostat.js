function Thermostat(temp) {
  this.temp = 20
  this.powermode = true
};

Thermostat.prototype.uptemp = function() {
  if (this.powermode === true && this.temp <= 24) {
  return this.temp = this.temp + 1;
  } else if (this.powermode === false && this.temp <= 31) {
  return this.temp = this.temp + 1;
  }
};


Thermostat.prototype.downtemp = function() {
  if (this.temp >= 11) {
  return this.temp = this.temp - 1;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};
