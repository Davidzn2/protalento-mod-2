//1.  Crea un programa que solicite al usuario 2 números entre 1 y 50. 
//2. Posteriormente mostrar en consola los números del 1 hasta el 50, 
//3. pero añadir el mensaje “¡Lotería!' solo al mostrar los números indicados por el usuario.

/*
var num_user_1 = parseInt(prompt('Ingresa un numero del 1 al 50'))
var num_user_2 = parseInt(prompt('Ingresa otro numero del 1 al 50'))

var i = 0
while (i < 50) {
    i++
    if (num_user_1 == i || num_user_2 == i) {
        console.log(i, '¡Lotería!')
    } else {
        console.log(i)
    }
}
*/

// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y
// muestre en consola solo los elementos que son tipo número.

// var arreglo = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero']

// for (var i = 0; i < arreglo.length; i++) {
//     if (typeof(arreglo[i]) == 'number') {
//         console.log(arreglo[i])
//     }
// }


var arreglo = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero']
var strings = []
var numbers = []
for (var i = 0; i < arreglo.length; i++) {
    if (typeof(arreglo[i]) == 'number') {
       numbers.push(arreglo[i])
    } else if(typeof(arreglo[i])== 'string'){
        strings.push(arreglo[i])
    }
}

