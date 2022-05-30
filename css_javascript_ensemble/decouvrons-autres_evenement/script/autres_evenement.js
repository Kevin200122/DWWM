const titre = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', presentation)
titre.addEventListener('mouseenter', presentation)
document.addEventListener('keydown', presentation)

function presentation() {


    // titre.classList.add('taille-txt')
    console.log("Touche pressée");
}