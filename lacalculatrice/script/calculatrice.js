//Fonction pour additionner des nombre
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

//Function pour multiplier des nombres.
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

//Fonction pour soustraire les nombres
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

//fonction pour diviser des nombres
//Pour déclarer à l'utilisateur qu'il est interdit de diviser par 0.
function division(nombreA,nombreB) {
    if(nombreB == 0){
        throw new Error("Impossible de diviser par 0.")
    }

    return nombreA / nombreB;
}

// On rentre dans la boucle principale
let restart = false; //cette variable vaut false ce qui veut dire que par défaut, nous reprosons par un calcul

//Pour créer une boite de dialogue afin que l'utilisateur choisisse si il veut faire (Adiition ou Multiplication ou Soustraction ou Division).
//Plus la méthode number pour changer une valeur en nombre
do{
    var choix = Number (prompt("Que soutaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
} while(choix !=1 && choix !=2 && choix != 3 && choix !=4)

//Pour demander à l'utilisateur deux valeurs et pour les transformer en nombres.
//Pour vérifier également que l'utlisateur aura bien taper des nombre avec while.
//ne pas oublier try qui sert à vérifier nos exceptions(erreurs) 
//sans ça, nos messages d'erreur de notre méthode (throw) s'afficherons mal. 
do{
    var premierNombre = Number (prompt("Entrer un premier nombre :"));
    var deuxiemeNombre = Number (prompt("Entrez un deuxième nombre :"));
}while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

try{
    switch(choix) {
    case 1:
        var resultat = addition(premierNombre, deuxièmeNombre);
        break;

    case 2:
        var resultat = multiplication(premierNombre, deuxiemeNombre);
        break;
    case 3:
        var resultat = soustraction(premierNombre, deuxiemeNombre);
        break;

    case 4:
        var resultat = division(premierNombre, deuxièmeNombre);
        break;

      default:
          //Pour déclarer une exception(une erreur).
          throw new Error("une erreur est survenu.");
    }
    //pour pas afficher un résultat underfined nous déplaçons ce code dans le try.
    alert("voici le résultat : " + resultat);
}
catch(error) {
    alert(error);// si une erreur est survenue, on affiche l'erreur
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?");//on demande grâce à la boite de dialogue confirm()si l'utilisateur veut recommencer
} while(restart);

//pour vérifier le choix de l'utilisateur avec un switch.

