let container = document.createElement("div");
container.className = "main-container";
container.innerHTML = "It's a Gem Puzzle. Good luck!";
document.body.append(container);

let options = document.createElement("div");
options.className = "options";
container.append(options);

let shuffle = document.createElement("div");
shuffle.className = "shuffle";
shuffle.innerHTML = "Shuffle and Start";
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
movesGame.innerHTML = "moves: ";
optionsTime.append(movesGame);

let timeGame = document.createElement("div");
timeGame.className = "time-game";
timeGame.innerHTML = "time: ";
optionsTime.append(timeGame);

let movesCounter = document.createElement("div");
movesCounter.className = "moves-counter";
movesCounter.innerHTML = " 0";
movesGame.append(movesCounter);

let timeCounter = document.createElement("div");
timeCounter.className = "time-counter";
timeCounter.innerHTML = "00:00";
timeGame.append(timeCounter);

let pazzleContainer = document.createElement("div");
pazzleContainer.className = "pazzle-container";
container.append(pazzleContainer);

let sizeText = document.createElement("div");
sizeText.className = "size-text";
sizeText.innerHTML = "Frame Size:";
container.append(sizeText);

let sizeCounter = document.createElement("div");
sizeCounter.className = "size-counter";
sizeCounter.innerHTML = "4*4";
 sizeText.append(sizeCounter);

let sizeContainer = document.createElement("div");
sizeContainer.className = "size-container";
container.append(sizeContainer);

let sizethree = document.createElement("div");
sizethree.className = "size-three";
sizethree.id = 3
sizethree.innerHTML = "3*3";
sizeContainer.append(sizethree);

let sizefour = document.createElement("div");
sizefour.className = "size-four";
sizefour.id = 4
sizefour.innerHTML = "4*4";
sizeContainer.append(sizefour);

let sizefive = document.createElement("div");
sizefive.className = "size-five";
sizefive.id = 5
sizefive.innerHTML = "5*5";
sizeContainer.append(sizefive);

let sizesix = document.createElement("div");
sizesix.className = "size-six";
sizesix.innerHTML = "6*6";
sizesix.id = 6
sizeContainer.append(sizesix);

let sizeseven = document.createElement("div");
sizeseven.className = "size-seven";
sizeseven.innerHTML = "7*7";
sizeseven.id = 7
sizeContainer.append(sizeseven);

let sizeeight = document.createElement("div");
sizeeight.className = "size-eight";
sizeeight.innerHTML = "8*8";
sizeeight.id = 8
sizeContainer.append(sizeeight);

let amount = 15;
let rows = 4; 
let size;

sizeContainer.onclick = function (event) {
  let target = event.target;
  rows = target.id
  size = target.innerHTML

  amount = Number(target.id * target.id - 1)
}

const freeCard = {
  top: 0,
  left: 0,
  value: 0
};

let cellsArray;
//  cellsArray.push(freeCard);


function change(index) {
  let widthCard = 320 / rows
  const card = cellsArray[index];
  const diffPositionLeft = Math.abs(freeCard.left - card.left);
  const diffPositionTop= Math.abs(freeCard.top - card.top);
  if (diffPositionLeft + diffPositionTop > 1) {
    return;
  }

  card.element.style.top = `${freeCard.top * widthCard}px`;
  card.element.style.left = `${freeCard.left * widthCard}px`;

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


function prepTable() {
freeCard.top = 0;
freeCard.left = 0;
cellsArray = [];
cellsArray.push(freeCard);
let widthCard = 320 / rows
const numbers = [...Array(amount).keys()].sort(() => Math.random() - 0.5);
for (let i = 1; i <= amount; i++) {
    let pazzleCard = document.createElement("div");
    let value = numbers[i - 1] + 1;
    pazzleCard.className = "pazzle-card";
    pazzleCard.innerHTML = value;
    pazzleCard.style.width = `${widthCard}px`;
    pazzleCard.style.height = `${widthCard}px`;
    const left = i % rows;
    const top = (i - left) / rows;
    cellsArray.push({
      value: value,
      left: left,
      top: top,
      element: pazzleCard,
    });
  
    if (amount > 30) {
    pazzleCard.style.fontSize = `25px`
    }
    pazzleCard.style.top = `${top * widthCard}px`;
    pazzleCard.style.left = `${left * widthCard}px`;


    pazzleContainer.append(pazzleCard);
    pazzleCard.addEventListener("click", () => {
      change(i);
      movesCounter.innerHTML++
    });
  }
}


let sec;
let timer;

function startTimer() {
  sec = 0
  timer = setInterval(tick, 1000)
}

function tick() {
  timeCounter.innerHTML = sec++
}

function clearTimer() {
  clearInterval(timer)
}

function stopTimer() {
  clearInterval(timer)
// pazzleContainer.style.backgroundColor = 'black' // блокировка действия
}
sizeContainer.addEventListener("click", () => {
  pazzleContainer.innerHTML = ''
   cellsArray.length = 0;
   movesCounter.innerHTML = '0';
  sizeCounter.innerHTML = size;
   prepTable()
});

prepTable()

shuffle.addEventListener ("click" , () => {
  pazzleContainer.innerHTML = ''
  movesCounter.innerHTML = '0'
  cellsArray.length = 0
  timeCounter.innerHTML = '00:00'
  clearTimer()
  prepTable()
  startTimer()
})

stopGames.addEventListener ("click" , () => {
stopTimer()
});