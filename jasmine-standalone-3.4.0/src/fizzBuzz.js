var Fizzbuzz = function() {};

  // Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  //   return number % 3 === 0;
  // };
  //
  // Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  // return (number % 5 === 0);
  // };
  //
  // Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  //   return (number % 15 === 0);
  // };

//   Fizzbuzz.prototype.returnfizz = function(number) {
//     if (_isDivisibleByThree(number)) {
//     return "fizz";
//   };
// };

  Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
  };

  Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
    return this._isDivisibleBy(number, 15);
  };

  Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisibleBy(number, 3);
  };

  Fizzbuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisibleBy(number, 5);
  };

  Fizzbuzz.prototype.returnfizz = function(number) {
    if (this._isDivisibleBy(number, 3)) {
    return "fizz";
    }
  };

  Fizzbuzz.prototype.returnbuzz = function(number) {
    if (this._isDivisibleBy(number, 5)) {
      return "buzz";
    }
  };
