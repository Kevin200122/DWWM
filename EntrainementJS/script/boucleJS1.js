let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    panier[fruit] = 'pomme';    //Pour remplacer (fraise, banane, poire par pomme.
}

console.log(panier);
//Résultat: ['pomme', 'pomme', 'pomme'];