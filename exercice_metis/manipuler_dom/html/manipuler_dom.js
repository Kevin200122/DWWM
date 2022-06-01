function affiche(){ let radiobuttonSemaine = document.getElementById('semaine'); let radiobuttonWeekend = document.getElementById('weekend');
let resultat = document.getElementById('resultat');
   if (radiobuttonSemaine.checked){
       radiobuttonWeekend.checked = false ;
        resultat.value = "semaine";
   }
   else if (radiobuttonWeekend.checked){
       radiobuttonSemaine.checked = false ;
       resultat.value = "weekend";
   }
   else{
       resultat.value = "Pas de valeur choisie .";
   }
}
function decocheSemaine(){
    let radiobuttonSemaine = document.getElementById('semaine'); radiobuttonSemaine.checked = false ;
}
function decocheweekend(){
    let radiobuttonWeekend = document.getElementById('weekend'); radiobuttonWeekend.checked = false ;
}