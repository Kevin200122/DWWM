// var choixOrdinateur = Math.floor((Math.random() * 100) + 1),
//     choixPersonne;

// console.log(choixOrdinateur);

// var finJeu = true;
// choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100, fais ton choix!");

// if (choixPersonne < choixOrdinateur) {
//     alert("Le nombre est plus grand, recommence!");
//     var choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100, fais ton choix!");
// } else if (choixPersonne > choixOrdinateur) {
//     alert("Le nombre est plus petit, recommence!");
//     var choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100, fais ton choix!");
// }

// alert("Mes félicitations tu as gagné, tu as trouvé le nombre.");


var choixOrdinateur = Math.floor((Math.random() * 100) + 1),//Choix d'un chiffre entre 0 et 100
    choixPersonne;

console.log(choixOrdinateur);

var fin = true;
choixPersonne = prompt("Tu dois choisir un nombre entre 0 et 100, va-y fais ton choix!");

<<<<<<< HEAD
choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100 fais ton choix!")

if(choixOrdinateur > choixPersonne) {
    alert("Le nombre est plus grand recommence!");
    var choixPersonne = prompt("Tu dois choisir un nombre entre 1 et 100 fais ton choix!");
}else if(choixOrdinateur < choixPersonne) {
    alert("Le nombre est plus petit recommence!");
    var choixPersonne = prompt("Ty dois choisir un nombre entre 1 et 100 fais ton choix!");
}

alert("Bravo, tu as gagné!");
     


=======
// Pas besoin d'un booléen pour ce cas la, on met la condition directement dans le while
while (choixOrdinateur != choixPersonne) {

    // Si il n'y a qu'une seule instruction, il n' y a pas besoin des accolades {}

    if (choixPersonne < choixOrdinateur)
        alert(" le nombre doit être plus grand, recommence!");
    else
        alert("Le nombre doit être plus petit recommence!");

    choixPersonne = prompt("Tu dois choisir un nombre entre 0 et 100, fais ton choix!");
}

// Ce message ne s'affichera seulement si le choixPersonne == choixOrdinateur (boucle while(tant que) vérifiée)
alert("vous avez trouvé le bon chiffre bravo !");
>>>>>>> fc2b087f663dac595cfd9b3a43628ac5b3d5f5fd

