function Rockpaper() {
  this.outcome;
  this.playerChoice;
  this.computerChoice;
};

Rockpaper.prototype.play = function(computerChoice, playerChoice) {
  if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
    return this.won;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
    return this.won;
  } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
    return this.won;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
    return this.lose;
  } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
    return this.lose;
  } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
    return this.lose;
  } else {
    return this.draw;
  };
};

Rockpaper.prototype.won = function() {
  return 'Computer beats Player'
};

Rockpaper.prototype.lose = function() {
  return 'Player beats Computer'
};

Rockpaper.prototype.draw = function() {
  return 'Its a draw'
};

w = new Rockpaper(); {
  w.play('Rock','Scissors');
  console.log(w.won)
};
