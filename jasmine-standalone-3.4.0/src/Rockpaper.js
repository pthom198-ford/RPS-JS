function Rockpaper()) {
  this.outcome;
  this.playerChoice;
  this.computerChoice;
};

Rockpaper.prototype.play = function() {
  if (this.computerChoice === 'Rock' && this.playerChoice === 'Scissors') {
    return this.won
  } else if (this.computerChoice === 'Scissors' && this.playerChoice === 'Paper') {
    return this.won
  } else if (this.computerChoice === 'Paper' && this.playerChoice === 'Rock') {
    return this.won
  } else if (this.computerChoicee === 'Scissors' && this.playerChoice === 'Rock') {
    return this.lose
  } else if (this.computerChoice === 'Paper' && this.playerChoice === 'Scissors') {
    return this.lose
  } else if (this.computerChoice === 'Rock' && this.playerChoice === 'Paper') {
    return this.lose
  } else {
    return this.draw
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
