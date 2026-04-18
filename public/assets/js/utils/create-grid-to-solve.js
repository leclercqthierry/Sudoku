import {setDigit} from "./set-digit.js";

/**
 * @description Initialise la grille à résoudre en remplissant les cellules avec les valeurs de départ.
 * @param {HTMLElement[]} cells - Liste des cellules représentant la grille de jeu.
 * @param {number[][]} board - Tableau représentant la grille initiale avec les valeurs données.
 * @param {Objet} digitObj - Objet représentant le chiffre à placer dans la cellule.
 * @param {number[][]} solution - Tableau représentant la grille solution.
 * @returns {void}
 */
export function createGridToSolve(cells, board, digitObj, solution) {
    for (let i = 0; i < cells.length; i++) {
        let d = Math.floor(i / 9);
        let r = i % 9;
        if (board[d][r] !== 0) {
            cells[i].textContent = board[d][r];
        } else {
            cells[i].textContent = "";
            cells[i].addEventListener("click", () => {
                setDigit(i, digitObj, solution, cells);
            });
        }
    }
}