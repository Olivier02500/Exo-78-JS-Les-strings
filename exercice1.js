
let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);
let position = document.getElementById('position');
position.innerText = monTexte.indexOf('i');

let newTexte = monTexte.toUpperCase();

let chaineMaj = document.getElementById('chaineMaj');
chaineMaj.innerText = newTexte;

let a = newTexte.indexOf('A');

for (let i = 0; i < a; i++) {
    alert("lettre A trouvré")
}



//Ajouter du code ci dessous pour réaliser la suite de l'exercice








