let monTableau = ['un', 'deux', 'trois', 'quatre'];
//Pour supprimer le dernier élément de notre tableau avec pop.
monTableau.pop();
//pour supprimer un élément au début de notre tableau avec shift.
monTableau.shift();
console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
//pour supprimer le premier élément de notre premier tableau 2D.
monTableau2D[0].shift();
console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
//Pour supprimer un élément de notre tablau associatif faire un delete entre paranthèses 
//mon tableau associatif et après un point pour ensuite mettre l'élément que nous souhaitons supprimer.
delete(monTableauAssociatif.poste);
console.log(monTableauAssociatif);