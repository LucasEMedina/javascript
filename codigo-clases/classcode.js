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