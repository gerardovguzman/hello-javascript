// IF  ELSE  
// IF
let age = 45

if (age == 44){
    console.log("La edad es 44")
} else if (age < 18){
    console.log("Es menor de edad")
} else{
    console.log("La edad no es 44 ni es menor de edad")
}


// OPERADOR TERNARIO
const message = age == 44 ? "La edad es 44" : "La edad no es 44"
console.log(message)


// SWITCH
let day = 7
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"            
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break          
    case 6:
        dayName = "Domingo"            
        break
    default:
        dayName = "Número de día incorrecto"
    }
console.log(dayName)