// Comparamos si un numero esta en un rango
let x = 60

let valorDeVerdad = 0 < x && x <10

console.log(valorDeVerdad)

let usuario = "Juan"
let password = "1234"

let esUnUsuarioValido = usuario == "Carlos" && password == "1234"

if(esUnUsuarioValido){
    console.log("Bienvenido "+usuario)
    console.log("El día de hoy tu trabajo es ...")
}else{
    console.log("No eres bienvenido. Fuera de acá")
}

let n1 = "Adriana"
let n2 = "Adrian"

if(n1 > n2){
    console.log(n2 + " va antes que "+n1)
}else{
    console.log(n1 + " va antes que "+n2)
}


