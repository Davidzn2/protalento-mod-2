// let edad = parseInt(prompt('Cual es tu edad???'))

// if(edad<18){
//     document.querySelector('div.elementToEdit1').innerHTML = `
//         <h3>Pagina solo para mayores de edad</h3>
//         <p>Puedes ir a <a href="https://disney.com">disney</a></p>
//     `
// }else{
//     document.querySelector('div.elementToEdit1').innerHTML = `
//         <h3>Bienvenido</h3>
//         <p>Puedes ver mi pagina jaja</p>
//     `
// }

function saveName(){
    let name = document.getElementById('nombre').value
    console.log(name)
}

function changeStyle(){
    let element = document.getElementById("colorin");
    element.style.backgroundColor = "green";
}


function sumar(){
    let suma1 = parseInt(document.getElementById('suma1').value)
    let suma2 = parseInt(document.getElementById('suma2').value)
    suma = suma1 + suma2
    console.log(suma)
    document.querySelector('#resultado').innerHTML = `
        <h3>${suma}</h3>
    `
}
function restar(){
    let suma1 = parseInt(document.getElementById('suma1').value)
    let suma2 = parseInt(document.getElementById('suma2').value)
    operacion = suma1 - suma2
    document.querySelector('#resultado').innerHTML = `
        <h3>${operacion}</h3>
    `
}

function setValue(x){
    document.getElementById('calcu').value = x
}