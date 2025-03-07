/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map
// Declaración
let myMap = new Map()
//console.log(myMap)

// Inicialización
myMap = new Map([
    ["name","Gera"],
    ["email","gerardovguzman1980@gmail.com"],
    ["age",44]

])

//console.log(myMap)

// MÉTODOS Y PROPIEDADES
// SET  PARA ACTUALIZAR UN ELEMENTO O PARA AGREGARLO
myMap.set("alias","gerardovguzman")
//console.log(myMap)

myMap.set("name","Gerardo")
//console.log(myMap)

// GET 
//console.log(myMap.get("name"))

// HAS PARA SABER SI LA CLAVE EXISTE O NO
//console.log(myMap.has("edad"))
//console.log(myMap.has("name"))

// DELETE
myMap.delete("email")
console.log(myMap)

// KEYS  VALUES Y ENTRIES
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())


// CLEAR
//myMap.clear()
//console.log(myMap)


// size
console.log(myMap.size)

