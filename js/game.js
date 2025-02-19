const game = {

  turn: 1,

  sendMissile : function(rowIndex, columnIndex)
  {
    const targetCell = grid.cells[rowIndex][columnIndex];

    if (targetCell === "") {
      grid.cells[rowIndex][columnIndex] = "🌊";

    } else if (targetCell === "⛵") {
      grid.cells[rowIndex][columnIndex] = "💥";
      grid.boatCount--;

    } else {
      window.alert("T'as déjà tiré ici ! T'es bourré ou quoi ?");
      return;
    }

    grid.displayGrid();
    game.turnCount();
    game.stopGame();
  },

  turnCount: function()
  {
    game.turn++;

    if(game.turn > 30) {
      return;
    }
    
    const turnTitleElement = document.querySelector(".turnCounter");

    turnTitleElement.textContent = "Tour " + game.turn;
  },

  checkGameOver: function()
  {
    if (grid.boatCount === 0 || game.turn > 30) {
      return true;
    }

    return false;
  },

  stopGame: function()
  {
    if(!game.checkGameOver())
    {
      return;
    }

    const coordField = document.getElementById("coord");
    coordField.setAttribute("disabled", "");
    const result = document.querySelector(".result");

    if (grid.boatCount === 0) {
      result.textContent = "Gagné !"
      result.setAttribute("class", "result win");
    }
    else {
      result.textContent = "Perdu !";
      result.setAttribute("class", "result lose");
      grid.displayGrid();
    }
  }
}