  describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe ('thermostat is able to', function() {
    it ('start at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20)
    });

    it ('increase temp with up', function() {
    thermostat.uptemp()
    expect(thermostat.temp).toEqual(21)
    });

    it ('decrease temp with down', function() {
    thermostat.downtemp()
    expect(thermostat.temp).toEqual(19)
    });

    it ('have a minimum temp of 10', function() {
    thermostat.temp = 10
    thermostat.downtemp()
    expect(thermostat.temp).toEqual(10)
    });
  });

  describe ('in power saving mode', function() {
    it ('the max temp is 25 degrees', function() {
      powermode = true
      thermostat.temp = 25
      thermostat.uptemp()
      expect(thermostat.temp).toEqual(25)
    });

  });
});
