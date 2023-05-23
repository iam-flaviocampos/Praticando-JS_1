/*
01) Crie uma função que dado dois valores
(passados como parâmetros) mostre no 
console a soma, subtração, multiplicação 
e divisão desses valores.
*/

function calculo (valor1, valor2){
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let mult = valor1 * valor2
    let div = valor1 / valor2
    
    let resultado = {
        soma: soma,
        subtracao: sub,
        multiplicacao: mult,
        divisao: div
    }

    return resultado
}

let numero1 = 10
let numero2 = 10

let resultado = calculo(numero1, numero2)
console.log(JSON.stringify(resultado, null, 2))