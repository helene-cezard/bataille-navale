const app = {

  init : function()
  {
    grid.init();
    grid.displayGrid();
    game.stopGame();
    let coordForm = document.querySelector(".coordForm");
    coordForm.addEventListener("submit", app.formSubmitHandler);
  },

  formSubmitHandler : function (event) {
    event.preventDefault();
  
    let coordsInput = document.getElementById("coord").value;
    document.getElementById("coord").value = "";
  
    let coodLetter = coordsInput[0];
    let coordNumber = coordsInput[1];
  
    let columns = grid.headers.columns;
    let columnIndex = columns.indexOf(coodLetter);
  
    let rows = grid.headers.rows;
    let rowIndex = rows.indexOf(Number(coordNumber));
  
    if (columnIndex === -1 || rowIndex === -1)
    {
      window.alert("Coordonées invalides !");
      return false;
    }
  
    game.sendMissile(rowIndex, columnIndex);
  }
}

document.addEventListener( "DOMContentLoaded", app.init );