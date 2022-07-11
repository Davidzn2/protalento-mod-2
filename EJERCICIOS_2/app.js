// Crea un programa que imprima en consola los números impares del 1 al 50.

function impares(){
    for (var i = 0; i<50; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
function pares(){
    let arrayPares = []
    for (var i = 0; i<= 50; i++){
        if(i % 2 == 0){
            arrayPares.push(i)
        }
    }
    return arrayPares
}
let a = pares()
console.log(a)
// Todos los numeros multiplos de 5 del 1 al 50