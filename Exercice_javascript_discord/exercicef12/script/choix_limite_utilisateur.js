var choixOrdinateur = Math.floor((Math.random() * 100) +1),
choixPersonne;

console.log(choixOrdinateur);

var finJeu = true;

var choixOrdinateur = Math.floor((Math.random() * 100) +1),
choixPersonne;

console.log(choixOrdinateur);

var finJeu = true;

choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100 fais ton choix!")

if(choixOrdinateur > choixPersonne) {
    alert("Le nombre est plus grand recommence!");
    var choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100 fais ton choix!");
}else if(choixOrdinateur < choixPersonne) {
    alert("Le nombre est plus petit recommence!");
    var choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100 fais ton choix!");
}

alert("Bravo, tu as gagné!");