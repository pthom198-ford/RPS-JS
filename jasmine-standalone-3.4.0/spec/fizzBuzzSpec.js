describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should be return fizz on 3", function() {
    fizzbuzz.(3);
    expect(fizzbuzz.returnfizz).toEqual("fizz");
  });
