let monTableauAssociatif ={
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

//Creation d'une fonction qui prend en paramètre un tableau associatif.
//Et qui va à l'intérieur, faire un console.log de notre chaine de caractère.
//qui l'aura créer en fonction de notre tableau associatif.
function concatener(tableau) {
    let chaine = '';

    for(const valeur in tableau) {

        chaine += (valeur + ' : ' + Tableau[valeur] + '\n');// pour récupérer correctemment les élèments de notre tableau.

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);