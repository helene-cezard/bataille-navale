let grid = [
  ["⛵", "⛵", "", "", "", "", "", ""],
  ["", "", "", "⛵", "", "", "", ""],
  ["", "", "", "⛵", "", "", "", ""],
  ["", "", "", "⛵", "", "", "", ""],
  ["", "", "", "⛵", "⛵", "⛵", "⛵", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
];


function displayGrid () {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++)  {

    let currentLine = grid[rowIndex];

    for (let columnIndex = 0; columnIndex < currentLine.length; columnIndex++) {
      let currentChar = currentLine[columnIndex];
        let htmlCell = document.getElementById("cell" + rowIndex + columnIndex);
      htmlCell.textContent = currentChar;
    }
  }
}

displayGrid();

function sendMissile (rowIndex, columnIndex) {
  let targetCell = grid[rowIndex][columnIndex];

  if (targetCell === "") {
    grid[rowIndex][columnIndex] = "🌊";
    console.log("loupé");
    displayGrid();

  } else if (targetCell === "⛵") {
    grid[rowIndex][columnIndex] = "💥";
    console.log("touché");
    displayGrid();

  } else {
    console.log("T'as déjà tiré ici ! T'es bourré ou quoi ?")
    displayGrid();

  }
} 