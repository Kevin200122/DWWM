//algo de calcul de nombre heures, minutes et secondes écoulées

var starTime = new Date();
decompte = setInterval(function () {
    //1 Convertir en secondes :
    var seconds = Math.round(
        (new date().getTime() - starTime.getTime()) / 1000
        + e.target.paramTps);

    //2 Extraire les heures :
    var hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;

    //3 Extraire les minutes :
    var minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    //4 Afficher dans le span
    chronoP.innerHTML = ajouteUnZero(hours)
        + ":" + ajouteUnZero(minutes)
        + ":" + ajouteUnZero(seconds);

    // 5 incrémenter le nombre de secondes:
    tpsEcoule += 1;

}, 1000); //fin de function anonyme dans SetInterval