// - rock (1) beats scissors(3)
// - paper(2) beats rock(1)
// - scissors(3) beats paper(2)

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

const getRandom = () => Math.round(Math.random() * (2 - 0) + 0);

let toolsArr = [rock, paper, scissors];

let case1 = [rock, scissors];
let case2 = [paper, rock];
let case3 = [scissors, paper];

let player1 = { name: "Machine", choice: toolsArr[getRandom()] };
let player2 = { name: "Marco", choice: scissors };

let game = [player1, player2];

const letsPlay = (game) => {
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
    console.log("Case 1, the winner is", whoHasRock, "with rock");
  if (countRock === 1 && countScissors === 0 && countPaper === 1)
    console.log("Case 2, the winner is", whoHasPaper, "with aper");
  if (countRock === 0 && countScissors === 1 && countPaper === 1)
    console.log("Case 3, the winner is", whoHasScissors, "with Scissors");
  // tie even
  if (countRock > 1 || countScissors > 1 || countPaper > 1)
    console.log(
      `TIE!!! Cause bot of them had ${inCaseOfTie.shift().tool}! Play again!`
    );
};

letsPlay(game);
