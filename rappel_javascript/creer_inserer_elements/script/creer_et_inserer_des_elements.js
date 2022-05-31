const premierTitre = document.querySelector('premier-titre');
const premierID = document.getElementById('premier-id');
const titreNu = document.querySelector('h3');
const allItems = document.querySelectorAll('li');
const liste = document.querySelector('ul');
const i2 = document.querySelector('.i2');

premierTitre.innerText = 'Hello world depuis le JS!';//Pour rajouter du texte en JS.

const parent = document.querySelector('parent');

parent.innerHTML = '<p> Un nouveau texte</p>';// rajoute un élément html dans notre document.

let nouveauElement = document.createElement('li');// pour créer un nouvel élément html. ici c'est un li.
nouveauElement.innerText = "Nouvel item !";// Ici nous lui mettons du contenu.
//liste.appendChild(nouveauElement);// Et ici nous l'affichons dans la console et celui-ci se place en dessous des autres li.
document.body.appendChild(nouveauElement);// notre li s'est rajouté ici après notre ul.

//Important quand nous ajoutons un élément, il faut qu'il ne soit ajouté que une seul fois.

