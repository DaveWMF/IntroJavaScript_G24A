
let frutas = ["Platano", "Kiwi", "Limón"]

frutas.push("Manzana") // Mete el dato al final de la lista
console.log(frutas)

frutas.pop() // Saca el dato desde el final de la lista
console.log(frutas)

frutas.unshift("Jitomate") // Coloca el dato al inicio del arreglo
console.log(frutas)

frutas.shift() // Elimina el primer dato del arreglo
console.log(frutas)

let frutasEnCadena = "uvaochofresaochoperaochomanzana"
let frutas2 = frutasEnCadena.split("ocho")
console.log(frutas2)

//frutas2 = frutas2.slice(1, 3)
console.log(frutas2.slice(1, 3))
console.log(frutas2)

console.log(frutas2.splice(1, 1, "Papaya"))
console.log(frutas2)

frutas2.sort()
console.log(frutas2)

frutas2.reverse()
console.log(frutas2)

let todasLasFrutas = frutas.concat(frutas2)
todasLasFrutas.sort()
console.log(todasLasFrutas)

// Para poner corchetes
// ALT + 91

// Ejemplo con objetos
// [{usuario: "Pepe", password: "1234"}, {usuario:"Pato", password:"ganso"}]
