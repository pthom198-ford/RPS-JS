describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function()  {
    fizzbuzz = new Fizzbuzz();
  });
  describe('knows when a number is', function() {
  it('divisible by 3', function() {
    // fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });
  it('divisble by 5', function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });
  it('divisible by 15', function() {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  });
});
  describe('know when a number is NOT', function() {
    it('divisible by 3', function(){
      // fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisble by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(9)).toBe(false);
    });
    });
  describe('When playing says', function() {
    it('"fizz" when divisible by 3', function() {
      expect(fizzbuzz.returnfizz(3)).toEqual("fizz")
    });
    it('"buzz" when divisible by 5', function() {
      expect(fizzbuzz.returnbuzz(5)).toEqual("buzz")
    });
  });


});
