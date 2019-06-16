describe('Rockpaper', function() {
  var rockpaper;

  beforeEach(function() {
    rockpaper = new Rockpaper();
  });




  describe ('Player is able to see', function() {
    it ('the outcome if they lose', function() {
      rockpaper.play('Rock','Scissors')
      expect(rockpaper.outcome()).toBe('Computer beats Player');
    });
    it ('the outcome if they win', function() {
      rockpaper.play('Rock','Paper')
      expect(rockpaper.outcome()).toBe('Player beats Computer');
    });
    it ('the outcome if they draw', function() {
      rockpaper.play('Rock','Rock')
      expect(rockpaper.outcome()).toBe('Its a draw');
    });
});
});
