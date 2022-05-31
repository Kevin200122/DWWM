const liste = document.querySelector('.liste');
const btn = document.querySelector('btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () =>{
    console.log("Bonjour tout le monde!");
})

xhr.onload('Get', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
    //console.log(JSON.parse(xhr.response));
    console.log(xhr.response);
}

xhr.send();