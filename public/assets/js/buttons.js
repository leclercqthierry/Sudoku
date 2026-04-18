// Génération dynamique des boutons 1 à 9
const container = document.getElementById("digit_buttons");

for (let i = 1; i <= 9; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "digit_choice cursor-pointer rounded-sm border bg-amber-50 px-2.5 py-2.5 transition-transform duration-400 ease-in-out hover:scale-90";
    container.appendChild(btn);
}