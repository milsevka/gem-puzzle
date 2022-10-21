let container = document.createElement("div");
container.className = "main-container";
container.innerHTML = "It's a Gem Puzzle. Good luck!";
document.body.append(container);

let popup = document.createElement("div");
popup.className = "popup";
container.append(popup);

let popupContetn = document.createElement("div");
popupContetn.className = "popup-content";
popup.append(popupContetn);

let popupResults = document.createElement("div");
popupResults.className = "popup-results";
container.append(popupResults);

let resultsCont = document.createElement("div");
resultsCont.className = "results-container";
resultsCont.innerHTML = "TOP-10"
popupResults.append(resultsCont);

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

let music = document.createElement("div");
music.className = "music";
options.append(music);

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
sizeCounter.innerHTML = "4x4";
 sizeText.append(sizeCounter);

let sizeContainer = document.createElement("div");
sizeContainer.className = "size-container";
sizeContainer.innerHTML = "Other size:"
container.append(sizeContainer);

let sizethree = document.createElement("div");
sizethree.className = "size-three";
sizethree.id = 3
sizethree.innerHTML = "3x3";
sizeContainer.append(sizethree);

let sizefour = document.createElement("div");
sizefour.className = "size-four";
sizefour.id = 4
sizefour.innerHTML = "4x4";
sizeContainer.append(sizefour);

let sizefive = document.createElement("div");
sizefive.className = "size-five";
sizefive.id = 5
sizefive.innerHTML = "5x5";
sizeContainer.append(sizefive);

let sizesix = document.createElement("div");
sizesix.className = "size-six";
sizesix.innerHTML = "6x6";
sizesix.id = 6
sizeContainer.append(sizesix);

let sizeseven = document.createElement("div");
sizeseven.className = "size-seven";
sizeseven.innerHTML = "7x7";
sizeseven.id = 7
sizeContainer.append(sizeseven);

let sizeeight = document.createElement("div");
sizeeight.className = "size-eight";
sizeeight.innerHTML = "8x8";
sizeeight.id = 8
sizeContainer.append(sizeeight);

let ol = document.createElement("div");
ol.className = "res";
resultsCont.append(ol);

let amount = 15;
let rows = 4; 
let size;

sizeContainer.onclick = function (event) {
  let target = event.target;
  if (target.className === 'size-three' || target.className === 'size-four' || target.className === 'size-five' ||
  target.className === 'size-six' || target.className === 'size-seven' || target.className === 'size-eight') {
    rows = target.id
    size = target.innerHTML
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


let result = [];
let resultWin = []

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
  movesCounter.innerHTML++
  const emtRight = freeCard.left;
  const emtBottom = freeCard.top;
  freeCard.left = card.left;
  freeCard.top = card.top;
  card.left = emtRight;
  card.top = emtBottom;
 
  const isFinished = cellsArray.every((card) => {
    return card.value === card.top * rows + card.left +1;
  });
 
  if (isFinished) {
    // if(music.classList.contains('music-on')) {
    //   let audioWon = new Audio(); 
    //   audioWon.src = '../../gem-puzzle/music/4cccc379d8da21a.mp3'; 
    //   audioWon.volume = 0.5;
    //   audioWon.play();
    // }
 
   
    
  let stringLocal = {moves: movesCounter.innerHTML , time: timeCounter.innerHTML}
  // resultWin.push(stringLocal)
  // console.log(resultWin)
  // ol.innerHTML = JSON.stringify(resultWin.sort((prev, next) => prev.moves - next.moves))
  // ol.innerHTML = resultWin.sort((prev, next) => prev.moves - next.moves).join('')

  //  Object.entries(stringLocal).forEach(([key, value]) => resultWin.push(`${key}: ${value}`))
    popup.classList.add('active')
    popupContetn.innerHTML = `You won! You solved the puzzle in ${movesCounter.innerHTML} steps and in ${timeCounter.innerHTML} sec!`
    // localStorage.setItem('moves', stringLocal)
    resultWin.push(stringLocal);
    resultWin.sort((prev, next) => prev.moves - next.moves)
    ol.innerHTML = JSON.stringify(resultWin).replace(/[^a-z0-9:.\s]/gi, ' ')
   localStorage.setItem('moves', ol.innerHTML)
  
     


      // function getListContent() {
      //   let result = [];
   
      //   for(let i=1; i<=1; i++) {
      //     let li = document.createElement('li');
      //     li.append(`${localStorage.getItem('moves')}`);
      //     result.push(li);
      //   }
      //   return result;
      // }
      // // ol.innerHTML = getListContent()
      //  ol.append(...getListContent());
 
     
 
    clearTimer()
    pazzleContainer.innerHTML = ''
  movesCounter.innerHTML = '0'
  cellsArray.length = 0
  timeCounter.innerHTML = '00:00'
  prepTable()
  }

}



function prepTable() {
freeCard.left = 0;
freeCard.top = 0;
// freeCard.value = 0;
 freeCard.value = rows * rows
cellsArray = [];
cellsArray.push(freeCard);
let widthCard = 320 / rows
let numbers = [...Array(amount).keys()]
.sort(() => Math.random() - 0.5);

function inversion(numbers) {
 let x = 0;
 for (let a = 0; a < numbers.length; a++) {
  const count = numbers.filter((elem, ind) => {
    return elem < numbers[a] + 1 && ind > a;
  }).length;
  x += count;
 } 
 return rows % 2 !== 0 ? x : x + 1;
}

 if (!inversion(numbers)) inversion();
 while (inversion(numbers) % 2 !== 0) {
  numbers = [...Array(amount).keys()].sort(() => Math.random() - 0.5);
  inversion(numbers)
 }


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
      // if(music.classList.contains('music-on')) {
      //   let audioCard = new Audio(); 
      //   audioCard.src = '../../gem-puzzle/music/game_board_003_52379.mp3'; 
      //   audioCard.volume = 0.5;
      //   audioCard.play();
      // }
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
});

popup.addEventListener("click", () => {
  popup.classList.remove('active')
});

results.addEventListener("click" , () => {
  popupResults.classList.add('activep');
});

popupResults.addEventListener("click", () => {
  popupResults.classList.remove('activep')
});

music.addEventListener("click", () => {
  music.classList.toggle('music-on')
})

// shuffle.addEventListener("click", () => {
//   if(music.classList.contains('music-on')) {
//     let audio = new Audio(); 
//     audio.src = '../../gem-puzzle/music/board_tip_movement_002_52384.mp3'; 
//     audio.volume = 0.5;
//     audio.play();
//   } else {
//     return;
//   }
// });
function meow() {
  ol.innerHTML = localStorage.getItem('moves')
}
window.addEventListener ('load', meow)

