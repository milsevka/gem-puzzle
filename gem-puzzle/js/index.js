let container = document.createElement("div");
container.className = "main-container";
container.innerHTML = "It's a Gem Puzzle. Good luck!";
document.body.append(container);

let popap = document.createElement("div");
popap.className = "popap";
container.append(popap);

let popapContetn = document.createElement("div");
popapContetn.className = "popap-content";
popap.append(popapContetn);

let options = document.createElement("div");
options.className = "options";
container.append(options);

let shuffle = document.createElement("div");
shuffle.className = "shuffle";
shuffle.innerHTML = "Shuffle and Start";
options.append(shuffle);

let loadGames = document.createElement("div");
loadGames.className = "load";
loadGames.innerHTML = "Load";
options.append(loadGames);

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
movesGame.innerHTML = "Moves: ";
optionsTime.append(movesGame);

let timeGame = document.createElement("div");
timeGame.className = "time-game";
timeGame.innerHTML = "Time: ";
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
  if (target.className === 'size-three' || target.className === 'size-four' || target.className === 'size-five' ||
  target.className === 'size-six' || target.className === 'size-seven' || target.className === 'size-eight') {
    rows = target.id
    size = target.innerHTML
  console.log(target.className)
    amount = Number(target.id * target.id - 1) 
    pazzleContainer.innerHTML = ''
       cellsArray.length = 0;
       movesCounter.innerHTML = '0';
      sizeCounter.innerHTML = size;
      timeCounter.innerHTML = '00:00'
       prepTable()
       clearTimer()
  } else {
    return;
  }

}

const freeCard = {
  top: 0,
  left: 0,
  value: 0
};

let cellsArray;
let counterWin = 0;


function change(index) {
  let widthCard = 320 / rows
 
  
  const card = cellsArray[index];
  const diffPositionRight = Math.abs(freeCard.left - card.left);
  const diffPositionBottom= Math.abs(freeCard.top - card.top);
  if (diffPositionRight + diffPositionBottom > 1) {
    return;
  }

  card.element.style.top = `${freeCard.top * widthCard}px`;
  card.element.style.left = `${freeCard.left * widthCard}px`;

  const emtRight = freeCard.left;
  const emtBottom = freeCard.top;
  freeCard.left = card.left;
  freeCard.top = card.top;
  card.left = emtRight;
  card.top = emtBottom;
  console.log(cellsArray)
  const isFinished = cellsArray.every((card) => {
    // console.log(card.bottom * rows + card.right)
    // console.log(card.value)
    return card.value === card.top * rows + card.left + 1;
  });

  if (isFinished) {
    clearTimer()
    popap.classList.add('active')
    popapContetn.innerHTML = `You won! You solved the puzzle in ${movesCounter.innerHTML} steps and in ${timeCounter.innerHTML} sec!`
  }

}

// function setLocalStorage() {
//   localStorage.setItem('result', nameMain.value);
// }


// function getLocalStorage() {
//   if(localStorage.getItem('result')) {
//     nameMain.value = localStorage.getItem('result');
//   }
// }


function prepTable() {
freeCard.left = 0;
freeCard.top = 0;
freeCard.value = rows * rows
cellsArray = [];
cellsArray.push(freeCard);
let widthCard = 320 / rows
const numbers = [...Array(amount).keys()]
// .reverse()
.sort(() => Math.random() - 0.5);
// console.log(numbers)
// console.log(cellsArray)
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
  timeCounter.innerHTML = `${Math.trunc(sec/60%60).toString().padStart(2,'0')}:${parseInt(sec++ % 60).toString().padStart(2, '0')}`
}

function clearTimer() {
  clearInterval(timer)
}

function stopTimer() {
  clearInterval(timer)
}


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

popap.addEventListener("click", () => {
  popap.classList.remove('active')
} )