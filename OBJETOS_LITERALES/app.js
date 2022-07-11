// OBJETOS 
let snoopy = {
    nombre: 'Snoopy',
    perro: true,
    raza: 'Beagle',
    color: 'Blanco y Negro',
    dormir: function(){
        return `zzzzz...`
    }
}
let scoobyDoo = {
    nombre: 'Scooby',
    perro: true,
    raza: 'Gran Danes',
    color: 'Cafe',
    // METODO, QUE LO DEFINIMOS COMO FUNCION 
    hablar: function (){
        return `Mi nombre es ${this.nombre}, y soy un ${this.raza}`
    }
}

console.log(scoobyDoo)

console.log(`${scoobyDoo.nombre} es un ${scoobyDoo.raza}`)
console.log(`${snoopy.nombre} es un ${snoopy.raza} de color ${snoopy.color}`)
console.log(snoopy['raza'])
console.log(scoobyDoo.hablar())
console.log(snoopy.dormir())

console.log(`${scoobyDoo.nombre} es un perro color ${scoobyDoo.color}`)
// sobreescribir es muy sencillo, basta con reasignar el valor del objeto
scoobyDoo.color = 'Morado'
console.log(`${scoobyDoo.nombre} ahora es un perro color ${scoobyDoo.color}`)
// Borrar 
delete scoobyDoo.perro
console.log(scoobyDoo)
