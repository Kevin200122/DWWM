const premierTitre =document.getElementsByClassName('premier-titre'); //Pour récupérer notre class qui est ici un tableau
const premierID =document.getElementById('premier-id'); //Pour récupérer notre id
const titreNu = document.querySelector('h3');//ici il faut préciser quoi récupérer(cartout peut être récupérer donc il faut préciser.
const allitems = document.querySelectorAll('.item-liste')// fais afficher un tableau dans notre console log
const liste = document.querySelector('ul');
const i2 = document.querySelector('.i2');

/*console.log(liste.childrenNodes);*///Pour afficher tout les noeux du document. //remarque avec ça nous pouvons voir les commentaires

//console.log(i2.nextSibling);// Cible les éléments de même fratrie 

console.log(i2.nextElementSibling);//Nous fais voir quelle élément est après celui-ci.(next qui veut dire après)