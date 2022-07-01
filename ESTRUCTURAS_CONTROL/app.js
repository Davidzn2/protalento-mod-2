var edad = 28

if (edad >= 18) {
    console.log('Esta persona es mayor de edad')
} else {
    console.log('Esta persona es menor de edad')
}

var semaforo = 'Negro'

if (semaforo == 'Verde') {
    console.log('Pase')
} else if (semaforo == 'Amarillo') {
    console.log('Lento, lento')
} else if (semaforo == 'Rojo') {
    console.log('Frenaaaaaa!')
} else {
    console.log('Error en el semaforo, ten mucho cuidado')
}


var vestidoHoy = 'gangster'

if (vestidoHoy == 'ejercicio'){
    document.write('<img src="https://assets.reebok.com/images/w_600,f_auto,q_auto/a0a0e19ee72b49219756aae100dd0a03_9366/Pants_deportivos_Trackster_Workout_Ready_Negro_FJ4057_01_standard.jpg">')
}else if(vestidoHoy=='gangster'){
    document.write('<img src="https://i.pinimg.com/474x/35/7d/1f/357d1ff9e150c798df84cdb31da3ab8c--hunting-outfits-vintage-man.jpg">')
}else if(vestidoHoy=='elegante'){
    document.write('<img src="https://cdn-0.somosmamas.com.ar/wp-content/uploads/2019/06/esmoquin.jpg">')
}else{
    document.write('<p>No comprendo</p>')
}

// 1. Pregunte  tipo de ropa (5 preguntas)
// 2. Muestre la foto
// 3. Si no esta la opcion, me diga esa opcion no existe


var vestimenta = prompt('Ingresa el tipo de vestimenta que quieres usar')
if (vestimenta == 'gangster') {
    document.write('<img src="https://i.pinimg.com/474x/35/7d/1f/357d1ff9e150c798df84cdb31da3ab8c--hunting-outfits-vintage-man.jpg">')
} else {
    if (vestimenta == '') {
        document.write('<img src="https://cdn-0.somosmamas.com.ar/wp-content/uploads/2019/06/esmoquin.jpg">')
    } else {
        if (vestimenta == 'ejercicio') {
            document.write('<img src="https://assets.reebok.com/images/w_600,f_auto,q_auto/a0a0e19ee72b49219756aae100dd0a03_9366/Pants_deportivos_Trackster_Workout_Ready_Negro_FJ4057_01_standard.jpg">')
        } else{
            document.write('<p>No comprendo</p>')
        }
    }
}
// If anidado
var x = 8;
if(x <= 8){
    console.log('hola')
}else{
    if(x<=7){
        console.log('hola')
    }
}

