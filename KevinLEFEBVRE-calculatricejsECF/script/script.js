

var poid = document.querySelector('.poid');

var taille = document.querySelector(".taille");

imc = poid / (taille/100 * taille/100);

//     let input1 = document.quryselector(".input1");
//     let button = document.querySelector(".button1");
//     button.disabled = true;
// input1.addEventListener()
// // function ActiverButton(){
// //     if (document.querySelector(".input1").value === ""){
// //         button.disabled = true;
// //     }else{
// //         button.disabled = false;
// //     }
// // }
// // ActiverButton();


function CalculerIMC() {
    //condition effectuer selon chaque situation de la corpulance et IMC.

    const button = document.querySelector('button');
    button.disabled = false;
    if (imc <= 18.4) {
        alert("Vous êtes bien maigre!");
    }
    if(imc > 18.5 && imc <=24.9){
        alert("Vous êtes de corpulence normal!!");
    }
    if(imc > 25 && imc <=29){
        alert("Vous êtes en surpoid!!");
    }
    if(imc > 30 && imc <=34.9){
        alert("Vous êtes en obésité modérée!!");
    }
    if(imc > 35 && imc <=39.9){
        alert("Vous êtes en obésité sévère!!");
    }
    else if(imc > 40){
        alert("Vous êtes en obésité morbide!!");
    }
}
CalculerIMC();