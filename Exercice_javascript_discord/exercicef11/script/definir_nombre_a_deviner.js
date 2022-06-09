var choixOrdinateur = Math.floor((Math.random() * 100) +1),
choixPersonne;

console.log(choixOrdinateur);

var finJeu = true;

while(finJeu) {
    if(choixOrdinateur === choixPersonne) {
        alert("Vous avez deviner le bon chiffre, félicitation!");
        var finJeu = false;
    }
    else {
        if (choixPersonne < choixOrdinateur) {
            alert("Le nombre est plus grand!");
            var choixPersonne = prompt("Choix de votre chiffre entre 0 et 100");
        }
    else {
            alert("Le nombre doit être plus petit!");
            var choixPersonne = prompt("choix de votre chiffre entre 0 et 100");
        }
    
    }
     
}


       