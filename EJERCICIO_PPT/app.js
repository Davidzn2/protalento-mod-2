// PIEDRA = 1
// PAPEL = 2
// TIJERA = 3
var user = prompt('Selecciona, 1 para piedra, 2 para papel, 3 para tijeras')
var maquina = Math.floor(Math.random() * 3)+1;

if (user == 1 && maquina == 2){
    alert('Gano la maquina(Papel gana a piedra)')
} else if(user == 1 && maquina == 3 ){
    alert('Ganaste! Felicidades (Piedra gana a tijera)')
} else if(user==2 && maquina == 1){
    alert('Ganaste! Felicidades (Papel gana a piedra)')
} else if (user == 2 && maquina ==3){
    alert('Gano la maquina (Tijera corta a papel)')
} else if (user == 3 && maquina == 1){
    alert('Gano la maquina (Piedra gana a tijera)')
} else if (user == 3 && maquina == 2){
    alert('Ganaste! (Tijera corta a papel)')
}else if (user == maquina){
    alert('Empate buuu')
} else{
    alert('Error, revisa que numero ingresaste')
}
