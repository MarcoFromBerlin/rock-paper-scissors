// - rock (p1) beats scissors(p2)
// - paper(p1) beats rock(p2)
// - scissors(p1) beats paper(p2)

// DOM
const playerName = document.querySelector(".player");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const whoWins = document.querySelector(".who__wins");
//

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

const getRandom = () => Math.round(Math.random() * (2 - 0) + 0);

let toolsArr = [rock, paper, scissors];

const letsPlay = (playerName = "No Name", playerChoice) => {
  let player1 = { name: "Machine", choice: toolsArr[getRandom()] };
  let player2 = { name: playerName, choice: playerChoice };

  let game = [player1, player2];
  // console.log(game);
  let inCaseOfTie = [];

  let countRock = 0;
  let countPaper = 0;
  let countScissors = 0;

  let whoHasRock = "";
  let whoHasPaper = "";
  let whoHasScissors = "";

  for (let i = 0; i < game.length; i++) {
    if (game[i].choice === rock) countRock++, (whoHasRock = game[i].name);
    if (game[i].choice === paper) countPaper++, (whoHasPaper = game[i].name);
    if (game[i].choice === scissors)
      countScissors++, (whoHasScissors = game[i].name);
  }

  // create array in case of tie
  inCaseOfTie.push(
    { tool: rock, total: countRock },
    { tool: paper, total: countPaper },
    { tool: scissors, total: countScissors }
  );
  // sort it
  inCaseOfTie.sort((a, b) => b.total - a.total);

  if (countRock === 1 && countScissors === 1 && countPaper === 0)
    return (whoWins.textContent = `The winner is  ${whoHasRock} with rock!`);
  if (countRock === 1 && countScissors === 0 && countPaper === 1)
    return (whoWins.textContent = `The winner is  ${whoHasPaper} with paper!`);
  if (countRock === 0 && countScissors === 1 && countPaper === 1)
    return (whoWins.textContent = `The winner is  ${whoHasScissors} with scissors!`);
  // tie even
  if (countRock > 1 || countScissors > 1 || countPaper > 1)
    return (whoWins.textContent = `TIE!!! Cause bot of them had ${
      inCaseOfTie.shift().tool
    }! Play again!`);
};

//
btnRock.addEventListener("click", function () {
  letsPlay(playerName.value, rock);
});
btnPaper.addEventListener("click", function () {
  letsPlay(playerName.value, paper);
});
btnScissors.addEventListener("click", function () {
  letsPlay(playerName.value, scissors);
});
