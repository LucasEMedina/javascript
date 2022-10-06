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



/////////// ------  CLASE 10 Storage y JSON -----

///---- HTML ----
/* <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="titulo">BIENVENIDO</h1>
    <h2 id="titulo2">Ingresa tus datos</h2>
    <form id="formInicial">
      <input type="text" name="name" id="name" placeholder="name" />
      <input type="text" name="lastname" id="lastname" placeholder="lastname" />
      <input type="text" name="email" id="email" placeholder="email" />
      <input type="number" name="edad" id="edad" placeholder="edad" />
      <input type="submit" value="ENVIAR" />
    </form>
    <script src="ejercicio.js"></script>
  </body>
</html>
 */

/// ---- CODE ----

localStorage.setItem('name','Jose')
localStorage.setItem('lastname','Mendoza')
localStorage.setItem('email','jmendoza@mail.com')
localStorage.setItem('edad',33)
//localStorage.setItem('name','Alejo')
localStorage.setItem('esCasado',true)
const nombre = localStorage.getItem('name')
const edad = localStorage.getItem('edad')
console.log(edad)
//console.log(localStorage.length)
localStorage.clear()
//localStorage.removeItem('email')

// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))
// console.log(localStorage.key(3))

// for (let i = 0; i<localStorage.length;i++) {
//     const keyStorage = localStorage.key(i)
//     console.log(keyStorage)
//     console.log(localStorage.getItem(keyStorage))
// }

const informacionPersonal = {
    mascotas : ['firulais','mishu','pique'],
    name:'Jose',
    lastname:'Mendoza',
    email:'jmendoza@mail.com',
    edad:33,
    esCasado: true
}
const infoPersonalJSON = JSON.stringify(informacionPersonal)
//console.log('----JAVASCRIPT-----',informacionPersonal)
//console.log('-----JSON-----',infoPersonalJSON)
// JSON.parse()
// JSON.stringify()

localStorage.setItem('informacionPersonal',infoPersonalJSON)

const infoBack = localStorage.getItem('informacionPersonal')
const infoBackParse = JSON.parse(infoBack)
console.log(infoBackParse)

//// ----EJERCICIO ---

const titulo = document.getElementById('titulo2')
const formulario = document.getElementById('formInicial')

formulario.onsubmit = (event)=>{
event.preventDefault()
//console.log(event.target.children)
const informacionArray = []
for (const input of event.target.children) {
    //console.log(input)
    const obj = {}
    obj['tipo'] = input.name
    obj['valor'] = input.value
    informacionArray.push(obj)
    // console.log(obj)
}
console.log(informacionArray)
localStorage.setItem('info',JSON.stringify(informacionArray))
}
if(localStorage.length>0){
const informacion = JSON.parse(localStorage.getItem('info'))

let nombre = ''
let apellido = ''
informacion.forEach(dato=>{
   if (dato.tipo==='name'){
       nombre = dato.valor
    }
    if (dato.tipo==='lastname'){
        apellido = dato.valor
    }
})
console.log('name',nombre)
console.log('lastname',apellido)
if(nombre!=='' || apellido!==''){
titulo.innerText = `Hola ${nombre} ${apellido}, bienvenido de vuelta`
}
}



//////// -------- CLASE 11 -- WORKSHOP ---

/// --- HTML ---

/* <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="divPrincipal">
      <div class="divDatos">
        <h2>BIENVENIDO A INVERSIONES JS, INGRESA TUS DATOS</h2>
        Nombre:<input type="text" name="nombre" id="nombre" /> 
        Apellido:<input
          type="text"
          name="apellido"
          id="apellido"
        />
        <button id="botonIngresar">INGRESAR</button>
      </div>
      <div id="divSaludo">
      </div>
      <div id="divInversion"></div>
      <div id="divResultados"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
 */

////----- CODE ---

const inputNombre = document.getElementById('nombre')
const inputApellido = document.querySelector('#apellido')
const botonIngresar = document.getElementById('botonIngresar')
const divDatos = document.querySelector('.divDatos')
const divSaludo = document.querySelector('#divSaludo')
const divInversion = document.querySelector('#divInversion')
const divResultados = document.querySelector('#divResultados')
// array de bancos
const bancos = []
// tipos de riesgo
const riesgos = [
  { tipo: 'bajo', tasa: 0.5 },
  { tipo: 'medio', tasa: 0.8 },
  { tipo: 'alto', tasa: 1.5 },
]
//clase banco para crear distintos bancos

class Banco {
  constructor(nombre) {
    this.nombre = nombre
    this.rendimiento = this.calculadoraRendimiento()
  }
  calculadoraRendimiento() {
    return Math.floor(Math.random() * 20) + 1
  }
}

bancos.push(new Banco('Bancolombia'))
bancos.push(new Banco('Davivienda'))
bancos.push(new Banco('Bogota'))
bancos.push(new Banco('Itau'))

console.log(bancos)

botonIngresar.onclick = () => {
  const usuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  }
  localStorage.setItem('usuarioStorage', JSON.stringify(usuario))
  divDatos.remove()
  crearSaludo(usuario)
  crearInversionDiv()
  const botonCalcular = document.querySelector('#botonCalcular')
  botonCalcular.onclick = () => {
    const monto = document.querySelector('#inputMonto').value
    const riesgoEscogido = document.querySelector('#selectRiesgo').value
    const riesgo = riesgos.find((riesgo) => riesgo.tipo === riesgoEscogido).tasa
    console.log(riesgo)
    
    bancos.forEach((banco) => {
      const rendimientoFinal = banco.rendimiento * riesgo
      const utilidades = monto * rendimientoFinal
      const parrafoBanco = document.createElement('p')
      parrafoBanco.innerText = `El banco ${banco.nombre} te ofrece un rendimiento anual de ${rendimientoFinal}% lo que te generaria unas utilidades de ${utilidades} pesos`
      divResultados.append(parrafoBanco)
    })
  }
}

function crearSaludo(user) {
  const saludarTitulo = document.createElement('h2')
  saludarTitulo.innerText = `Bienvenido ${user.nombre} ${user.apellido}, estas listo para invertir?`
  divSaludo.append(saludarTitulo)
}

function crearInversionDiv() {
  // parrafo
  const parrafo = document.createElement('p')
  parrafo.innerText =
    'Coloca el monto a invertir y el tipo de riesgo que quieres asumir'
  // input monto a invertir
  const inputMonto = document.createElement('input')
  inputMonto.setAttribute('type', 'number')
  inputMonto.setAttribute('id', 'inputMonto')

  // boton para calcular ls opciones de inversion
  const botonCalcular = document.createElement('button')
  botonCalcular.innerText = 'CALCULAR'
  botonCalcular.setAttribute('id', 'botonCalcular')
  // select con los tipos de riesgos
  const selectRiesgo = document.createElement('select')
  selectRiesgo.setAttribute('id', 'selectRiesgo')
  //creando las opciones del select con los tres tipos de riesgos
  riesgos.forEach((riesgo) => {
    const option = document.createElement('option')
    option.innerText = `${riesgo.tipo}`
    selectRiesgo.append(option)
  })

  // anadiendo los elementos al dom
  divInversion.append(parrafo)
  divInversion.append(inputMonto)
  divInversion.append(selectRiesgo)
  divInversion.append(botonCalcular)
}




//////------ CLASE 12 --- OPERADORES AVANZADOS ---

const equipos = [
  { id: 1, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 1, numeroJugadores: 56 },
  { id: 2, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 4, numeroJugadores: 30 },
  { id: 3, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 20 },
  { id: 4, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 84 },
  { id: 5, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 1, numeroJugadores: 77 },
  { id: 6, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 92 },
  { id: 7, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 2, numeroJugadores: 36 },
  { id: 8, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 25 },
  { id: 9, tecnicoDeFutbolId: 4, ciudadDelEquipoId: 4, numeroJugadores: 11 },
  { id: 10, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 1, numeroJugadores: 70 },
  { id: 11, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 1, numeroJugadores: 76 },
  { id: 12, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 2, numeroJugadores: 34 },
  { id: 13, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 3, numeroJugadores: 16 },
  { id: 14, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 30 },
  { id: 15, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 2, numeroJugadores: 18 },
  { id: 16, tecnicoDeFutbolId: 3, ciudadDelEquipoId: 1, numeroJugadores: 17 },
  { id: 17, tecnicoDeFutbolId: 4, ciudadDelEquipoId: 2, numeroJugadores: 100 },
  { id: 18, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 3, numeroJugadores: 45 },
  { id: 19, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 1, numeroJugadores: 69 },
  { id: 20, tecnicoDeFutbolId: 1, ciudadDelEquipoId: 1, numeroJugadores: 42 },
  { id: 21, tecnicoDeFutbolId: 5, ciudadDelEquipoId: 3, numeroJugadores: 20 },
  { id: 22, tecnicoDeFutbolId: 6, ciudadDelEquipoId: 2, numeroJugadores: 58 },
  { id: 23, tecnicoDeFutbolId: 2, ciudadDelEquipoId: 2, numeroJugadores: 75 },
]
const ciudadDelEquipo = [
  { id: 1, name: 'LIMA' },
  { id: 2, name: 'BOGOTA' },
  { id: 3, name: 'SANTIAGO' },
  { id: 4, name: 'ASUNCION' },
]

// OPERADOR ++

let total = 10
//total = total + 1  //opcion 1
//total++ // opcion 2

equipos.forEach((equipo) => equipo.numeroJugadores++)
//console.log(equipos)

// OPERADOR TERNARIO

// if(nombre){   /// 1.condicion
//     return 'hola' //2. que hacer si condicion se cumple
// } else {
//     return 'chao' // 3. que hacer si condicion no se cumple
// }

// function numTotal(total){
// let jugadores = 0
// if(total>20){
//     jugadores = 30
//     //return('Numero mayor a 20')
// } else {
//     jugadores = 10
//     //return('Numero menor o igual a 20')
// }
// return jugadores
// }

// function numTotalTernario(total){
//     //return total>20 ? 'Numero mayor a 20' : 'Numero menor o igual a 20'
//     let jugadores = total>20 ? 30 : 10
//     return jugadores
//       //    condicion   ?    que hacer si condicion se cumple : que hacer si condicion no se cumple

// }
//console.log(numTotal(22))
//console.log(numTotalTernario(22))

function numJugadores(id) {
  const equipo = equipos.find((equipo) => equipo.id === id)
  if (equipo.numeroJugadores < 30) {
    return 'Faltan jugadores por contratar'
  } else if (equipo.numeroJugadores >= 30 && equipo.numeroJugadores <= 50) {
    return 'Tiene cantidad necesaria de jugadores'
  } else {
    return 'Necesita ceder jugadores'
  }
}

function numJugadoresTer(id) {
  const equipo = equipos.find((equipo) => equipo.id === id)
  return equipo.numeroJugadores < 30
    ? 'Faltan jugadores por contratar'
    : equipo.numeroJugadores >= 30 && equipo.numeroJugadores <= 50
    ? 'Tiene cantidad necesaria de jugadores'
    : 'Necesita ceder jugadores'
}

//console.log(numJugadores(2))
//console.log(numJugadoresTer(2))

// Operador AND &&

let numero = 10

//if(numero>5) alert('Numero mayor a 5')

//let prueba = numero > 5 && 10
//console.log('----prueba-----',prueba)

//Operador OR ||
function operadorOr(parametro){
    return parametro || 4
}

let parametro = numero || 4
//console.log(parametro)

// Acceso condicional a un objeto
//console.log(equipos[23]?.id || 'este equipo no existe')


// Destructuracion

// let estudiante = {
//     nombre:'Farid',
//     apellido:'Gutierrez',
//     idioma: 'Espanol',
//     curso:'Javascript',
//     edad: 33
// }
// let notas = {
//     nota1: 5,
//     nota2: 3.5
// }
// function saludar(estudiante){
// console.log(`hola mi nombre ${estudiante.nombre} ${estudiante.apellido} yo estoy en el curso de ${estudiante.curso}`)
// }
// //saludar(estudiante)

// function saludarDes(estudiante){
// const {nombre,apellido,curso} = estudiante
// // const nombre = estudiante.nombre
// // const apellido = estudiante.apellido
// // const curso = estudiante.curso
// console.log(`hola mi nombre ${nombre} ${apellido} yo estoy en el curso de ${curso}`)
// }
// //saludarDes(estudiante)

// let animales = ['perro','gato','raton','elefante','culebra','pajaro']
// //                 0       1      2        3          4         5
// let personas = ['juan','carlos','andres']
// function arrayDes(array){
// const [,e1,,,,e2] = array
// //console.log(e1,e2)

// }
// arrayDes(animales)

// // spread operator
// console.log(animales.concat(personas))
// console.log([...animales,...personas])
// console.log({...estudiante,...notas})

let estudiante = {
    nombre:'Farid',
    apellido:'Gutierrez',
    idioma: 'Espanol',
    curso:'Javascript',
    edad: 33
}


let copiaEstudiante = {...estudiante, id:5}
copiaEstudiante.nombre = 'Juan'

console.log(copiaEstudiante)
console.log(estudiante)




////// ------- CLASE 13 --- LIBRERIAS ---

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <title>Document</title>
</head>
<body>
    <button id="swal">SWAL</button>
    <button id="toast">TOAST</button>
    <input type="text" name="nombre" id="nombre">

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script src="https://cdn.jsdelivr.net/npm/luxon@3.0.3/build/global/luxon.min.js"></script>
    <script src="index.js"></script>
</body>
</html> */



const botonSwal = document.getElementById('swal')
const botonToast = document.getElementById('toast')
const inputNombre = document.getElementById('nombre')
botonSwal.onclick = mostrarAlert
botonToast.onclick = mostrarToast

function mostrarAlert(){
    Swal.fire({
    title:'ALERTA',
    text: 'Primera alerta',
    icon: 'question',
    showConfirmButton:false,
    timer:3000
    })

}

function mostrarToast(){
    const nombreValue = inputNombre.value
Toastify({
text:`Hola ${nombreValue}`,
duration:3000,
position:'left'
}).showToast()
}


const DateTime = luxon.DateTime

const ahora = DateTime.now()
console.log(ahora.setLocale('es').toLocaleString(DateTime.DATETIME_HUGE))

const despues = ahora.plus({days:7})
console.log(despues.setLocale('es').toLocaleString(DateTime.DATETIME_HUGE));

const antes = ahora.minus({days:7})
console.log(antes.setLocale('es').toLocaleString(DateTime.DATETIME_HUGE));



//////// ---- AFTER CLASS PROMESAS

//--------- HTML
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    Name: <input type="text" name="name" id="name">
    <select name="select" id="select">
        <option value="todos">Todos</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
    </select>
    <button id="botonFiltrado">BUSCAR</button>
    <br>
    <br>
    <br>

    <button id="botonTodos">BUSCAR TODOS</button>
    <div class="card-group" id="group"></div>
    <script src="index.js"></script>
</body>
</html> */


//------ CODE JS

const botonTodos = document.getElementById('botonTodos')
const cardGroup = document.getElementById('group')
const botonFiltrado = document.getElementById('botonFiltrado')
const inputName = document.getElementById('name')
const selectStatus = document.getElementById('select')

//traer todos
botonTodos.onclick = async () => {
  // api externa
  const info = await fetch('https://rickandmortyapi.com/api/character')
  const infoJson = await info.json()
  const personajes = infoJson.results

  // fetch a archivo interno
  const infoArchivo = await fetch('./pokemons.json')
  const infoArchivoJson = await infoArchivo.json()

  const arrayConcatenado = infoArchivoJson.concat(personajes)
  console.log(personajes)
  //personajes.splice(10)
  arrayConcatenado.splice(10)
  createCards(arrayConcatenado)
}

botonFiltrado.onclick = async () => {
  let info
  const inputValue = inputName.value
  const selectValue = selectStatus.value
  
  if (inputValue !== '' && selectValue !== 'todos') {
    info = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${inputValue}&status=${selectValue}`
    )
  } else if (inputName !== '' && selectValue === 'todos') {
    info = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${inputValue}`
    )
  } else {
    info = await fetch(
      `https://rickandmortyapi.com/api/character/?status=${selectValue}`
    )
  }
  const infoJson = await info.json()
  const personajes = infoJson.results
  personajes.splice(10)
  createCards(personajes)

}

function createCards(array){
    cardGroup.innerHTML = ''
    array.forEach((element) => {
        const divPersonaje = document.createElement('div')
        divPersonaje.setAttribute('class', 'card')
        divPersonaje.innerHTML = `
        <img src=${element.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.status}</p>
                <p class="card-text"><small class="text-muted">${element.species}</small></p>
              `
        cardGroup.append(divPersonaje)
      })
}

//------- pokemons.json

[
  {
      "name":"pikachu",
      "image":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      "status":"alive",
      "species":"pokemon"
  },
  {
      "name":"raichu",
      "image":"data:image/jpeg;base64,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",
      "status":"alive",
      "species":"pokemon"
  },
  {
      "name":"vulbasaur",
      "image":"data:image/jpeg;base64,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",
      "status":"alive",
      "species":"pokemon"
  }
]




//////////////--------- CLASE 14 ------ PROMESAS


function suma(a, b) {
  return a + b
}
function resta(a, b) {
  return a - b
}
function multiplicar(a, b) {
  return a * b
}

// function operaciones(a, b) {
//   let resultadoSuma
//   setTimeout(() => {
//     resultadoSuma = suma(a, b)
//   }, 5000)

//   const resultadoResta = resta(resultadoSuma, b)
//   console.log('resultado', resultadoResta)

//   console.log('no dependo de nadie')
//   multiplicar(a, b)
// }

// operaciones(10, 4)

// console.log('primer console')

// setTimeout(() => {
//   console.log('segundo console')
// }, 10000)

// setTimeout(() => {
//     console.log('tercer console')
//   }, 1000)

// console.log('cuarto console')

function primeraPromesa(saludo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (saludo === 'hola') {
        resolve(5)
      } else {
        reject('NO ERES BIENVENIDO')
      }
    }, 1000)
  })
}
function segundaPromesa(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(num)) {
          resolve(num*2)
        } else {
          reject('NO ES UN NUMERO')
        }
      }, 1000)
    })
  }

const respuesta = primeraPromesa('hola')
//const resultadoSuma = suma(respuesta,4)
//console.log(resultadoSuma)
.then(respuesta=>{
return segundaPromesa('a')
})
// .then(respuesta2=>
//     console.log(respuesta2))
.catch(error=>console.log(error))





///////////// ---------- CLASE 15 ------- FETCH --- MANIPULAR PROMESAS

//----- HTML

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="botonTodos">TRAER TODOS</button>
    <ul id="lista"></ul>
    <script src="index.js"></script>
</body>
</html> */


//////----- CODE JS

// https://docs.google.com/presentation/d/1Rd5nIZ8Q69uFEbfzs2Hipl3Q3-x-rZSSuTvL6sIsccE/preview?slide=id.g1157621e609_0_39

// // URL amazon.com/productos
// // METHOD get
// // query params   ?order=ASC

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response=>response.json())
// .then(info=>console.log(info))

const boton = document.getElementById('botonTodos')
const lista = document.getElementById('lista')
// boton.onclick = () =>{

//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response=>response.json())
//     .then(info=>{
//         const personajes = info.results
//         console.log(personajes)
//         personajes.forEach(personaje => {
//             const li = document.createElement('li')
//             li.innerHTML = `<h3>${personaje.name}</h3>
//                             <img src=${personaje.image}>
//                             <p>${personaje.species} ${personaje.status}</p>`
//             lista.append(li)

//         });

//     })

// }

boton.onclick = async () => {
  const dataApi = await fetch('https://rickandmortyapi.com/api/character')
  const dataJson = await dataApi.json()
  const personajes = dataJson.results
  personajes.forEach((personaje) => {
    const li = document.createElement('li')
    li.innerHTML = `<h3>${personaje.name}</h3>
                                    <img src=${personaje.image}>
                                    <p>${personaje.species} ${personaje.status}</p>`
    lista.append(li)
  })
}



////------ productos.json

{
    
}