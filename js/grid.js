const grid = {
  cells : [],

  headers : {
    rows : [],
    columns : []
  },

  boatCount: 0,

  init: function()
  {
    grid.cells = [
      ["b", "b", "", "", "", "", "", ""],
      ["", "", "", "b", "", "", "", ""],
      ["", "", "", "b", "", "", "", ""],
      ["", "", "", "b", "", "", "", ""],
      ["", "", "", "b", "b", "b", "b", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""]
    ];

    grid.headers.rows = [1, 2, 3, 4, 5, 6, 7, 8];
    grid.headers.columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    grid.boatCount = this.countBoats();
  },

  displayGrid: function()
  {
    for (let rowIndex = 0; rowIndex < grid.cells.length; rowIndex++) 
    {
      let currentLine = grid.cells[rowIndex];
      for (let columnIndex = 0; columnIndex < currentLine.length; columnIndex++)
      {
        let currentChar = currentLine[columnIndex];
          let htmlCell = document.getElementById("cell" + rowIndex + columnIndex);

          if (currentChar != "b") {
            htmlCell.textContent = currentChar;
          }
      }
    }
  },

  countBoats: function()
  {
    let boatCount = 0
    for (let rowIndex = 0; rowIndex < grid.cells.length; rowIndex++) 
      {
        let currentLine = grid.cells[rowIndex];
        for (let columnIndex = 0; columnIndex < currentLine.length; columnIndex++)
        {
          let currentChar = currentLine[columnIndex];  
            if (currentChar === "b") {
              boatCount++;
            }
        }
      }
      return boatCount;
  }

}
