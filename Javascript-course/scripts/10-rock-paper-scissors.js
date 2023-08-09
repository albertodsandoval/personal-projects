let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
//creates a default score so code wont crash when score is reset
//checks if score is null!!
updateScoreElement();

function computeMove(){
let computerMove = '';
const randomNumber = Math.random();
if(randomNumber>=0 && randomNumber<(1/3)){
  computerMove = 'rock';
} else if(randomNumber >= (1/3)&& randomNumber<(2/3)){
  computerMove = 'paper';
} else if (randomNumber>= (2/3)&& randomNumber<1){
  computerMove = 'scissors';
}
return computerMove;
}
function tester(yourMove,computerMove){
let result = '';
if((yourMove==='rock'&&computerMove==='rock') ||(yourMove==='paper'&&computerMove==='paper')||(yourMove==='scissors'&&computerMove==='scissors')){
  score.ties ++;
  result = 'Tie';
}
else if ((yourMove==='rock'&&computerMove==='paper')||(yourMove==='paper'&&computerMove==='scissors')||(yourMove==='scissors'&&computerMove==='rock')){
  score.losses ++;
  result = 'You Lose';
}
else if ((yourMove==='rock'&&computerMove==='scissors')||(yourMove==='scissors'&&computerMove==='paper')||(yourMove==='paper'&&computerMove==='rock')){
  score.wins ++;
  result = 'You Win';
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result')
  .innerHTML = result;
document.querySelector('.js-move')
.innerHTML = `You 
<img class="move-icon" src="images/${yourMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
return result;
}
function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

