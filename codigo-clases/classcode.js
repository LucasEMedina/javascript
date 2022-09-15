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


///////////     CLASE 4

// // creando una funcion

// function sumar(){
// const numero1 = parseInt(prompt('Ingresa un numero'))
// const numero2 = parseInt(prompt('Ingresa otro numero'))

// const resultado = numero1 + numero2
// alert('El resultado es '+resultado)
// }

// //sumar() // llamando a la funcion

// function restar(numero1,numero2){
//     const restando = numero1 - numero2
//     const mitad = restando/2
//     console.log(restando)
//     return mitad
// }
// //console.log(restando)
// const resultadoResta = restar(10,5)
// console.log(resultadoResta)
// console.log(restando)
// //alert('el resultado es: '+resultadoResta)

// const variableGlobal = 2


// function mayorA10(num1, num2) {
// let variableLocal = 10
//   const resultado = num1 + num2 + variableGlobal
//   if (resultado > 10) {
//     return 'mayor a 10'
//   } else {
//     return 'menor o igual a 10'
//   }
// }


// const resultadoMayorA10 = mayorA10(4, 5)
// console.log('el resultado es ' + resultadoMayorA10)

function esVocal(letra) {
    console.log(variableLocal)
  const letraMinuscala = letra.toLowerCase()
  if (
    letraMinuscala === 'a' ||
    letraMinuscala === 'e' ||
    letraMinuscala === 'i' ||
    letraMinuscala === 'o' ||
    letraMinuscala === 'u'
  ) {
    return 'es una vocal'
  } else {
    return 'no es una vocal'
  }
}

// console.log(esVocal('A'))

// let esVocal = function(letra){

// }


// esVocal()
let exponenteFunction = function(num,exponenteParams){
    return num**exponenteParams
}
let exponenteArrow = (num,exponenteParams) =>{
    return num**exponenteParams
}

//let cuadrado = exponente(2)
//let cubo = exponente(3)

console.log(exponente(6,2))
console.log(exponente(6,3))

//funcion autoinvocada

// +function(letra) {
//     //console.log(variableLocal)
//   const letraMinuscala = letra.toLowerCase()
//   if (
//     letraMinuscala === 'a' ||
//     letraMinuscala === 'e' ||
//     letraMinuscala === 'i' ||
//     letraMinuscala === 'o' ||
//     letraMinuscala === 'u'
//   ) {
//     return 'es una vocal'
//   } else {
//     return 'no es una vocal'
//   }
// }('A')


//// EJEMPLO PARA EL SEGUNDO DESAFIO ////

let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let decision

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + 650
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + 350
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + 250
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + 1200
  } else{
    productoSeleccionado = parseInt(prompt('ingresa un producto existente: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'))
    continue
  }

  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

alert('El valor total sin descuento ni impuestos es: '+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=1000){
    descuento = 10
} else if(valor>1000 && valor<=1500){
    descuento = 15
} else if(valor>1500 && valor<=2000){
    descuento = 20
} else {
    descuento = 25
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: '+valorConDescuento)

function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (8/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: '+valorFinalConImpuesto)





/////     CLASE 5 OBJETOS

// clave - valor   nombre = farid  ----- apellido = hernandez ------ edad = 32

let primerObjeto = {
    nombre:"Farid",
    apellido:"Hernandez",
    edad:32
    };
    
    const nombrePerro = "Firulais"
    
    const animal1 = {
    tipo:"perro",
    nombre:nombrePerro,
    edad:4,
    raza: "French"
    };
    
    //let animal1Tipo = "perro"
    //let animalnombre = "Firulais"
    
    // console.log(animal1)
    // console.log(animal1.tipo,primerObjeto.nombre) // 1
    // console.log(animal1["tipo"]) // 2
    
    //alert(`Este ${animal1.tipo} vive con ${primerObjeto.nombre} y se llama ${animal1.nombre}`)
     
    
    // anadiendo propiedades a objeto animal1
    //console.log(animal1)
    animal1.vivo = true
    //animal1.dueno = "Victor"
    animal1["dueno"] = "Victor"
    animal1.nombre = "Rocky"
    //console.log(animal1)
    
    const animal2 = {
        tipo:"perro",
        nombre:"Roro",
        edad:5,
        raza: "Siberiano"
    }
    
    const animal3 = {
        tipo:"gato",
        nombre:"Mishu",
        edad:7,
        raza: "Siamesa"
    }
    
    function Animal(tipo,nombre,edad,raza){
        this.tipo = tipo
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    } 
    
    const animal4 = new Animal("gato","Fiufiu",5,"Blanco")
    const animal5 = new Animal("pez","Dory",2,"Bailarina")
    // console.log(animal4)
    // console.log(animal5)
    // console.log(Animal)
    
    // function Usuario(nombre,email,password){
    //     this.nombre = nombre
    //     this.email = email
    //     this.password = password
    //     this.tieneEmail = function(){
    //         if(this.email){
    //             return true
    //         } else{
    //             return false
    //         }
    //     }
    //     this.cambiarPassword = function(nuevaPassword){
    //         this.password = nuevaPassword
    //     }
    // }
    
    //const usuario1 = new Usuario("Farid","fsesin@mail.com","12345")
    //const usuario2 = new Usuario("Cris",null,"abcde")
    //console.log(usuario1,usuario2)
    
    // function tieneEmail(usuario){
    //     if(usuario.email){
    //         return true
    //     } else{
    //         return false
    //     }
    // }
    //console.log(tieneEmail(usuario2))
    // function cambiarPassword(usuario,nuevaPassword){
    //     usuario.password = nuevaPassword
    // }
    //cambiarPassword(usuario1,'hola')
    //console.log(usuario1)
    
    // console.log(usuario1.tieneEmail())
    // usuario1.cambiarPassword('chao')
    // console.log(usuario1)
    
    class Usuario {
    constructor(nombre,email,password){
        this.nombre = nombre
        this.email = email
        this.password = password
    }
        tieneEmail(){
            if(this.email){
                return true
            } else{
                return false
            } 
        }
        cambiarPassword(nuevaPassword){
            this.password = nuevaPassword
        }
    }
    
    const usuario3 = new Usuario("Juan","juan@mail.com","clave1234")
    console.log(usuario3.tieneEmail())



/////    AFTER CLASS OBJETOS    /////

///   FUNCIONES

const restar = (a, b) => {
    return a + b
}

let resultado = restar(10, 10)
console.log(resultado)

resultado = resultado + 30

console.log(resultado)

function sumar (a, b){
    return a + b
}
 let resultadoSuma = sumar(10, 10)


///   OBJETOS

let producto = {
    nombre: "laptop",
    precio: 150000,
    cantidad: 20
}

let producto2 = {
    nombre: "lavadora",
    precio: 200000,
    cantidad: 10
}

let producto3 = {
    nombre: "auto",
    precio: 4000000,
    cantidad: 5
}


console.log(producto3.precio);

///    FUNCIONES CONSTRUCTORAS O CLASES

class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        // this.cambiarPrecio = (nuevoPrecio) => {
        //     this.precio = nuevoPrecio
        // }
    }
    
    imprimirNombre(){
        console.log(this.nombre)
    }

    cambiarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }


    
}
let producto1 = new Producto("Laptop", 150000, 10)
producto1.cambiarPrecio(50000)


console.log(producto1)

///  EJEMPLO CALCULADORA CON FUNCIONES

let a = parseInt(prompt("ingresa el numero 1"))
let b = parseInt(prompt("ingresa el numero 2"));
let operacion = parseInt(prompt("que operacion desea realizar 1-suma 2-resta 3-multiplicacion 4-division"))


const calculadora = (numero1, numero2, operacion) => {
    if(operacion === 1){
        alert(`el resultado de la suma es ${numero1 + numero2}`)
    }else if(operacion === 2){
        alert(`el resultado de la resta es ${numero1 - numero2}`)
    }else if(operacion === 3){
        alert(`el resultado de la multiplicacion es ${numero1 * numero2}`)
    }else if(operacion === 4){
        alert(`el resultado de la division es ${numero1 / numero2}`)
    }
}

calculadora(a, b, operacion)




//////     CLASE 6 ARRAYS

let primerArray = [true,2,'hi',[1,2,3],'hola']

// posiciones       0   1   2     3       4
// largo del arreglo            5

const segundoArray = [2,3,4,5]
//console.log(primerArray)
//console.log(segundoArray)

console.log(primerArray.length) // cantidad de elementos
// console.log(primerArray[0]) // mostrar elemento posicion 2
// console.log(primerArray[1])
// console.log(primerArray[2])
// console.log(primerArray[3])
// console.log(primerArray[4])

for(let i =0;i<=primerArray.length;i++){
    console.log(i,primerArray[i])
}

for(let i =0;i<segundoArray.length;i++){
    segundoArray[i] = segundoArray[i]+1
}
console.log(segundoArray)

// .push ----  .unshift

// primerArray.push('Elemento final')
// primerArray.unshift('Elemento inicial')
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)

// // .pop ----- .shift
// segundoArray.pop()
// segundoArray.shift()

// console.log(primerArray)
// console.log(segundoArray)

let animales = ['gato','perro','serpiente','caballo','raton']

//.splice eliminar uno o mas elementos de un arreglo
const animalesEliminados = animales.splice(1,3)
//console.log(animales)
//console.log(animalesEliminados)

let saludar = ['hola','como estas','?']
//saludar.join('')
console.log(saludar.join(' '))

console.log(primerArray.concat(segundoArray))


/// EJEMPLO

//let numero = parseInt(prompt('Ingresa un numero'))
let numeros = []
let i = 1 
while(i<=5){
    let numero = parseInt(prompt('Ingresa otro numero'))
    numeros.push(numero)
    i++
}
//        [4,7,9,10,2]
let numeroPregunta = parseInt(prompt('Que numero quieres averiguar?'))


let existeNumero = numeros.includes(numeroPregunta)
console.log(existeNumero)
let indice = numeros.indexOf(numeroPregunta)

if(existeNumero){
    alert(`El numero ingresado se encuentra en la posicion ${indice}`)
} else {
    alert('El numero ingresado no esta en este arreglo')
}

// if(indice!==-1){
//     alert(`El numero ingresado se encuentra en la posicion ${indice}`)
// } else {
//     alert('El numero ingresado no esta en este arreglo')
// }


/// OTRO EJEMPLO

let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let decision
let productos = []
let carrito = []
// class Producto {
//   constructor(nombre, precio,stock) {
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
//   }

//   modificarStock(){
//     this.stock = this.stock - 1
//   }
// }
// const iphone = new Producto('Iphone', 650,5)
// iphone.modificarStock()
// iphone.modificarStock()
// iphone.modificarStock()


// const tv = new Producto('TV', 350)
// const ipad = new Producto('Ipad', 250)
// const computador = new Producto('Computador', 1200)

const iphone = {
  nombre:'Iphone',
  precio: 650
}
productos.push(iphone)
const tv = {
  nombre:'TV',
  precio: 350,
}
productos.push(tv)
const ipad = {
  nombre:'Ipad',
  precio: 250
}
productos.push(ipad)
const computador = {
  nombre:'Computador',
  precio: 1200
}
productos.push(computador)

console.log(productos)

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    carrito.push(productos[0])
  } else if (productoSeleccionado === 2) {
    carrito.push(productos[1])
  } else if (productoSeleccionado === 3) {
    carrito.push(productos[2])
  } else if (productoSeleccionado === 4) {
    carrito.push(productos[3])
  } else {
    productoSeleccionado = parseInt(
      prompt(
        'ingresa un producto existente: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
    continue
  }

  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

console.log(carrito)

for(let i=0;i<carrito.length;i++){
  totalCompra = totalCompra +carrito[i].precio
}

for (const prod of carrito) {
  totalCompra = totalCompra +prod.precio
}




alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

//////      CLASE 7    FUNCIONES DE ORDEN SUPERIOR

// // caso 1
// function ordenSuperior1(){
//     return function(){

//     }
// }
// // caso 2
// function ordenSuper2(suma){
//     return
// }


// //ejemplo caso 1

// function elevar(n){
//  return function(m){
//     return m**n
//  }
// }

// let cuadrado = elevar(2)
// let cubo = elevar(3)
// let cuatro = elevar(4)

// console.log(cuadrado(7))
// console.log(cuadrado(3))

// //ejemplo caso 2
// function suma(num1,num2){
//     return num1+num2
// }
// function resta(num1,num2){
//     return num1-num2
// }

// function ope(n1,n2,fn){
//     return  fn(n1,n2)
// }

// console.log(ope(5,2,suma))
// console.log(ope(5,2,resta))

const arregloNum = [2,4,6,43,2,6,78,4,3,78,3,7,8]

const arregloObjeto = [
    {nombre:'Carlos',edad:24,curso:'JS8'},
    {nombre:'Juan',edad:22,curso:'JS10'},
    {nombre:'Edwin',edad:32,curso:'JS7'},
    {nombre:'Andres',edad:36,curso:'JS10'},
    {nombre:'Laura',edad:18,curso:'JS12'},
]

// for (let i = 0; i < arregloNum.length; i++) {
//     console.log(arregloNum[i])
// }

//arregloObjeto.forEach(obj=>console.log(obj.edad+10))
// let buscador = prompt('ingresa el nombre que quieras buscar')
// const elementoBuscado = arregloObjeto.find(obj=>obj.nombre===buscador)
// //console.log(elementoBuscado)
// if(elementoBuscado){
//     alert('este nombre existe')
// } else{
//     alert('elemento no existe')
// }

// const objetosFiltrados = arregloObjeto.filter(obj=>obj.nombre!=='Juan')
// console.log(objetosFiltrados)

// const objetosFiltrados = arregloObjeto.some(obj=>obj.nombre!=='Juan')
// console.log(objetosFiltrados)

// const objetosFiltrados = arregloObjeto.map(obj=>obj.edad)
// console.log(objetosFiltrados)

// const resultado = arregloObjeto.reduce((obj1,obj2)=>(obj1+obj2.edad),0)
// console.log(resultado)

// console.log(arregloNum.sort((num1,num2)=>num2-num1))
// console.log(arregloObjeto.sort((obj1,obj2)=>obj1.edad-obj2.edad))
// console.log(arregloObjeto.sort((obj1,obj2)=>obj2.nombre.localeCompare(obj1.nombre)))


//Math

console.log(Math.PI)
console.log(Math.sqrt(9))
console.log(Math.pow(2,2))
console.log(Math.round(3.5674456))
console.log(Math.floor(4.277865))
console.log(Math.ceil(Math.random()*20))

const fecha = new Date()
const fechaCumpleanos = new Date(1995, 11, 17)

// console.log(fecha.getFullYear())
// console.log(fecha.getMonth())
console.log(fechaCumpleanos.toLocaleString())



////   AFTER CLASS DE ARRAYS

class Prestamo {
    constructor(nombre, id) {
      this.nombre = nombre
      this.id = id
      this.bancos = [
        {
          nombre: 'bancolombia',
          tasas: [
            {
              meses: 12,
              interes: this.generarInteres(),
            },
            {
              meses: 24,
              interes: this.generarInteres(),
            },
            {
              meses: 36,
              interes: this.generarInteres(),
            },
          ],
        },
        {
          nombre: 'davivienda',
          tasas: [
            {
              meses: 12,
              interes: this.generarInteres(),
            },
            {
              meses: 24,
              interes: this.generarInteres(),
            },
            {
              meses: 36,
              interes: this.generarInteres(),
            },
          ],
        },
        {
          nombre: 'itau',
          tasas: [
            {
              meses: 12,
              interes: this.generarInteres(),
            },
            {
              meses: 24,
              interes: this.generarInteres(),
            },
            {
              meses: 36,
              interes: this.generarInteres(),
            },
          ],
        },
      ]
    }
  
    generarInteres() {
      return Math.floor(Math.random() * 20 + 1)
    }
  
    anadirBanco(nombre){
      const banco = {nombre:nombre}
      this.bancos.push(banco)
    }
  }
  const prestamos = []
  const vivienda = new Prestamo('vivienda', 1)
  vivienda.anadirBanco('bogota')
  prestamos.push(vivienda)
  const vehicular = new Prestamo('vehicular', 2)
  prestamos.push(vehicular)
  const libre = new Prestamo('libre', 3)
  prestamos.push(libre)
  //console.log(prestamos)
  
  const tipoCreditoSeleccionado = parseInt(
    prompt('Ingrese el tipo de credito: 1.vivienda - 2.vehicular - 3.libre')
  )
  const existeTipoDePrestamo = prestamos.find(
    (pres) => pres.id === tipoCreditoSeleccionado
  )
  //console.log(existeTipoDePrestamo)
  
  const mesesPrestamo = parseInt(
    prompt('A cuantos meses quieres sacar el prestamo?: 12, 24 o 36')
  )
  const bancos = existeTipoDePrestamo.bancos
  //console.log(bancos)
  
  const arrayInteresSegunMesesSeleccionado = []
  bancos.forEach((banco) => {
    const tasasArray = banco.tasas
    //console.log(tasasArray)
    const interesPorBanco = tasasArray.find(
      (tasa) => tasa.meses === mesesPrestamo
    )
    //console.log(interesPorBanco)
    arrayInteresSegunMesesSeleccionado.push({
      nombre: banco.nombre,
      interes: interesPorBanco.interes,
    })
  })
  //console.log(tasasArray)
  console.log(arrayInteresSegunMesesSeleccionado)
  
  arrayInteresSegunMesesSeleccionado.sort((a, b) => a.interes - b.interes)
  console.log(arrayInteresSegunMesesSeleccionado)
  const bancoMenorTasa = arrayInteresSegunMesesSeleccionado[0]
  console.log(bancoMenorTasa)
  
  const valorCredito = parseInt(prompt('Ingrese el monto que quieras prestar: '))
  
  const cuotaMensualCapital = valorCredito / mesesPrestamo
  const cuotaMensualIntereses =
    cuotaMensualCapital * (bancoMenorTasa.interes/ 100)
  const cuotaMensualTotal = cuotaMensualCapital + cuotaMensualIntereses
  
  alert(
    `El banco que ofrece la tasa mas baja es ${bancoMenorTasa.nombre} con un valor de $${cuotaMensualTotal} por mes`
  )



  /////     CLASE 8  DOM (Con HTML)

  /*
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1 id="titulo" class="clasetitulo">DOM h1</h1>
    <h1 class="clasetitulo2"> PRUEBA </h1>
    <h2 id="tituloh2" class="clasetitulo">DOM h2</h2>
    <div id="div"></div>
    <script src="index.js"></script>
</body>
</html>
*/

  //console.log(document)
//console.log(document.body)

let titulo1 = document.getElementById('titulo')
// console.log(titulo1)

//const titulos = document.getElementsByTagName('h1')
//console.log(titulos)

// const titulo3 = document.getElementsByClassName('clasetitulo')
// console.log(titulo3)

//clase
// const tituloQueryClass = document.querySelectorAll('.clasetitulo')

// // id
const tituloQueryId = document.querySelectorAll('h1')
// const tituloQueryEtiqueta = document.querySelector('h1.clasetitulo2')

// console.log(tituloQueryEtiqueta)

//titulo1.innerText = 'DOM MODIFICADO'
//titulo1.innerHTML = '<h4>DOM</h4>'

for (const elemento of tituloQueryId) {
    elemento.innerText = 'Cambiado'
}


const parrafo = document.createElement('p')
parrafo.innerText = 'Parrafo creado desde JS'

const divPrueba = document.getElementById('div')
divPrueba.append(parrafo)
titulo1.remove()



//////    CLASE 9 EVENTOS  (Con HTML)


/* Esto va en el HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Document</title>
</head>
<body>
    <div class="div1"></div>
    <button id="boton1">PRIMER BOTON</button>
    <!-- <input type="text" id="input1"> -->
    <form id="form">
        <input type="text" id="name" placeholder="ingresa nombre">
        <input type="text" id="lastname" placeholder="ingresa apellido">
        <input type="text" id="deporte" placeholder="ingresa deporte favorito">
        <input type="submit" value="INGRESAR">
    </form>
    <script src="index.js"></script>
</body>
</html>
*/

const boton1 = document.getElementById('boton1')
const div1 = document.querySelector('.div1')
const input1 = document.getElementById('input1')
//PRIMERA FORMA DE ESCUCHAR EVENTOS = addEventListener
// boton1.addEventListener('click',clickFunction)

// function clickFunction(){
//     console.log('Haciendo click en primer boton')
// }


// div1.addEventListener('mousemove',mouveFunction)
// function mouveFunction(){
//     console.log('Moviendo el mouse en div azul')
// }

// div1.addEventListener('mouseover',overFunction)
// function overFunction(){
//     console.log('Over mouse en div azul')
// }
// div1.addEventListener('mouseout',outFunction)
// function outFunction(){
//     console.log('Out mouse en div azul')
// }

// div1.addEventListener('mouseout',()=>{
//     console.log('Out mouse en div azul')
// })


// SEGUNDA FORMA DE ESCUCHAR EVENTOS = on

boton1.onclick = () =>{
    console.log('Haciendo click en primer boton')
}

// div1.onmousemove = () =>{
//     console.log('Moviendo el mouse en div azul')
// }

div1.onmouseover = ()=>{
    console.log('Over mouse en div azul')
}

div1.onmouseout = () =>{
    console.log('Out mouse en div azul')
}

// input1.onchange = (e) =>{
// console.log(e.target.value)
// }
// input1.oninput = (event) =>{
//     console.log(event.target.value)
//     //console.log('evento input')
//     }
// input1.onkeydown = (event)=>{
//     if(event.code==='Enter'){
//         console.log('Tecla enter')
//     }
//     console.log(event.code)
// }


const formulario = document.getElementById('form')
formulario.onsubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    // console.log(e.target.children[0].value)
    // console.log(e.target.children[1].value)
    // console.log(e.target.children[2].value)

    Array.from(e.target.children).forEach(elemento=>{
        console.log(elemento.value)
    })
}


/// EJEMPLO

/*  HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <select name="lista" id="lista"></select>
    <script src="ejemploDOM.js"></script>
</body>
</html>
*/

let productos = []

const selectTag = document.getElementById('lista')

const iphone = {
  id: 1,
  nombre: 'Iphone',
  precio: 650,
}
productos.push(iphone)
const tv = {
  id: 2,
  nombre: 'TV',
  precio: 350,
}
productos.push(tv)
const ipad = {
  id: 3,
  nombre: 'Ipad',
  precio: 250,
}
productos.push(ipad)
const computador = {
  id: 4,
  nombre: 'Computador',
  precio: 1200,
}
productos.push(computador)

console.log(productos)

productos.forEach((producto) => {
  const option = document.createElement('option')
  option.innerText = `${producto.nombre}: $${producto.precio}`
  option.setAttribute('id', `${producto.id}`)
  //option.innerText = producto.nombre+": $"+producto.precio
  selectTag.append(option)
})

//EVENTOS

let carrito = []

const boton = document.createElement('button')
boton.innerText = 'SEGUIR COMPRANDO'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'TERMINAR COMPRA'
document.body.append(boton2)

boton.onclick = () => {
  const productoSeleccionado = productos[selectTag.selectedIndex]
  carrito.push(productoSeleccionado)
}

boton2.onclick = () => {
  console.log(carrito)
  let totalCompra = 0
  carrito.forEach((prod) => {
    totalCompra = totalCompra + prod.precio
  })

  //alert(`El precio total a pagar es ${totalCompra}`)
  const p = document.createElement('p')
  p.innerText = `El precio total a pagar es ${totalCompra}`
  document.body.append(p)
}

////////////////////////////// PARA EL PROYECTO FINAL ------/////
/* 
let carrito = []
let productos = []

class Figura{
    constructor(nombre, precio, img, id, desc = ''){
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.id = id
        this.desc = desc
    }
    cardFiguras(){
        const card = `
            <div class="card-container">
                <img src=${this.img} class="card-img-top" alt="${this.nombre}">
                <div class="card-body">
                    <h3 class="card-title">${this.nombre}</h3>
                    <p class="card-text">${this.desc} </p>
                    <h4 class="card-precio">$${this.precio}</h4>
                </div>
                <div class="card-footer container-fluid">
                    <button id=${this.id} type="button" class="btn btn-primary btncomprar">COMPRAR</button>
                </div>
            </div>
        `
        const contain = document.getElementById('articulos')
        contain.innerHTML += card
    }
    eventoCarrito(){
        const btncomprar = document.getElementById(this.id)
        
        const productoAgregado = productos.find(product => product.id == this.id)

        btncomprar.addEventListener('click', () => enElCarrito(productoAgregado))
    }
}

let figura1 = new Figura('Goku Super Saiayin', 13500, './multimedia/goku-super-saiayin.jpg', 01, 'Figura coleccionable de de Goku Super Saiayin contra Freezer, 30cm.')

let figura2 = new Figura('Goku Henkidama', 11800, './multimedia/goku-henkiDama.jpg', 02, 'Figura coleccionable de Goku haciendo la Henkidama, 30cm.')

let figura3 = new Figura('Goku Modo Dios', 15200, './multimedia/gukuModoDios.jpg', 03, 'Figura coleccionable de Goku Super Saiayin Modo Dios, 30cm.')

productos.push(figura1,figura2, figura3)
console.log(productos)

productos.forEach(e => {
    e.cardFiguras()
})

productos.forEach(e => {
    e.eventoCarrito()
})

function enElCarrito(producto) {

    const enElCarrito = carrito.find(prod =>prod.id == producto.id)

    if(!enElCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        let filtrarCarrito = carrito.filter(prod => prod.id != producto.id)
        carrito = [...filtrarCarrito, {...enElCarrito, cantidad: enElCarrito.cantidad + 1}]
    }

    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

    console.log(carrito)
}

const contador = document.getElementById('contadorCarrito')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
 */

///////////-----------------------///////////////////-------