function somme(nombre) {
    if (nombre == 1) {
        return 1;
    }

    return nombre + somme(nombre - 1); // la somme est 1

        // retourner 2 + somme(1)

            //retourner 1

        // 3 + 2 + 1
        //Le résultat de la console sera donc 6.

}

console.log(somme(3));