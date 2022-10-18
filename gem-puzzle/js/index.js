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

