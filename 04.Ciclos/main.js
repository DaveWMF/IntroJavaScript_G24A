


let palabras = []

let respuesta = prompt("¿Qué agrego?");
while(respuesta != 'salir'){
    respuesta = prompt("¿Qué agrego?")
    palabras.push(palabras)
}

do {
    respuesta = prompt("¿Qué agrego?")
    palabras.push(palabras)
} while (respuesta != 'salir');


console.log("Tus palabras fueron:")
for(let i = 0; i< palabras.length; i++){
    console.log(palabras[i])
}