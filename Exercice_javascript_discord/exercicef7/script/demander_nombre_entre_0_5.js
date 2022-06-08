var nombre = prompt("Veuillez taper un nombre entre 0 et 5!");
if ( nombre <=  5) {
 
switch(nombre){
case 1: alert('un');
break;
case 2: alert('deux');
break;
case 3: alert('trois');
break;
case 4: alert('quatre');
break;
case 5: alert('cinq');
break;
}
alert("Vous avez taper un nombre correct et c'est: " + nombre);


}else if (nombre > 5){  
    alert("Vous n'avez pas taper un nombre correct! Veuillez recommencer!");
}