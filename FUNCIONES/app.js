function suma(x, y){
    return x + y
} 

var resultado = suma(12, 7)

function menor(x, y){
    if (x < y){
        return x
    } else if (y < x){
        return y
    }
}

var revision = menor(99, 88)
console.log (revision, 'es el numero menor')



let nombre = 'David'

function saludar(name){
    return 'Hola ' + name
}

var saludo = saludar(nombre)