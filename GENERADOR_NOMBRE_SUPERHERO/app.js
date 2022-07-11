function generateSuperHeroName() {
    let NOMBRES_A = [
        'El Volador',
        'El Escalador',
        'El Nadador'
    ]

    let NOMBRES_B = [
        'danzante',
        'cantante',
        'estresante'
    ]

    let NOMBRES_C = [
        'de Mexico',
        'de Colombia',
        'de Marte',
        'de Japon'
    ]
    let posicionA = Math.floor(Math.random() * NOMBRES_A.length)
    let posicionB = Math.floor(Math.random() * NOMBRES_B.length)
    let posicionC = Math.floor(Math.random() * NOMBRES_C.length)
    return  `${NOMBRES_A[posicionA]}  ${NOMBRES_B[posicionB]} ${NOMBRES_C[posicionC]}`
}

let superNombre = generateSuperHeroName()

alert(`Tu nombre de SuperHeroe es ${superNombre}`)