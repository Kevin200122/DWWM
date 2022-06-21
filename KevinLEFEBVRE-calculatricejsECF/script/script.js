
function CalculerIMC() {
    //condition effectuer selon chaque situation de la corpulance et IMC.

    let poids = document.getElementById('poids');//Récupére l'élément id poids
    poids = parseInt(poids.innerHTML);

    let taille = document.getElementById('lataille');//Récupére l'élément id du select
    taille = parseInt(taille.innerHTML);

    let imc = poids*10000 / (taille*taille);//formule de calcul de l'IMC
    alert(imc);imc=Math.round(imc);
    imc = parseInt(imc);
    
    console.log(poids);
    console.log(taille);
    console.log(imc);

    if (imc <= (poids=18.4/taille*taille)) {
        alert("Vous êtes bien maigre!");
        document.write("<p>Vous êtes en sous-poids!!</p>")
    }
    else if(imc > (poids=18.5/taille*taille) && imc <=(poids=24.9/taille*taille)){
        alert("Vous êtes de corpulence normal!!");
        document.write("<p>Vous avez un poids normal pas d'inquiétude.</p>")
    }
    else if(imc > (poids=25/taille*taille) && imc <=(poids=29/taille*taille)){
        alert("Vous êtes en surpoids!!");
        document.write("<p>Vous êtes en surpoids!</p>")
    }
    else if(imc > (poids=30/taille*taille) && imc <=(poids=34.9/taille*taille)){
        alert("Vous êtes en obésité modérée!!");
        document.write("<p>Vous êtes en obésité modérée!</p>")
    }
    else if(imc > (poids=35/taille*taille) && imc <=(poids=39.9/taille*taille)){
        alert("Vous êtes en obésité sévère!!");
        document.write("<p>Vous êtes en obésité sévère!! Attention!</p>")
    }
    else{
        alert("Vous êtes en obésité morbide!!");
    }
}
CalculerIMC();
