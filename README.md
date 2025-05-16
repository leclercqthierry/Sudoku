# Jeu de Sudoku

Une application web simple de Sudoku réalisée avec HTML, CSS (TailwindCSS) et JavaScript.

## Fonctionnalités

- Génération d'une nouvelle grille de Sudoku via une API en ligne
- Grille interactive : sélectionne un chiffre puis clique sur une case pour le placer
- Retour visuel pour les entrées correctes (vert) avec animation secousse haut/bas comme pour dire oui ou incorrectes (rouge, puis effacées) avec animation secousse gauche/droite comme pour dire non
- Bouton "Effacer" pour recharger une nouvelle grille
- Design responsive adapté aux ordinateurs et mobiles

## Prérequis

- [Node.js](https://nodejs.org/)
- npm (inclus avec Node.js)

## Installation

1. Clone le dépôt :

2. Installe les dépendances :

    ```sh
    npm install
    ```

3. Compile le CSS avec Tailwind :

    ```sh
    npm run tailwind
    ```

4. Ouvre `index.html` dans ton navigateur.

## Utilisation

- Clique sur un chiffre sous la grille pour le sélectionner.
- Clique sur une case vide pour y placer le chiffre choisi.
- Les bonnes réponses deviennent vertes, les erreurs deviennent rouges puis sont effacées.
- Clique sur "Effacer" pour générer une nouvelle grille.

## Personnalisation

- Modifie les styles dans `public/assets/css/style-input.css` puis recompile le CSS.
- Les grilles de Sudoku sont récupérées depuis [sudoku-api.vercel.app](https://sudoku-api.vercel.app/).

## Licence

MIT

---

Auteur : leclercqthierry
