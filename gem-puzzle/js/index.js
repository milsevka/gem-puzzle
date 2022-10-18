let container = document.createElement("div");
container.className = "main-container";
container.innerHTML = "It's a Gem Puzzle. Good luck!";
document.body.append(container);

let options = document.createElement("div");
options.className = "options";
container.append(options);

let shuffle = document.createElement("div");
shuffle.className = "shuffle";
shuffle.innerHTML = "Shuffle";
options.append(shuffle);

let stopGames = document.createElement("div");
stopGames.className = "stop";
stopGames.innerHTML = "Stop";
options.append(stopGames);

let save = document.createElement("div");
save.className = "save";
save.innerHTML = "Save";
options.append(save);

let results = document.createElement("div");
results.className = "results";
results.innerHTML = "Results";
options.append(results);

let optionsTime = document.createElement("div");
optionsTime.className = "options-time";
container.append(optionsTime);

let movesGame = document.createElement("div");
movesGame.className = "moves-game";
movesGame.innerHTML = "moves:";
optionsTime.append(movesGame);

let timeGame = document.createElement("div");
timeGame.className = "time-game";
timeGame.innerHTML = "time:";
optionsTime.append(timeGame);

let movesCounter = document.createElement("div");
movesCounter.className = "moves-counter";
movesCounter.innerHTML = "0";
movesGame.append(movesCounter);

let timeCounter = document.createElement("div");
timeCounter.className = "time-counter";
timeCounter.innerHTML = "0";
timeGame.append(timeCounter);

let pazzleContainer = document.createElement("div");
pazzleContainer.className = "pazzle-container";
container.append(pazzleContainer);

const freeCard = {
  top: 0,
  left: 0,
};

const cellsArray = [];
cellsArray.push(freeCard);

function change(index) {
  const card = cellsArray[index];
  const diffPositionLeft = Math.abs(freeCard.left - card.left);
  const diffPositionTop= Math.abs(freeCard.top - card.top);
  if (diffPositionLeft + diffPositionTop > 1) {
    return;
  }

  card.element.style.top = `${freeCard.top * 100}px`;
  card.element.style.left = `${freeCard.left * 100}px`;

  const emtleft = freeCard.left;
  const emtTop = freeCard.top;
  freeCard.left = card.left;
  freeCard.top = card.top;
  card.left = emtleft;
  card.top = emtTop;

  // const isFinished = cellsArray.every((cell) => {
  //   return card.value === card.top * 4 + card.left;
  // });

  // if (isFinished) {
  //   alert("win");
  // }
}

const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);
for (let i = 1; i <= 15; i++) {
  let pazzleCard = document.createElement("div");
  let value = numbers[i - 1] + 1;
  pazzleCard.className = "pazzle-card";
  pazzleCard.innerHTML = value;
  const left = i % 4;
  const top = (i - left) / 4;
  cellsArray.push({
    value: value,
    left: left,
    top: top,
    element: pazzleCard,
  });

  pazzleCard.style.top = `${top * 100}px`;
  pazzleCard.style.left = `${left * 100}px`;
  pazzleContainer.append(pazzleCard);

  pazzleCard.addEventListener("click", () => {
    change(i);
  });
}

// shuffle.addEventListener("click", () => {
 
// })