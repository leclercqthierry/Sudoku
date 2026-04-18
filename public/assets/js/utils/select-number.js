/**
 * @description Sélectionne un nombre à partir de l'événement déclenché et le convertit en entier.
 * @param {Event} event - L'événement déclenché contenant l'élément cible.
 * @returns {number} - Le nombre entier extrait du texte de l'élément cible.
 */
export function selectNumber(event) {
    return parseInt(event.target.textContent);
}