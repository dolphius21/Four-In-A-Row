class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  //Gets associated htmlToken
  // @return {element} HTML element associated with token object.
  get htmlToken() {
    return document.querySelector(`#${this.id}`);
  }

  // Draws new HTML token
  drawHTMLToken() {
    const token = document.createElement('div');
    document.querySelector('#game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
    return token;
  }
}