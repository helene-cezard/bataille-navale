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

let coordForm = document.querySelector(".coordForm");
coordForm.addEventListener("submit", formSubmitHandler);

const gridHeaders = {
  rows: [1, 2, 3, 4, 5, 6, 7, 8],
  columns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
};

function formSubmitHandler (event) {
  event.preventDefault();

  let coordsInput = document.getElementById("coord").value;

  let columns = gridHeaders["columns"];
  let columnIndex = columns.indexOf(coordsInput[0]);

  let rows = gridHeaders["rows"];
  let rowIndex = rows.indexOf(Number(coordsInput[1]));

  sendMissile(rowIndex, columnIndex);
}
