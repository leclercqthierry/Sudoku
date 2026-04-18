/**
 * Script permet de Générer une grille de sudoku et de jouer
 */

import { createSudoku } from "./utils/create-sudoku.js";

const cells = document.querySelectorAll(".cell");
const digit_choices = document.querySelectorAll(".digit_choice");
const btn_clear = document.getElementById("btn_clear");

let digitObj = { value: 0 };

btn_clear.addEventListener("click", () => {
    window.location.reload();
});
const sudoku = await createSudoku(cells, digitObj, digit_choices);
