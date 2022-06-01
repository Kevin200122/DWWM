let nomExterne = "Hein";
let  prenom = "George ";

function portee(nom) {
    let prenom = "Terieur ";
    nomGlobale = "Halle ";
    console.log(window.nomGlobale + nom + prenom);
    console.log(nomGlobale + nomExterne + prenom);
}

portee("Ex ");
console.log(prenom);

