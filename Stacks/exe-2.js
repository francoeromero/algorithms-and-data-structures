// verificar si una palabra es palindromo
function esPalindromo(palabra){
    const pila = [];
    const palabraSinEspacios = palabra.toLowerCase().replace(/\s/g,'');

    for(let i = 0; i < palabraSinEspacios.length; i++){
        pila.push(palabraSinEspacios[i]);
    }

    let palabraReversa = '';

    while(pila.length > 0){
        palabraReversa += pila.pop();
    }

    return palabraSinEspacios === palabraReversa;
}

const palabra1 = 'oso';
const palabra2 = 'casa';

if (esPalindromo(palabra1)) {
    console.log(`La palabra "${palabra1}" es un palíndromo.`);
} else {
    console.log(`La palabra "${palabra1}" no es un palíndromo.`);
}

if (esPalindromo(palabra2)) {
    console.log(`La palabra "${palabra2}" es un palíndromo.`);
} else {
    console.log(`La palabra "${palabra2}" no es un palíndromo.`);
}