const app = {

  init : function()
  {
    grid.init();
    grid.displayGrid();
    game.stopGame();
    const coordForm = document.querySelector(".coordForm");
    coordForm.addEventListener("submit", app.formSubmitHandler);

    for (let rowIndex = 0; rowIndex < grid.cells.length; rowIndex++) 
      {
        let currentLine = grid.cells[rowIndex];
        for (let columnIndex = 0; columnIndex < currentLine.length; columnIndex++)
        {
            let htmlCell = document.getElementById("cell" + rowIndex + columnIndex);
            htmlCell.addEventListener("click", app.cellClickHandler);
        }
      }
  },

  formSubmitHandler : function (event) {
    event.preventDefault();
  
    const coordsInput = document.getElementById("coord").value;
    document.getElementById("coord").value = "";
  
    const coodLetter = coordsInput[0];
    const coordNumber = coordsInput[1];
  
    const columns = grid.headers.columns;
    const columnIndex = columns.indexOf(coodLetter);
  
    const rows = grid.headers.rows;
    const rowIndex = rows.indexOf(Number(coordNumber));
  
    if (columnIndex === -1 || rowIndex === -1)
    {
      window.alert("Coordonées invalides !");
      return false;
    }
  
    game.sendMissile(rowIndex, columnIndex);
  },

  cellClickHandler: function(event) {
    const cellClass = event.target.id;

    const rowIndex = cellClass.substring(4)[0];
    const columnIndex = cellClass.substring(4)[1];

    game.sendMissile(rowIndex, columnIndex);
  } 
}

document.addEventListener( "DOMContentLoaded", app.init );