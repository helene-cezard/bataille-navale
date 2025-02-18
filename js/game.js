const game = {

  sendMissile : function(rowIndex, columnIndex)
  {
    let targetCell = grid.cells[rowIndex][columnIndex];

    if (targetCell === "") {
      grid.cells[rowIndex][columnIndex] = "🌊";
      console.log("loupé");
      grid.displayGrid();

    } else if (targetCell === "b") {
      grid.cells[rowIndex][columnIndex] = "💥";
      console.log("touché");
      grid.displayGrid();

    } else {
      console.log("T'as déjà tiré ici ! T'es bourré ou quoi ?")
      grid.displayGrid();

    }
  }
}