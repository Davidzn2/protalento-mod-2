const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')
const btnForm = document.querySelector('#submitButton')
const form = document.querySelector('#form1')
const h1 = document.querySelector('h1')

h1.innerText = 'Hola <br> Mundo'
console.log({h1})

form.addEventListener('submit', sumarValores)

function sumarValores(event) {
    event.preventDefault()
    console.log({ event })
    console.log(parseInt(calculo1.value) + parseInt(calculo2.value))
}