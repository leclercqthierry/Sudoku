import { createGridToSolve } from "./create-grid-to-solve.js";
import { chooseNumber } from "./choose-number.js";

/**
 * @description Génère une grille de Sudoku à partir d'une API et initialise le jeu.
 * @param {HTMLElement[]} cells - Liste des cellules représentant la grille de jeu.
 * @param {Objet} digitObj - Objet représentant le chiffre à placer dans la cellule.
 * @param {HTMLElement[]} digit_choices - Liste des éléments représentant les choix de chiffres.
 * @returns {Promise<void>} - Une promesse qui s'exécute une fois la grille créée.
 */
export async function createSudoku(cells, digitObj, digit_choices) {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const data = await response.json();
    // Retrives the board and his solution in API response format
    const solution = data.newboard.grids[0].solution;
    const board = data.newboard.grids[0].value;
    const sudoku = [solution, board];

    // Filling the empty grid with the grid to solve
    createGridToSolve(cells, board, digitObj, solution);

    // Select the number to play with
    chooseNumber(digit_choices, digitObj);
}