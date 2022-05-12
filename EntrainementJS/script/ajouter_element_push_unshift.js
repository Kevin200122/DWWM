let monTableau = ['un', 'deux', 'trois', 'quatre'];
//Pour rajouter un élément à la fin de notre tableau avec push.
monTableau.push('cinq');
//Pour rajouter un élément au début de notre tableau avec unshift.
monTableau.unshift('zero');
//console.log(monTableau);

let monTableau2D = [
    ['Mark', 'jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.push('test'); //Pour rajouter un élément à notre tableau 2D à la fin.
monTableau2D[1].unshift('test'); //Pour rajouter notre élément au début de notre deuxième tableau 2D.

let monTableauAssociatif = {
    'prenom'    :   'Mark',
    'nom'   :   'Zuckerberg',
    'poste' :   'PDG de Facebook'
};
//Pour rajouter un élément à la fin de notre tableau  associatif.
monTableauAssociatif['nationalite'] = 'Américaine';
console.log(monTableauAssociatif);