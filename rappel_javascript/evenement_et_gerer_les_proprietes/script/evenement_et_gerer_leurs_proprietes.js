const bloc = document.querySelector('.bloc');
const titre = document.querySelector('h1');

/*bloc.addEventListener('click', (event) => {
    console.log(event);//Fourni les propriétés de l'événement au clic de la souris.
})*/

let posX = 0;
let posY = 0;

//bloc.addEventListener('mousedown', (event) => {

    //console.log(event)//Evenement se déclanchant pendant le click prolongé de la souris.

//})


bloc.addEventListener('mousemove', (event) => {

    console.log(event)

    posX = event.clientX;
    posY = event.clientY;

    titre.innerText = 'posX : ${posX}, posY: ${posY}';// les cooordonnées de X et de Y s'affichent en dessus de notre bloc couleur
    //Et les valeurs changent au mouvement de la souris.

})