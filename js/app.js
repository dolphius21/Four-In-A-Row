const game = new Game();

document.querySelector('#begin-game').addEventListener('click', (e) => {
  game.startGame();
  e.target.style.display = 'none';
  document.querySelector('#play-area').style.opacity = '1';
});

document.addEventListener('keydown', (e) => {
  game.handleKeydown(e);
});

