/**
 * Script permet de Générer une grille de sudoku et de jouer
 */

import * as sudoku from "./fonctions.js";

const cells = document.querySelectorAll(".cell");
const digit_choices = document.querySelectorAll(".digit_choice");
const btn_clear = document.getElementById("btn_clear");

let digitObj = { value: 0 };

btn_clear.addEventListener("click", () => {
    window.location.reload();
});
sudoku.createSudoku(cells, digitObj, digit_choices);
