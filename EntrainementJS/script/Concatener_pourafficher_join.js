let monTableau = ['un', 'deux', 'trois', 'quatre'];
//Pour vérifier si ceci s'est bien transformer en une grosse chaine de caractère.
let chaine = monTableau.join();
//Pour transformer nos éléments de notre tableau en grosse chaîne de caractère avec join.
console.log(monTableau.join(', '));

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
//Pour afficher notre bloque d'élément en grosse chaine de caractère sur un tableau 2D même principe.
console.log(monTableau2D.join(', '));
//Pour que ceci soit avec plus de clarté, il est possible de remplacer la virgule par ceci le (/).
console.log(monTableau2D.join('/ '));

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};