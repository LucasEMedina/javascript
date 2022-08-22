// CODIGO DE LA PRIMERA CLASE
// var - let - const - console.log - alert - prompt - parseInt(prompt("..."))

var primeraVariable = "mi primera variable"
var segundaVarible = 5

let terceraVariable = "primera variable con let"
const primeraConstante = 4
const segundaConstante = 7
let resultado = primeraConstante+segundaConstante
console.log(resultado)
console.log(primeraVariable+" - "+terceraVariable)
terceraVariable = 6

//console.log(primeraConstante)

{
var primera = "variable var"
let segunda = "variable let"
let tercera = "variable tercera"
}

let segunda = "variable let 2"
//console.log(primera)
console.log(segunda)

//let nombre = prompt("Escribe tu nombre")
//let apellido = prompt("Escribe tu apellido")
//const saludo = "Bienvenido "
//alert(saludo+nombre+" "+apellido)
let numeroUno = parseInt(prompt("Ingresa un numero"))
let numeroDos = parseInt(prompt("Ingresa un segundo numero"))
alert(numeroUno+numeroDos)


///////////   CODIGO SEGUNDA CLASE
// if - else - if else

 let nombre = 'Farid'
 let apellido = 'Sesin'
 let edad = 33
 apellido = 'Hoyos'
 edad = 42
 console.log(apellido)
 alert('Bienvenido cliente, tienes '+edadUsuario+' anos de edad')

 alert(edad===edadUsuario)

 if(edad===edadUsuario){
     alert('Los dos tienen la misma edad')
 }
 let profesion = 'Medico'
 let apellidoUsuario = prompt('Ingresa tu apellido')

 if(apellido===apellidoUsuario){
     edad = 25
 } else {
     edad = 18
 }
 alert('Tu edad es: '+edad)

 let edadUsuario = parseInt(prompt('Ingresa tu edad'))
 if (edadUsuario < 18) {
   alert('Eres menor de edad ')
 } else if (edadUsuario > 60) {
   alert('Eres de la tercera edad')
 } else {
     alert('Tienes entre 18 y 60 anos')
 }
 if (apellido === apellidoUsuario) {
   profesion = 'Ingeniero'
 }

 if (edad === edadUsuario) {
   nombre = 'Juan'
 }

 alert('Hola ' + nombre + ', tu profesion es: ' + profesion)

/*
3 == '3' // true -  valor
3 === '3' // false -  valor y tipo de dato
*/

 if(edadUsuario<=18){
     alert('Tienes menos de 18 anos')
 } else if(edadUsuario>18 && edadUsuario<30){
     alert('Tienes entre 18 y 29 anos')
 } else if(edadUsuario>=30 && edadUsuario<40){
     alert('Estas en tus treinta')
 } else {
     alert('No entiendo la edad que tienes')
 }

 alert(edadUsuario>18 && edadUsuario<30)
 alert(edadUsuario>18 || edadUsuario<30)

 // EJEMPLO if - else - if else

 let horasTrabajadas = parseInt(prompt('Cuantas horas trabajaste esta semana'))
let profesion = prompt('Eres ingeniero, medico o programador?')
let horasExtras
const horasReglamentarias = 40
let pago
let valorHora

if (profesion === 'ingeniero') {
  valorHora = 40
} else if (profesion === 'medico') {
  valorHora = 45
} else if (profesion === 'programador') {
  valorHora = 50
} else {
  alert('No analisamos tu profesion')
}

if (
  horasTrabajadas > 40 &&
  horasTrabajadas <= 60 &&
  (profesion === 'ingeniero' || profesion === 'medico')
) {
  horasExtras = horasTrabajadas - horasReglamentarias
  pago = horasReglamentarias * valorHora + horasExtras * (1.5 * valorHora)
} else if (
  horasTrabajadas > 60 &&
  (profesion === 'ingeniero' || profesion === 'medico')
) {
  horasExtras = horasTrabajadas - horasReglamentarias
  pago = horasReglamentarias * valorHora + horasExtras * (2.5 * valorHora)
} else if (
  horasTrabajadas > 40 &&
  horasTrabajadas <= 60 &&
  profesion === 'programador'
) {
  horasExtras = horasTrabajadas - horasReglamentarias //10
  pago = horasReglamentarias * valorHora + horasExtras * (2 * valorHora) // 2000 + 1000
} else if (horasTrabajadas > 60 && profesion === 'programador') {
  horasExtras = horasTrabajadas - horasReglamentarias 
  pago = horasReglamentarias * valorHora + horasExtras * (3 * valorHora) 
} else {
  pago = horasTrabajadas * valorHora
}

alert('Hola '+profesion+', tu pago de esta semana es: '+pago)



if(horasTrabajadas > 40 && horasTrabajadas <= 60){
    horasExtras = horasTrabajadas - horasReglamentarias
    if(profesion === 'ingeniero' || profesion === 'medico'){
        pago = horasReglamentarias * valorHora + horasExtras * (1.5 * valorHora)
    } else {
        pago = horasReglamentarias * valorHora + horasExtras * (2 * valorHora) 
    }
} else if (horasTrabajadas > 60){
    horasExtras = horasTrabajadas - horasReglamentarias
    if(profesion === 'ingeniero' || profesion === 'medico'){
        pago = horasReglamentarias * valorHora + horasExtras * (2.5 * valorHora)
    } else {
        pago = horasReglamentarias * valorHora + horasExtras * (3 * valorHora)  
    }
} else {
    pago = horasTrabajadas * valorHora
}



///////////  CLASE 3

// if(condicion1){

// } else if(condicion2){

// } else {

// }

// for ===> conteo

 let numeroFinalizacion = parseInt(prompt('Ingresa un numero'))

 i = i + 1 -> i++
 for(let i = 0;i<=numeroFinalizacion;i++){
     if(i===6){
         //break
         continue
     }
     console.log('iteracion numero: '+i)
 }

 usuario ingresa = 10   1+2+3+4+5+...+10

//EJERCICIO FOR 1

 let numero = parseInt(prompt('Ingrese un numero'))
 let resultadoSuma = 0

 for(let i = 0;i<=numero;i++){
     resultadoSuma = resultadoSuma + i
     console.log(i,resultadoSuma)
 }

//EJERCICIO FOR 2
 let numero1 = parseInt(prompt('Ingrese un primer numero'))
 let numero2 = parseInt(prompt('Ingrese un segundo numero'))

 if(numero1<numero2){
     for(let i=numero1;i<=numero2;i++){
         console.log(i)
     }
 } else if(numero1>numero2){
     for(let i=numero1;i>=numero2;i--){
         console.log(i)
     }
 } else {
     alert('Los numeros ingresados son iguales')
 }

 //for
 for(let i =0;i<=5;i++){

 }

 while ===> ciclo condicional
 let i = 0
 while(i<=5){
 //bloque de codigo a ejecutar si mientras que la condicion se cumpla
 console.log('iteracion numero: ',i)
 i++
 }
  console.log(i)

  do...while ===> ciclo condicional
 do {
   console.log('iteracion: ', i)
   i++
 } while (i <= 5)

//EJEMPLO DO...WHILE

 let numero = parseInt(prompt('Ingrese un numero'))
 let iteracion = 1
 do{
 numero = numero + 5 
 console.log(numero)
 iteracion++

 while(iteracion<=8)

//EJEMPLO WHILE

 let suma = 0
 let numero = parseInt(prompt('Ingrese un numero'))

 while(suma<=30){
     suma = suma + numero //27
     //       0   + 20  => primera vuelta
     //         20 + 2 => segunda vuelta
     //          22 + 5 => tercera vuelta
        numero = parseInt(prompt('La suma va en '+suma+', ingresa otro numero')) //5
     if(suma+numero>30){
         break
     }
 }
 alert('La suma es: '+suma)

let numero = parseInt(prompt('Ingrese un numero'))

 while(numero<=10 || numero>20){
     numero = parseInt(prompt('Ingrese otro numero'))
 }
 alert('El numero ingresado es:'+numero)


let nombre = prompt('Ingresa un nombre')

do{
    alert('Hola'+nombre)
    nombre = prompt('Ingresa un nombre')
}while(nombre!=='juan')
alert('No eres bienvenido '+nombre)




while(nombre!=='juan'){
    alert('Hola '+nombre)
    nombre = prompt('Ingresa un nombre')
}
alert('No eres bienvenido '+nombre)

/////

let color = prompt('Ingresa un color')

switch(color){
    case('azul'):
    alert('El color es azul')
    break
    case('rojo'):
    alert('El color es rojo')
    break
    case('verde'):
    alert('El color es verde')
    break
    default:
    alert('No ingresaste ningun color esperado')
    break
}