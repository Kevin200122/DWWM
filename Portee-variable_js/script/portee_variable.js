let variableLet = "globale"; //La portée de la variable est globale dans tout notre Javascript.
var variableVar = "globale";//La portée de la variable est globale dans tout notre Javascript.

//une condition qui sera faite pour être toujours vrai
if(true) {

    let variableLet = "locale";
    var variablevar = "locale";

    //petite vérification avec une concatenation avec console.log pour voir quelle variable sera prioritaire entre la locale et la globale.
    console.log("let : " + variableLet);
    console.log("var : " + variableVar);

}
//Concatenation pour voir quelles variables seront pris en dehors de la boucle.
console.log("let : " + variableLet);
console.log("var : " + variableVar);

//Resultat notre console montre bien notre let et var dans la boucle sont bien locale. 
//En revenche pour les variables globale et bien seulement la variable déclarer en let et reconnue globale, 
//et la var en dehors de la boucle reste locale car la boucle détruit notre var globale,à l'inverse de let 
//qui elle peut faire le rôle du locale et globale sans problème.
//Donc un grand conseil utiliser plus le let que le var pour vos programmations futures pour ça.