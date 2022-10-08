/// PRIMER DESAFIO COMPLEMENTARIO

/* let bostero = prompt ("Hola, sos hincha de Boca??")

if (bostero.toLowerCase() == "si") {

    alert ("Bienvenido Bostero")
    
} else{
    alert("Entonces sos amargo!!!")
}


let ultimoDiez = prompt("Queres saber cuales fueron los 10 ultimos 10 de Boca??")

if (ultimoDiez.toLowerCase() == "si"){

    for (let i = 1; i <= 10; i++) {
        if (i===1) {
            alert("Oscar Romero")
        }
        else if (i===2){
            alert("Toto Salvio")
        }
        else if (i===3){
            alert("Carlitos Tevez")
        }
        else if (i===4){
            alert("Edwin Cardona")
        }
        else if (i===5){
            alert("Ricky Centurion")
        }
        else if (i===6){
            alert("Carlitos Tevez")
        }
        else if (i===7){
            alert("Nicolas Lodeiro")
        }
        else if (i===8){
            alert("Luciano Acosta")
        }
        else if (i===9){
            alert("Leandro Paredes")
        }
        else if (i===10){
            alert("Juan Roman Riquelme")
        }
        
    } 

} else{
    alert("Bueno, vos te lo perdes")
}


let defensa = prompt("A ver si sabes, Quien es el defensa con mas goles en Boca??")

while(defensa.toLowerCase()!=='fabra'){
    
    defensa = prompt("Error, Intentalo de nuevo")
}

alert("Exacto, "+defensa +" tiene 15 goles en Boca!!") */



/// PRIMER DESAFIO ENTREGABLE


/* let nombreEquipo = prompt("Ingresa el nombre de tu equipo!!")
let cantidadFechas = parseInt (prompt("Cuantas fechas tiene el campeonato??"))

let totalPuntos = 0
let fechajugada = true
let jugaron
let fecha = 1
let resultadoPartido = prompt('Ingresa el resultado de la fecha '+fecha +': G ganado - E empatado - P perdido')

while (fechajugada = true, fecha<cantidadFechas) {
    fecha = fecha + 1

    if (resultadoPartido.toUpperCase() === "G") {
        totalPuntos = totalPuntos + 3        
    }
    else if (resultadoPartido.toUpperCase() === "E") {
        totalPuntos = totalPuntos + 1
    }
    else if (resultadoPartido.toUpperCase() === "P"){
        totalPuntos = totalPuntos + 0
    }
    else{resultadoPartido =
        prompt(
            'Ingresa un resultado valido: G ganado - E empatado - P perdido'
        ) 
        fecha = fecha - 1
        continue
    }

    jugaron = parseInt(prompt("Jugaron la fecha "+fecha +"? 1.Si - 2.No"))
    
         
    if (jugaron === 1){
        resultadoPartido = prompt('Ingresa el resultado del partido jugado: G ganado - E empatado - P perdido')
    }
    else if (jugaron === 2){
        fechajugada = false
        break
    }
     else {
        break        
    }
      
    }

    alert ('El equipo '+nombreEquipo +' logro '+totalPuntos)

    const calcularPromedio =(a, b) => {
        let promedio = a / b
        return promedio
    }

    let fechasJugadas = parseInt(prompt('Ingresa la cantidad de fechas jugadas.'))
    if (fechasJugadas > cantidadFechas) {
        fechasJugadas = parseInt(prompt('No puedes jugar mas fechas de las que tiene el campeonato. Ingresa la cantidad de fechas jugadas.'))
    }

    let promedioEquipo = calcularPromedio(totalPuntos, fechasJugadas)
    alert ('El promedio para el descenso del '+nombreEquipo+' es de '+promedioEquipo+' !!')
 */



////   PRIMER PRE ENTREGA DEL PROYECTO FINAL


/* let totalCompra = 0
let seguirComprando = true
let comprarMas
let productos = []
let carrito = []

alert("Bienvenidos a Prieto mayorista, vendemos las curvas completas de cada producto. Cada curva contiene 5 prendas de cada talle, XS-S-M-L-XL.")

let seleccionarProducto = parseInt(prompt("Ingresa la prenda que desees comprar: 1- Jeans $20000, 2- Campera $25000, 3- Camisa $30000, 4- Remera $15000"))


const curvaJeans = {
    prenda: 'Jeans',
    precio: 20000,
    id: 1
}
productos.push(curvaJeans)

const curvaCamperas = {
    prenda: 'Camperas',
    precio: 25000,
    id: 2
}
productos.push(curvaCamperas)

const curvaCamisas = {
    prenda: 'Camisa',
    precio: 30000,
    id: 3
}
productos.push(curvaCamisas)

const curvaRemeras = {
    prenda: 'Remeras',
    precio: 15000,
    id: 4
}
productos.push(curvaRemeras)

console.log(productos)

while(seguirComprando=true){
    const productoSolicitado = productos.find(prod=>prod.id === seleccionarProducto)
    if (productoSolicitado) {
        totalCompra = totalCompra + productoSolicitado.precio
        carrito.push(productoSolicitado)
    }
     else{
        seleccionarProducto = parseInt(prompt("El produco ingresado no existe. Ingresa: 1- Jeans $20000, 2- Campera $25000, 3- Camisa $30000, 4- Remera $15000"))
        continue
    }

    comprarMas= parseInt(prompt("¿Quieres comprar mas productos?: 1- SI, 2- NO"))
    if (comprarMas === 1){
        seleccionarProducto = parseInt(prompt("Ingresa la prenda que desees comprar: 1- Jeans $20000, 2- Campera $25000, 3- Camisa $30000, 4- Remera $15000"))
    } else if (comprarMas === 2){
        seguirComprando = false
        break
    } else{
        comprarMas= parseInt(prompt("La opcion ingresada no existe. ¿Quieres comprar mas productos?: 1- SI, 2- NO"))
        if (comprarMas === 1){
            seleccionarProducto = parseInt(prompt("Ingresa la prenda que desees comprar: 1- Jeans $20000, 2- Campera $25000, 3- Camisa $30000, 4- Remera $15000"))
        } else if (comprarMas === 2){
            seguirComprando = false
            break
        } else{
            break
        }
    }
}

carrito.forEach(prod=>console.log(prod))
alert (`El total a pagar es de $${totalCompra}. Precio de lista.`)

let buscador = parseInt(prompt('Ingresa el numero del producto que quieras saber si agregaste a tu carrito: 1- Jeans, 2- Camperas, 3-Camisas o 4- Remeras'))
const productoBuscado = carrito.find(prod=>prod.id === buscador)
    if(productoBuscado){
        alert(`Si cargaste "${productoBuscado.prenda}" en tu carrito.`)
    } else{
        alert('NO. Ese producto no esta.')
        }

const mediosDePago = []    

const pagoPorTransferencia = (monto) => {
    montoTransferido = monto
    id = 1
    return montoTransferido
}
mediosDePago.push(pagoPorTransferencia)

const pagoEfectivo = (monto) => {
    let montoEnEfectivo = monto - (monto * 15/100)
    id = 2    
    return montoEnEfectivo
}
mediosDePago.push(pagoEfectivo)

const pagoTarjeta = (monto) => {
    let montoConInteres = monto + (monto * 30/100)
    id = 3    
    return montoConInteres
}
mediosDePago.push(pagoTarjeta)

console.log(mediosDePago)

let precioDeLista = parseInt(prompt("Elige el medio de pago para realizar la compra: 1- Transferencia (mantiene el precio de lista). 2- Efectivo en el local (15% OFF). 3- Tarjeta de credito, 3 o 6 cuotas (30% de recargo)."))

while(precioDeLista){
    if (precioDeLista === 1) {
    alert (`El monto a transferir es de $${totalCompra}. Alias Prietro.Mayorista o CBU 5500207948`)
    break
} else if (precioDeLista === 2) {
    totalCompra = pagoEfectivo(totalCompra)
    alert (`El monto a abonar en efectivo es de $${totalCompra}. Nuestro local se encuentra en Av Siempreviva 742.`)
    break
} else if (precioDeLista === 3){
    totalCompra = pagoTarjeta(totalCompra)
    alert (`El monto a abonar con tarjeta es de $${totalCompra}.`)
    break
} else {
    precioDeLista = parseInt(prompt("La opcion seleccionada no existe. Elige el medio de pago para realizar la compra: 1- Transferencia (mantiene el precio de lista). 2- Efectivo en el local (15% OFF). 3- Tarjeta de credito, 3 o 6 cuotas (30% de recargo)."))
}

}

alert ("Gracias por visitar nuestro sitio!! Que tengas una buena jornada.") */


/////   DESAFIO ENTREGABLE DOM, EVENTOS

/* const divDatos = document.querySelector('.div-form')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputEdad = document.getElementById('edad')
const botonDatos = document.getElementById('boton-enviar')

botonDatos.onclick = () =>{
    const usuario = {
        nombre : inputNombre.value,
        apellido: inputApellido.value,
        edad: inputEdad.value
    }
    localStorage.setItem('usuarioIngresado',JSON.stringify(usuario))
    divDatos.remove()
    console.log(usuario)
}



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

    eventos(){
        const btncomprar = document.getElementById(this.id)
        btncomprar.onclick = () =>{
            console.log('Haciendo click en el boton comprar')
        }
        
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
    e.eventos()
}) */


/////// ------ SEGUNDA ENTREGA DEL PROYECTO FINAL

const divForm = document.querySelector('.div-form')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputEdad = document.getElementById('edad')
const botonDatos = document.getElementById('boton-enviar')

botonDatos.onclick = () => {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        edad: inputEdad.value
    }
    localStorage.setItem('usuarioIngresado', JSON.stringify(usuario))
    divForm.remove()
    console.log(usuario)
}



let carrito = []
let productos = []

class Figura {
    constructor(nombre, precio, img, id, desc = '') {
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.id = id
        this.desc = desc
    }
    cardFiguras() {
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
    eventoCarrito() {
        const btncomprar = document.getElementById(this.id)

        const productoAgregado = productos.find(product => product.id == this.id)

        btncomprar.onclick = () =>{
            enElCarrito(productoAgregado) 

            Toastify({
                text: "Producto agregado al carrito!",
                duration: 1000,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        }
    }
}

let figura1 = new Figura('Goku Super Saiayin', 13500, './multimedia/goku-super-saiayin.jpg', 01, 'Figura coleccionable de de Goku Super Saiayin contra Freezer, 30cm.')

let figura2 = new Figura('Goku Henkidama', 11800, './multimedia/goku-henkiDama.jpg', 02, 'Figura coleccionable de Goku haciendo la Henkidama, 30cm.')

let figura3 = new Figura('Goku Modo Dios', 15200, './multimedia/gukuModoDios.jpg', 03, 'Figura coleccionable de Goku Super Saiayin Modo Dios, 30cm.')

productos.push(figura1, figura2, figura3)
console.log(productos)

productos.forEach(e => {
    e.cardFiguras()
})

productos.forEach(e => {
    e.eventoCarrito()
})


function enElCarrito(producto) {

    const enElCarrito = carrito.find(prod => prod.id == producto.id)

    if (!enElCarrito) {
        carrito.push({ ...producto, cantidad: 1 })
    } else {
        let filtrarCarrito = carrito.filter(prod => prod.id != producto.id)
        carrito = [...filtrarCarrito, { ...enElCarrito, cantidad: enElCarrito.cantidad + 1 }]
    }

    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
}

const contador = document.getElementById('contadorCarrito')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

//const detalleDeCompra = document.getElementById('detalleDeCompra')
const mediosDePago = document.getElementById('mediosDePago')
const botonCarrito = document.getElementById('botonCarrito')
const modalBody = document.getElementById('modal-body')
const botonComprar = document.getElementById('comprar')

botonCarrito.onclick = () => {

    const saludoUss = document.getElementById('saludoUss')
    const infoUss = JSON.parse(localStorage.getItem('usuarioIngresado'))
    saludoUss.innerText = `Hola ${infoUss.nombre} ${infoUss.apellido}, esta es tu compra.`
    //detalleDeCompra.append(tituloCompra)
    const carritoVacio = document.createElement('h5')
    carritoVacio.innerText = 'No tienes productos en tu carrito!!'
    modalBody.innerHTML = ''
    modalBody.append(carritoVacio)


    if (carrito.length != 0) {

        modalBody.innerHTML = ''

        carrito.forEach((producto) => {
            const parrafoDetalle = document.createElement('p')
            parrafoDetalle.innerText = `Figura coleccionable ${producto.nombre}, ${producto.cantidad}, $${producto.precio} (cada una)`
            modalBody.append(parrafoDetalle)
        })

        let totalCompra = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
        console.log(totalCompra)

        const compraTotal = document.createElement('h5')
        compraTotal.innerText = `El total de la compra es de $${totalCompra}`
        modalBody.append(compraTotal)

        //-- Para desafio complementario --- Operadores Avanzados ---

        function compraPorMayor(compra) {
            return compra <= 40000 ? 'No supera la compra minima.' : 'Califica como compra por mayor.'
        }
        console.log(compraPorMayor(totalCompra))

        let envioEnCaja = carrito.reduce((acc, prod) => acc + prod.cantidad, 0) >= 5 && 'Preparar caja para envio'
        console.log(envioEnCaja)

        
    }

    botonComprar.onclick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada!',
            text: 'Es hora de disfrutar tus figuras de accion!!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
}

const btnTodos = document.getElementById('btn-todos')
const divPersonajes = document.getElementById('div-personajes')
const ingresarNombre = document.getElementById('name')
const botonName = document.getElementById('botonName')


botonName.onclick = async () =>{
    const nombreValue = ingresarNombre.value
    if (nombreValue !== ''){
    let info = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${nombreValue}`)

    const infoJson = await info.json()
    const personaje = infoJson

    divPersonajes.innerHTML = ''
    //personaje.forEach((element) => {
        const divCards = document.createElement('div')
        divCards.setAttribute('class', 'card-personajes')
        divCards.innerHTML = `
            <div class="img-div">
                <img src=${personaje.imageUrl} class="img-card">
            </div>
            <div class="body-card">
                <h5 class="h5-card">${personaje.name}</h5>
                <p class="text-card">Este personaje era un ${personaje.role}</p>
            </div>
            <ul class="ul-card list-group-flush">
                <li class="li-card">Planeta de Origen: ${personaje.originplanet}</li>
                <li class="li-card">Especie: ${personaje.specie}</li>
                <li class="li-card">Status: ${personaje.status}</li>
            </ul>
            `
    divPersonajes.append(divCards)            
    //})
    }else{
        divPersonajes.innerHTML = ''
        Swal.fire({
            icon: 'warning',
            title: 'Debes ingresar el nombre del personaje que desees buscar!!',
            showConfirmButton: false,
            timer: 2500
          })
    }

}   


btnTodos.onclick = async () => {
    
    const info = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
    const infoJson = await info.json()
    const personajes = infoJson
    crearCards(personajes)    
}



function crearCards(result){
    divPersonajes.innerHTML = ''
    result.forEach((element) => {
        const divCards = document.createElement('div')
        divCards.setAttribute('class', 'card-personajes')
        divCards.innerHTML = `
            <div class="img-div">
                <img src=${element.imageUrl} class="img-card">
            </div>
            <div class="body-card">
                <h5 class="h5-card">${element.name}</h5>
                <p class="text-card">Este personaje era un ${element.role}</p>
            </div>
            <ul class="ul-card list-group-flush">
                <li class="li-card">Planeta de Origen: ${element.originplanet}</li>
                <li class="li-card">Especie: ${element.specie}</li>
                <li class="li-card">Status: ${element.status}</li>
            </ul>
            `
    divPersonajes.append(divCards)            
    })
}













