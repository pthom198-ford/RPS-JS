function Thermostat(temp) {
  this.temp = 20
  this.powermode = true
  this.energy = "medium-usage"
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

Thermostat.prototype.hello = function() {
  if (this.temp < 18) {
    return this.energy = "low-usage";
  } else if (this.temp > 18 && this.temp < 25) {
    return this.energy = "medium-usage";
  } else {
    return this.energy = "high-usage";
  };
};

Thermostat.prototype.pswitch = function(value) {
  this.powermode === value
};

console.log(19)
