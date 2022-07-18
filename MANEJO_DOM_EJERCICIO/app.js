// Ejercicio: Cajero de Super.

// Hacer un formulario que pregunte: Nombre, Cantidad y Precio.
// Hacer 2 botones: (Agregar) y (Enviar). 
// Si se pone (Agregar), el artículo se agrega a una lista y  se borran los campos para que se pueda
//  agregar otro artículo.
// Si se pone (Enviar), Aparece el total a pagar (en un div o un alert)



var listaProds = []

function agregar() {
    var productoInput = document.getElementById('producto')
    var cantidadInput = document.getElementById('cantidad')
    var precioInput = document.getElementById('precio')
    listaProds.push(parseInt(precioInput.value) * parseInt(cantidadInput.value))
    alert('Se agrego el producto: ' + productoInput.value)
    productoInput.value = ''
    cantidadInput.value = 0
    precioInput.value = 0
}

function enviar() {
    let prods = 0
    for (let i = 0; i < listaProds.length; i++) {
        prods += listaProds[i]
    }
    alert(`El total de ventas es igual a $ ${prods} MXN`)
  
}