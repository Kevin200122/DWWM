document.body.onload = function () {//Au chargement de la page nous appelons une fonction anonyme
    nbr = 5;/*Pour indiqué le nombre d'images*/ 
    p = 0;/*La position est à zéro */
    container = document.getElementById("container");//Pour récupérer les éléments du container .
    g = document.getElementById("g");//Pour récupérer les éléments du bouton gauche pour le carrousel
    d = document.getElementById("d");//Pour récupérer les éléments du bouton droit pour le carrousel
    container.style.width = (800 * nbr) + "px";//Pour modifier la largeur du container
    for (i = 1; i <= nbr; i++) {//Pour afficher nos 5 images dans le carrousel
        div = document.createElement("div");//Pour insérer les images dand la div
        div.className = "photo";//Pour créer un nom de class pour les 5 images
        div.style.backgroundImage = "url('../images/image"+i+".jpg')";//pour intégrer nos images sur notre background image.
        container.appendChild(div);//Pour ajouté nos div dans notre div principale
    }
    afficherMasquer();
}
    g.onclick = function () {//Pour programmer notre bouton gauche du carrousel
        if(p>-nbr+1)//Pour limiter notre button dès que quatre images ont défilé , le carrousel s'arrête.
            p--;
        container.style.transform="translate("+p*800+"px)";//p multiplié par la largeur des images.
        container.style.transition="all 0.5s ease";//Transition effectué au carousel via le css dans le js.
        afficherMasquer();
    }
    d.onclick = function () {
        if(p<0)//Pour programmer notre bouton droit de notre carrousel
            p++;
        container.style.transform="translate("+p*800+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
    function afficherMasquer(){//Ici Condition pour afficher ou non nos boutons du carrousel
    if(p==-nbr+1)
        g.style.visibility="hidden";
    else
        d.style.visibility="visible";
    if(p==0)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
    }