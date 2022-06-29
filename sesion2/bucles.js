var i = 0;

// while(i < 10){
//     console.log(i)
//     i = i +1
// }

var a = Math.floor(Math.random() * 3)+1;
console.log(a)


//Usuario entra numero entre 1 y 3
// Reglas, 1 == Piedra, 2 == Papel, 3 == Tijera
var user = 3
var maquina = Math.floor(Math.random() * 3)+1;
if (user == 1 && maquina == 2){
    console.log('gana la maquina')
}