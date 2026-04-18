import {selectNumber} from "./select-number.js";

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