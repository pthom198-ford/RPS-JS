function Rockpaper()) {
  this.outcome;
  this.playerChoice;
  this.computerChoice;
};

Rockpaper.prototype.play = function() {
  if this.computerChoice === 'Rock' && this.playerChoice === 'Scissors'
    then won
  elsif this.computerChoice === 'Scissors' && this.playerChoice === 'Paper'
    then won
  elsif this.computerChoice === 'Paper' && this.playerChoice === 'Rock'
    then won
  elsif this.computerChoicee === 'Scissors' && this.playerChoice === 'Rock'
    then lose
  elsif this.computerChoice === 'Paper' && this.playerChoice === 'Scissors'
    then lose
  elsif this.computerChoice === 'Rock' && this.playerChoice === 'Paper'
    then lose
  else draw

};

Rockpaper.prototype.won = function() {
  return 'Computer beats Player'
};

Rockpaper.prototype.lose = function() {
  return 'Player beats Computer'
}

Rockpaper.prototype.draw = function() {
  return 'Its a draw'
}
