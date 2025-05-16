/**
 * Génère la grille de sudoku vide
 */
const gridContainer = document.getElementById("container");

for (let i = 0; i < 81; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    gridContainer.appendChild(div);
}
