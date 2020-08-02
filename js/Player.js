class Player {
   constructor(name, id, color, isTurn = false) {
      this.name = name;
      this.id = id;
      this.color = color;
      this.isTurn = isTurn;
      this.tokens = this.createTokens(21);
   }

   // Create token objects for player
   // @param {integer} num - Number of token objects to be created
   // @return {array} tokens - an array of new token objects
   createTokens(number) {
      const tokens = [];

      for (let i = 0; i < number; i++) {
         const token = new Token(this, i);
         tokens.push(token);
      }

      return tokens;
   }
}
