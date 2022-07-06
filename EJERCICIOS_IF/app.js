// 1. Solicitar al usuario que ingrese dos números
// 2. mostrar cuál  de los dos es menor. 
// 3.  No considerar el caso en que ambos números son iguales.

var num1 = parseInt(prompt('Ingresa tu primer numero'))
var num2 = parseInt(prompt('Ingresa tu segundo numero'))

if (num1 < num2){
    alert(num1 + ' es menor que '+ num2)
} else if (num2 < num1){
    alert(num2 + ' es menor que '+ num1)
}
