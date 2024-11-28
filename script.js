const games = [
  "Bubble Shooter",
  "Train Surfers",
  "Penalty Shooters 2",
  "Stickman Prison Escape",
  "My Parking Lot",
  "Basket Random",
  "Horror Granny",
  "Sniper Strike",
  "Drift Car Driving",
  "Two Punky Racing",
  "Dog Life Simulator",
  "Baby Panda Care"
];

// Carregar os jogos na lista
window.onload = function () {
  const gameList = document.getElementById('game-list');
  games.forEach(function(game) {
    const listItem = document.createElement('li');
    listItem.textContent = game; // Adiciona o nome do jogo
    gameList.appendChild(listItem); // Adiciona o item à lista
  });
};

