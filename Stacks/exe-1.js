// Verificar si una cadena de paréntesis esta balanceada
// verify if a parenthesis string is balanced

function verificaBalance(cadena){
    const pila = [];
    for(let i=0; i < cadena.length; i++){
        const caracter = cadena[i];

        if(caracter === '('){
            pila.push(caracter);
        }
        else if(caracter===')'){
            if(pila.length === 0 || pila.pop() !== '('){
                return false;
            }
        }
    }
    // vacio la pila 
    return pila.length === 0;
}

const expresion1 = '((a + b) * (c - d))';
const expresion2 = '((a + b) * (c - d)';

const balaceado1 = verificaBalance(expresion1);
const balaceado2 = verificaBalance(expresion2);

console.log('Expresion 1 balanceada: ', balaceado1); // true
console.log('Expresion 2 balanceada: ', balaceado2); // false

