// Verificar si una cadena de paréntesis esta balanceada
// verify if a parenthesis string is balanced

function verificaBalance(cadena){
    // se crea una lista vacia
    const pila = [];
    // SENTENCIA CICLICA para que pase la cadena por cada caracter
    for(let i = 0; i < cadena.length; i++){
        // una variable sera que reemplaze cadena[i]
        const caracter = cadena[i];
        // SENTENCIA CONDICIONAL
        // si el caracter es '(' lo voy a meter a la lista
        if(caracter === '('){
            pila.push(caracter);
        }
        // si el caracter no es '(' pregunto si es ')'
        else if(caracter===')'){
            // si tiene ')' entonces verificamos si la pila:
                // si tiene algun elemento si no tiene false
                // si el ultimo elemento es ')'
            if(pila.length === 0 || pila.pop() !== '('){
                return false;
            }
        }
    }
    return pila.length === 0;
}

const expresion1 = '((a + b) * (c - d))';
const expresion2 = '((a + b) * (c - d)';

const balaceado1 = verificaBalance(expresion1);
const balaceado2 = verificaBalance(expresion2);

console.log('Expresion 1 balanceada: ', balaceado1); // true
console.log('Expresion 2 balanceada: ', balaceado2); // false
