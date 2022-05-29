const titre = document.querySelector('h1');
const btn = document.querySelector('.btn');//Pour sélectionner notre bouton

//btn.addEventListener('click', presentation)/*Rajoute la class taille-txt au clique du bouton*/
//click est le nom de l'événement

function presentation(a, b) {
    titre.classList.add('taille-txt')//pour rajouter notre class css en javascript

    console.log(a + b);
}

presentation(2,5)
