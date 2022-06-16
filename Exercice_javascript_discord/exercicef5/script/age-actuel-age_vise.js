
    var VotreAge = prompt("Veuillez taper votre age:");
    var NombreJours = VotreAge*365;//Nous calculons le nombre de jour par apport à l'age (donc age*365 )
    alert("Vous avez vécu " + NombreJours + " jours.");/*Affiche le nombre de jours vécu dans un message d'alerte.*/
    EcartAgeVise(); /*Pour appeller notre fonction écart visé.*/

    function EcartAgeVise() {/*Création de notre fonction pour calculer le nombre de jours restant de l'âge visé par l'utilisateur.*/
        let AgeVise = prompt("Veuillez tapez un age que vous visez!");
        QuantiteJours = AgeVise*365;/*Quantité jour est égal à l'âge visé multiplié par le nombre de jour par année soit 365 jours.*/
        alert("Si vous avez vécu " + NombreJours + ", il y a encore " + (QuantiteJours-NombreJours) + " avant vos " + AgeVise );
        /*Nous faisons un calcul en faisant la soustraction entre quantité jours qui est l'âge visé et le nombre de jour déjà vécu.*/

        if(AgeVise <= VotreAge) {
            alert("Votre age visé est plus petit que votre age actuel recommencer!!");
            EcartAgeVise();/*(IMPORTANT!!)Nous rappelons notre fonction, si l'âge visé est inférieur ou égal à l'age actuel.
            Ce qui est normal, car il est impossible de rajeunir donc forcément ceci créer une erreur.*/
        }else{
            
                alert("Si vous avez vécu " + NombreJours + ", il y a encore " + (QuantiteJours-NombreJours) + " avant vos " + AgeVise );  
        }
    }

   