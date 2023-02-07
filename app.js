console.log('daje')

const numeriDispari = []
let numeroUtente 

while (numeriDispari.length < 10){
    numeroUtente = parseInt(prompt('Scegli un numero: '))
    let resto = numeroUtente % 2
    console.log(numeroUtente, resto)

    if (resto === 1){
        numeriDispari.push(numeroUtente)
        console.log(numeriDispari, numeriDispari.length)
    }
}

console.log(numeriDispari)