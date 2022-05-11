//function crieDeGuerre() {

    //let crie = "Toujours plus fort!"; // ceci est une variable locale.
   // console.log(crie);

//}

//voici comment changer notre fonction locale en globale.
//Tout d'abord créer notre fonction au tout début de notre code.

let crie = "Toujours plus bas !"; //notre variable globale

function crieDeGuerre() {
    crie = "Toujours plus fort !";
    console.log(crie);
}

crieDeGuerre();
console.log(crie);