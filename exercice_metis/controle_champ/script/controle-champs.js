function validationEmail () {
    var email = document.leformulaire.email.value;
    var verification = /[a-zA-Z0-9.-]{1,3}[^<>,¤][^$ù%&?!]+@[a-zA-Z0-9.-]{1,3}[^<>£¤!?][^0-9][.][^$ù%&][^0-9][a-z]/
    if (verification.Regexemail(email) == false) 
    {
        alert('Votre mail est incorrecte, veuillez la re-saisir!');
        return false;
    }
    else
    {
        alert('Votre mail est correct , vous pouvez continuer.');
        return true;
    }
}