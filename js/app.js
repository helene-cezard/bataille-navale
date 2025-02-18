const app = {

  init : function()
  {
    grid.init();
    grid.displayGrid();
    let coordForm = document.querySelector(".coordForm");
    coordForm.addEventListener("submit", app.formSubmitHandler);
  },

  formSubmitHandler : function (event) {
    event.preventDefault();
  
    let coordsInput = document.getElementById("coord").value;
  
    let coodLetter = coordsInput[0];
    let coordNumber = coordsInput[1];
  
    let columns = grid.headers.columns;
    let columnIndex = columns.indexOf(coodLetter);
    console.log(columnIndex);
  
    let rows = grid.headers.rows;
    let rowIndex = rows.indexOf(Number(coordNumber));
    console.log(rowIndex);
  
    if (columnIndex === -1 || rowIndex === -1)
    {
      console.log("Coordonées invalides");
      return false;
    }
  
    game.sendMissile(rowIndex, columnIndex);
  }
}

document.addEventListener( "DOMContentLoaded", app.init );