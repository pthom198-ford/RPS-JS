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

    it ('reset temp to 20', function() {
      thermostat.temp = 10
      thermostat.reset()
      expect(thermostat.temp).toEqual(20)
    });
  });

  describe ('the max temp', function() {
    it ('in powersaving mode is 25 degrees', function() {
      powermode = true
      thermostat.temp = 25
      thermostat.uptemp()
      expect(thermostat.temp).toEqual(25)
    });
    it ('is 32 degrees', function() {
      thermostat.pswitch(false)
      thermostat.temp = 32
      thermostat.uptemp()
      expect(thermostat.temp).toEqual(32)
    });
    describe ('powersaving mode', function() {
      it ('on by default', function() {
      thermostat.temp = 25
      thermostat.uptemp()
      expect(thermostat.temp).toEqual(25)
      });
    });
    describe ('thermostats energy usage', function() {
    it ('< 18 displays low-usage', function() {
      thermostat.temp = 17
      thermostat.hello()
      expect(thermostat.energy).toEqual("low-usage")
    });

    });
  });
});
