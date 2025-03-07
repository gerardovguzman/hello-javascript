/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set         AL SET NO SE LE PUEDEN AGREGAR ELEMENTOS DUPLICADOS
// Declaración
let mySet = new Set()
//console.log(mySet)

// Inicialización
mySet = new Set(["Gera","Guzman","gerardovguzman",44,true,"soltero","padre"])
//console.log(mySet)

// MÉTODOS COMUNES
// ADD Y DELETE
mySet.add("https://moure.dev")
//console.log(mySet)

mySet.delete("https://moure.dev")
//console.log(mySet)

//console.log(mySet.delete(true))

// HAS
//console.log(mySet.has(44))
//console.log(mySet.has("lechuga"))

// SIZE
//console.log(mySet.size)

// CONVERTIR SET EN ARRAY
let myArray = Array.from(mySet)
console.log(myArray)

// CONVERTIR ARRAY EN SET
mySet = new Set(myArray)
console.log(mySet)

mySet.add("gerardovguzman")
console.log("gerardovguzman")