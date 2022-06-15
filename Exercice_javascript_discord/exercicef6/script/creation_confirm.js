function ConfirmerMessage() {
    var resultat = confirm("Voulez-vous vraiment faire cela?");//Pour afficher le message à l'utilisateur.
    console.log(resultat);

    if(resultat) {
        console.log('on va afficher le soleil');
        document.body.style.backgroundImage  ="url('https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/1e5454ed-583f-4816-9d8b-8e368fb430c1/870x489_gettyimages-1194700824.jpg')";
        //Pour changer l'image de fond en cliquant sur ok.
}
}


function AnnulerMessage () {
    var resultat2 = confirm("Voulez-vous vraiment faire cela?");//Pour afficher le message à l'utilisateur.
    console.log(resultat2);

    if(resultat2) {
        console.log('On va afficher la piscine');//Pour dire ce message sur la console du navigateur

        document.body.style.backgroundImage  = "url('https://www.mascotarios.org/wp-content/uploads/2017/12/Guacamayo-cubano-1.jpg')";
        //Pour changer l'image de fond en cliquant sur Annuler
    }
}

