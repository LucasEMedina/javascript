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


/////   DESAFIO COMPLEMENTARIO DOM

const carrito = []
const productos = []

class Figura{
    constructor(nombre, precio, img, id, desc = ''){
        this.nombre = nombre
        this.precio = precio
        this.img = img
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
                    <button id=${this.id} type="button" class="btn btn-primary">COMPRAR</button>
                </div>
            </div>
        `
        const contain = document.getElementById('articulos')
        contain.innerHTML += card
    }
}


let figura2 = new Figura('Goku Henkidama', 11800, './multimedia/goku-henkiDama.jpg', 02, 'Figura coleccionable de Goku haciendo la Henkidama, 30cm.')

let figura3 = new Figura('Goku Modo Dios', 15200, './multimedia/gukuModoDios.jpg', 03, 'Figura coleccionable de Goku Super Saiayin Modo Dios, 30cm.')

productos.push(figura2, figura3)

console.log(productos)

productos.forEach(e => {
    e.cardFiguras()
})

let borrarParrafo = document.getElementById('parrafo')
//console.log(borrarParrafo)
borrarParrafo.remove()









