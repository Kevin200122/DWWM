
function multiplication() {
    var lenombre1, lenombre2, resultat;
    lenombre1 = prompt("Entrez le premier nombre");
    lenombre2 = prompt("Entrez le deuxième nombre");

    resultat = parseInt(lenombre1) * parseInt(lenombre2);

    alert("Ces nombres " + lenombre1 + " et " + lenombre2 + " ont bien un résultat de " + resultat);
}
multiplication();

function addition() {
    var lenombre1, lenombre2, resultat;
    lenombre1 = prompt("Entrez le premier nombre");
    lenombre2 = prompt("Entrez le deuxième nombre");

    resultat = parseInt(lenombre1) + parseInt(lenombre2);

    alert("Ces nombres " + lenombre1 + " et " + lenombre2 + " ont bien un résultat de " + resultat);
}
addition();

function soustraction() {
    var lenombre1, lenombre2, resultat;
    lenombre1 = prompt("Entrez le premier nombre");
    lenombre2 = prompt("Entrez le deuxième nombre");

    resultat = parseInt(lenombre1) - parseInt(lenombre2);//Méthode parseInt() pour convertir string en nombre

    alert("Ces nombres " + lenombre1 + " et " + lenombre2 + " ont bien un résultat de " + resultat);
}
soustraction();

function division() {
    var lenombre1, lenombre2, resultat;
    lenombre1 = prompt("Entrez le premier nombre");
    lenombre2 = prompt("Entrez le deuxième nombre");

    resultat = parseInt(lenombre1) / parseInt(lenombre2);

    alert("Ces nombres " + lenombre1 + " et " + lenombre2 + " ont bien un résultat de " + resultat);
}
division();

//Exercice 2 réussi!! :)