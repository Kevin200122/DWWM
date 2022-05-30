const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation(){

    btn.classList.toggle('active') /*rajoute ou enlève l'événement au click*/
}
