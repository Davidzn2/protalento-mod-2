var coches = ['Ferrari', 'Mercedes', 'Porsche', 'Lambo','Porsche']
console.log(coches)
coches.push('VW')
console.log(coches)

var cantidadCoches = coches.length
console.log('tengo:', cantidadCoches, 'coches')

var variadito = ['Juguetes', 90, false, 1.23]
console.log(variadito)
variadito[2] = true
console.log(variadito[2])
console.log(typeof(variadito[1]))
variadito.pop()
console.log(variadito)

var nombres = 'Arling Antonio Brayan Carlos Daniel'
console.log(nombres)
var arrayDeNombres = nombres.split(' ')
console.log(arrayDeNombres)

var verduras = ['Zanahoria', 'Calabaza', 'Tomate', 'Cilantro', 'Maiz']
console.log(verduras.slice (2,4))

var combined = coches.concat(verduras)

console.log(combined)