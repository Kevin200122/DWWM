function perimetre( largeur, longueur) {
    var resultat = 0;
    // test si au moins un paramètre reçu
    if (!largeur) resultat = 0;
    else if (!longueur) resultat = 4*largeur;
    else if (arguments.lenght == 2);
    resultat = (largeur + longueur)*2;

  
    console.log(resultat);
}

perimetre();
perimetre(5);
perimetre(9,6);
perimetre(3,7,20,8);



