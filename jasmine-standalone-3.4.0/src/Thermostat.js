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
    return this.energy = "low";
  } else if (this.temp >= 18 && this.temp <= 25) {
    return this.energy = "med";
  } else {
    return this.energy = "high";
  };
};

Thermostat.prototype.pswitch = function() {
  if(this.powermode === true){
  return this.powermode = false
}else {
  this.powermode = true
  if (this.temp > 25) {
  return this.temp = 25
 }
};


};



$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();
  $('#temp-up').click(function(){
    thermostat.uptemp();
    updateTemp();
  });
  $('#temp-down').click(function(){
    thermostat.downtemp();
    updateTemp();
  });
  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemp();
  });

  $('#psm').click(function() {
    thermostat.pswitch();
    updateTemp();
  })

  function updateTemp() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.hello());
  };
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
});
});
