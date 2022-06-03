//var p = document.querySelector('p');
var ps = document.querySelectorAll('p');//Pour prendre tout les paragraphes
for (var i = 0; i < ps.length; i++) {
    //var p = ps[i];
    //var rougit = function () {
    this.classList.toggle('red');//pour mettre en rouge au click chaque paragraphes, si le premier paragraphe est click il sera rouge
    //Et si le deuxième paragraphe est click alors ça sera lui à la place qui deviendra rouge.
    //Le toggle iras sur l'événement ou nous aurons cliquer ici des paragraphes.
    //p.addEventListener('click', rougit)//Ceci va exécuter le paramètre demandé qui ici est rougit qui va intensifier sa couleur rouge.


    p.addEventListener('mouseover', function () {//Permet de mettre un paragraphe en rouge au survol de la souris.
        this.classList.add('red');
    })
    p.addEventListener('mouseout', function () {//Retire la couleur rouge au paragraphe dès que la souris quitte le paragraphe.
        this.classList.remove('red');
    })

}