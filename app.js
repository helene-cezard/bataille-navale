let grid = [
  ["b", "b", "", "", "", "", "", ""],
  ["", "", "", "b", "", "", "", ""],
  ["", "", "", "b", "", "", "", ""],
  ["", "", "", "b", "", "", "", ""],
  ["", "", "", "b", "b", "b", "b", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
];

function displayLine (currentLine) {
  let lineAsText = '';
  for (let i = 0; i < currentLine.length; i++) {
    let currentChar = currentLine[i];

    if (currentChar === "") {
      currentChar ="~";
    }
    lineAsText += currentChar + ' ';
  }
  console.log(lineAsText);
}

function displayGrid () {
  for (let i = 0; i < grid.length; i++)  {
    let currentLine = grid[i];
    displayLine(currentLine);
  }
}

displayGrid();

function sendMissile (rowIndex, columnIndex) {
  let targetCell = grid[rowIndex][columnIndex];

  if (targetCell === "") {
    grid[rowIndex][columnIndex] = "x";
    console.log("loupé");
    displayGrid();

  } else if (targetCell === "b") {
    grid[rowIndex][columnIndex] = "t";
    console.log("touché");
    displayGrid();

  } else {
    console.log("T'as déjà tiré ici ! T'es bourré ou quoi ?")
    displayGrid();

  }
} 