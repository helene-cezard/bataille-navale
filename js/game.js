const game = {

  turn: 1,

  sendMissile : function(rowIndex, columnIndex)
  {
    let targetCell = grid.cells[rowIndex][columnIndex];

    if (targetCell === "") {
      grid.cells[rowIndex][columnIndex] = "🌊";
      console.log("loupé");

    } else if (targetCell === "b") {
      grid.cells[rowIndex][columnIndex] = "💥";
      grid.boatCount--;
      console.log("touché");
      console.log(grid.boatCount);

    } else {
      console.log("T'as déjà tiré ici ! T'es bourré ou quoi ?")

    }

    grid.displayGrid();
    game.turnCount();
    game.stopGame();
  },

  turnCount: function()
  {
    game.turn++;

    let turnTitleElement = document.querySelector(".turnCounter");

    turnTitleElement.textContent = "Tour " + game.turn;
  },

  checkGameOver: function()
  {
    if (grid.boatCount === 0 || game.turn > 15) {
      console.log("jeu fini");
      console.log(grid.boatCount);
      console.log(game.turn);

      return true;
    }

    return false;
  },

  stopGame: function()
  {
    if(game.checkGameOver()) {
      console.log("game over");
      let coordField = document.getElementById("coord");
      coordField.setAttribute("disabled", "");
      const result = document.querySelector(".result");
  
      if (grid.boatCount === 0) {
        result.textContent = "Gagné !"
        result.setAttribute("class", "result win");
      }
      else {
        result.textContent = "Perdu !";
        result.setAttribute("class", "result lose");
      }
    }


  }
}