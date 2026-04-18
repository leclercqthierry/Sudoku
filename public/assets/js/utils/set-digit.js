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