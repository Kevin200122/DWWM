
var cache = Cachediv;
var affiche = Afficherdiv;
function Cachediv() {
    button.addEventListener('mousedown', (event) => {
        document.getElementById('postit').innerHTML = "";
    });
    function Afficherdiv() {
        button.addEventListener('mousedown', function () {
            this.classList.add("Merci d'avoir cliqué sur moi.")
        });
        p.addEventListener('mouseover', function () {
            this.classList.add = ("Merci de bien vouloir me survoler!");
        });
    }
}
