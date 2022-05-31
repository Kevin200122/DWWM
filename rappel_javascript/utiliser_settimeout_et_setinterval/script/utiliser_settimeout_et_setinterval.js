//setTimeout(() => {
    //console.log("Bonjour tout le monde")
//}), 2000;// La fonction va s'éxécuter après 2 seconde de chargement(une seule fois seulement).

confirmnsole.log("Bonjour");

//clearTimeout(timeout);//empêche l'éxécution de notre function présentatation et n'éxécute que le premier élément bonjour.

let compteur = 0;

clearInterval(setInterval( incrementation, 1000));// supprime l'événement à répétition du setInterval.
//setInterval(incrementation, 1000);//Ceci va se déclancher plusieurs fois toutes les 1 seconde.

function incrementation() {
    compteur++;//Veut dire ici égale à compteur +1 .
    console.log(compteur);
}