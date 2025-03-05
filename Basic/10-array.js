/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// ARRAY
// DECLARACIÓN

let myArray = []
let myArray2 = new Array()

//console.log(myArray) // una manera de declararlo
//console.log(myArray2) // es lo mismo, pero se recomienda la parte de arriba

myArray = ["Gera","Guzman",44,false]
myArray2 = new Array("Gera","Guzman",44)

//console.log(myArray)
//console.log(myArray2)


myArray2 = new Array(3)
myArray2[0] = "Gera"
myArray2[1] = "Guzman"
myArray2[2] = 44
myArray2[3] = "otro"
//console.log(myArray2)
myArray2[4] = true
myArray2[6] = "Hola"
//console.log(myArray2)

// MÉTODOS COMUNES

myArray = []

// MÉTODO PUSH  Este método se utiliza para agregar uno o más elementos al final de un array y devuelve la nueva longitud del array.
myArray.push("Gera")
myArray.push("Guzman")
myArray.push(false)

console.log(myArray)

// MÉTODO POP   Este método se utiliza para eliminar el último elemento de un array y devuelve ese elemento eliminado. Si el array está vacío, devuelve undefined.
console.log(myArray.pop());

myArray.pop()
console.log(myArray)

// SHIFT  ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y LO DEVUELVE
myArray.shift(myArray)
console.log(myArray)

// UNSHIFT AGREGA UNO O MÁS ELEMENTOS AL PRINCIPIO DEL ARRAY
myArray.unshift("Gera","Guzman",44,false)   
console.log(myArray)

// LENGHT
console.log(myArray.length)

// CLEAR   BORRAR UN ARRAY, LO DECLARAMOS NUEVAMENTE PERO VACÍO
myArray = []
console.log(myArray)

// SLICE    DEVUELVE UNA COPIA DE UNA PORCIÓN
myArray.push("Gera","Guzman",44,false)
let myNewArray = myArray.slice(0,2)
console.log(myNewArray)

// SPLICE    ELIMINA DESDE EL ÍNDICE 1, ELIMINA 3 ELEMENTOS
myArray.splice(1,3)
console.log(myArray)

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)