  describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe ('thermostat is able to', function() {
    it ('start at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20)
    });

    it ('can increase temp with up', function() {
    expect(thermostat.uptemp).toEqual(21)

    });

  });
});
