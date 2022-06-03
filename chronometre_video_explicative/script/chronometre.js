let chrono = document.getElementById("chrono");
let resetbutton = document.getElementById("reset");
let stopbutton = document.getElementById("stop");
let startbutton = document.getElementById("start");

let timeout;

let estArrete = true;

const demarrer = () => {
    if (estArrete) {
        defilerTemps();
    }
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        cleartimeout(timeout);
    }
};

const defilerTemps = () => {
    if (estArrete) return;

    secondes = parseInt(secondes);//La méthode ParseInt permets de créer nos secondes,minutes, heures
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++;

    if (secondes == 60) {//Si les secondes sont à 60, alors secondes se remets à 0, mais rajoute 1 minutes.
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {//Si les minutes sont à 60, alors minutes se remets à 0, mais rajoute 1 heures.
        heures++;
        minutes = 0;
    }


    //Affichage 
    if (secondes < 10) {
        secondes = "0" + secondes;// Pour mettre deux chiffres à la place de 1 dans les secondes.
    }
    if (minutes < 10) {
        minutes = "0" + minutes;//Idem pour les minutes.
    }
    if (heures < 10) {
        heures = "0" + heures;//Idem pour les heures.
    }
    chrono.textContent = '${heures}:${minutes}:${secondes}';

    timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    cleartimeout(timeout);
};

startbutton.addEventListener('click', demarrer);
stopbutton.addEventListener('click', arreter);
resetbutton.addEventListener('click', reset);


