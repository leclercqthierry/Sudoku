/**
 * Regroupe les fonctions utiles au sudoku
 */

/**
 * @description Sélectionne un nombre à partir de l'événement déclenché et le convertit en entier.
 * @param {Event} event - L'événement déclenché contenant l'élément cible.
 * @returns {number} - Le nombre entier extrait du texte de l'élément cible.
 */
export function selectNumber(event) {
    return parseInt(event.target.textContent);
}

/**
 * @description Ajoute des écouteurs d'événements aux choix de chiffres pour permettre la sélection
 * @param {HTMLElement[]} digit_choices - Liste des éléments représentant les choix de chiffres.
 * @param {Objet} digitObj - Objet représentant le chiffre à placer dans la cellule.
 */

export function chooseNumber(digit_choices, digitObj) {
    for (let i = 0; i < digit_choices.length; i++) {
        digit_choices[i].addEventListener("click", (event) => {
            // Réinitialise le chiffre sélectionné
            for (let j = 0; j < digit_choices.length; j++) {
                digit_choices[j].classList.remove("selected");
            }
            digitObj.value = selectNumber(event);
            event.target.classList.add("selected");
        });
    }
}

/**
 * @description Place un chiffre dans une cellule et vérifie sa validité par rapport à la solution.
 * @param {number} i - Index de la cellule dans la grille.
 * @param {Objet} digitObj - Objet représentant le chiffre à placer dans la cellule.
 * @param {number[][]} solution - Tableau représentant la grille solution.
 * @param {HTMLElement[]} cells - Liste des cellules de la grille.
 */
export function setDigit(i, digitObj, solution, cells) {
    let d = Math.floor(i / 9);
    let r = i % 9;

    // Si le chiffre est valide, la case est vide ou le chiffre placé est incorrect
    if (digitObj.value !== 0 && !cells[i].classList.contains("correct")) {
        cells[i].textContent = digitObj.value;

        // Vérifie si le chiffre est correct
        if (solution[d][r] === digitObj.value) {
            cells[i].classList.remove("incorrect");
            cells[i].classList.add("correct");
        } else {
            cells[i].classList.add("incorrect");
            cells[i].addEventListener("animationend", () => {
                if (cells[i].classList.contains("incorrect")) {
                    cells[i].textContent = "";
                    cells[i].classList.remove("incorrect");
                }
            });
        }
    }
}

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
