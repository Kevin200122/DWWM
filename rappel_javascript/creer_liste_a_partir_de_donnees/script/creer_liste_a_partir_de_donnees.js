const liste = document.querySelector('.liste');
const btn = document.querySelector('btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () =>{
    


xhr.onload('Get', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
        //console.log(JSON.parse(xhr.response));
        console.log(xhr.response);

        for(i = 0; i < xhr.response.length; i++) {

            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement
            ('h2');
            let newBodyCarte = document.createElement
            ('p');

            newTitreCarte.innerText =

        }
    }

    xhr.send();
})