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

          if (currentChar != "⛵" || game.checkGameOver()) {
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
            if (currentChar === "⛵") {
              boatCount++;
            }
        }
      }
      return boatCount;
  },

  creatOneBoat: function(boatSize)
  {
    const horizontal  = Math.random() < 0.5;
    randomInt1 = Math.floor(Math.random() * 8);
    randomInt2 = Math.floor(Math.random() * 8);

    randomIntsArray = [randomInt1];

    if ((randomInt1 + boatSize) < 8) {
      for (let i = 1; i < boatSize; i++) {
        randomInt1++;
        randomIntsArray.push(randomInt1);
      }
    }
    else {
      for (let i = 1; i < boatSize; i++) {
        randomInt1--;
        randomIntsArray.push(randomInt1);
      }
    }

    if (horizontal) {
      for (randInt of randomIntsArray) {
        grid.cells[randomInt2][randInt] = "⛵";
      }
    } else {
      for (randInt of randomIntsArray) {
        grid.cells[randInt][randomInt2] = "⛵";
      }
    }
  },

  creatAllBoats: function()
  {
    console.log("On construit des bateaux");

    grid.creatOneBoat(2);
    grid.creatOneBoat(3);
    grid.creatOneBoat(4);

    console.log(grid.cells);
    
  }

}
