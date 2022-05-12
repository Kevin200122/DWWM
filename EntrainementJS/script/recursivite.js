//Afficher le nombre de seconde

function timer(secondes) { // le paramètre vaut 10 avec en bas de notre code (timer (10)).

    if(secondes > 0) {// rappelle de notre fonction à l'intérieur d'elle-même
        console.log(secondes);
        timer(secondes - 1); // Va renvoyer 9

                //afficher 9
                //timer(8)

                    //afficher 8
                    //timer(7)
    }
    else {
        console.log(secondes);
    }

}

timer(10);