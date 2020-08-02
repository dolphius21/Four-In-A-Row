class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  // Returns active player
  // @return {Object} player - the active player
  get activePlayer() {
    return this.players.find(player => player.active === true);
  }

  // Creates two player objects
  // @return {Array} An array of two Player objects
  createPlayers() {
    const players = [new Player('Player 1', 1, '#e15258', true), 
                     new Player('Player 2', 2, '#e59a13')];
    
    return players;
  }

  // Initializes game
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  // Branches code, depending on what key player presses
  // @param {Object} e - Keydown event object
  handleKeydown(key) {
    if (this.ready) {
      if (key === ArrowLeft) {
        // token moves left
      } else if (key === ArrowRight) {
        // token moves right
      } else if (key === ArrowDown) {
        // token drops
      }
    }
  }
}