describe('Airport',function(){
  var airport;

beforeEach(function() {
  airport = new Airport();
  plane = new Plane();
});

  describe ('airplane is able to', function() {
    it ('land on hangar', function() {
    airport.addplane(plane)
    expect(airport.hangar).toContain(plane)
    });
  });

});
