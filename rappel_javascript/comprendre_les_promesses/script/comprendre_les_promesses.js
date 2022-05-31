const promise1 = new Promise ((resolve, reject) =>{

    console.log("Hello asychrone"); //Exécute ceci de manière asychrone.

    resolve('les données sont la!')//Envoi l'argument à la console avec resolve. // Et aussi grâce à cette méthode la promesse est faite
})//resolve sert pour dire que ce que lui demandons fonctionne et pour reject c'est l'inverse.

promise1.then((value) => {
    console.log(value);//Nous récupérons les données exécuter avec value de promise.then.
    // En bref une méthode pour vérifier si notre code à fonctionner
})//si nous avons une erreur lors de l'éxécution la méthode .catch peut résoudre le problème rencontré.

console.log(promise1);//Envoie un objet dans notre console.

