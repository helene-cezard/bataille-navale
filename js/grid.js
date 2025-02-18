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
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""]
    ];

    grid.headers.rows = [1, 2, 3, 4, 5, 6, 7, 8];
    grid.headers.columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    grid.creatAllBoats();
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
  },

  creatOneBoat: function(boatSize)
  {
    const horizontal  = Math.random() < 0.5;

    let rowIndex = Math.floor(Math.random() * 8);
    let columnIndex = Math.floor(Math.random() * 8);

    grid.cells[rowIndex][columnIndex] = "b";
    
    if (horizontal) {

      if (columnIndex < 7 - (boatSize - 2)) {
        for (let i = 1; i < boatSize; i++) {

          columnIndex ++;
          grid.cells[rowIndex][columnIndex] = "b";
        }
      }
      else {
        for (let i = 1; i < boatSize; i++) {

          columnIndex --;
          grid.cells[rowIndex][columnIndex] = "b";
        }
      }
    }
    else {
      if (rowIndex < 7 - (boatSize - 2)) {
        for (let i = 1; i < boatSize; i++) {

          rowIndex ++;
          grid.cells[rowIndex][columnIndex] = "b";
        }
      }
      else {
        for (let i = 1; i < boatSize; i++) {

          rowIndex --;
          grid.cells[rowIndex][columnIndex] = "b";
        }
      }
    }
  },

  creatAllBoats: function()
  {
    console.log("On construit des bateaux");

    grid.creatOneBoat(2);
    grid.creatOneBoat(3);
    grid.creatOneBoat(4);
    
  }

}
