/////// ------ PROYECTO FINAL

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
let prodDragonBall = []
let prodAvenger = []
let prodJustice = []
const contain = document.getElementById('articulos')

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
        contain.innerHTML += card
    }
    eventoCarrito() {
        const btncomprar = document.getElementById(this.id)

        const productoAgregado = productos.find(product => product.id == this.id)

        btncomprar.onclick = () => {

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

let figuraDragon1 = new Figura('Goku Super Saiayin', 13500, './multimedia/goku-super-saiayin.jpg', 01, 'Figura coleccionable de Goku Super Saiayin contra Freezer, 30cm.')
let figuraDragon2 = new Figura('Goku Henkidama', 11800, './multimedia/goku-henkiDama.jpg', 02, 'Figura coleccionable de Goku haciendo la Henkidama, 30cm.')
let figuraDragon3 = new Figura('Goku Modo Dios', 15200, './multimedia/gukuModoDios.jpg', 03, 'Figura coleccionable de Goku Super Saiayin Modo Dios, 30cm.')
let figuraDragon4 = new Figura('Broly', 11500, './multimedia/broly-3d.jpg', 04, 'Figura coleccionable de Broly Super Saiayin, 35cm.')
let figuraDragon5 = new Figura('Gohan', 11500, './multimedia/gohan-cell.jpg', 05, 'Figura coleccionable de Gohan Super Saiayin saga vs Cell, 25cm.')
let figuraDragon6 = new Figura('Gohan Ninja', 13500, './multimedia/gohan-ninja.jpg', 06, 'Figura coleccionable de Gohan Ninja Version, 25cm.')
let figuraDragon7 = new Figura('Gohan Final', 14500, './multimedia/gohan-final.jpg', 07, 'Figura coleccionable de Gohan Final transformation, 30cm.')
let figuraDragon8 = new Figura('Trunks', 13500, './multimedia/trunks-adulto.jpg', 08, 'Figura coleccionable de Trunks, 30cm.')
let figuraDragon9 = new Figura('Vegeta M', 13500, './multimedia/vegeta-maldad.jpg', 09, 'Figura coleccionable de Vegeta version vs Magin Boo, 25cm.')
let figuraDragon10 = new Figura('Vegeta', 11500, './multimedia/vegeta-normal.jpg', 10, 'Figura coleccionable de Vegeta, 25cm.')
let figuraDragon11 = new Figura('Vegeta Ultra Ego', 13500, './multimedia/vegetaUltraEgo.jpg', 11, 'Figura coleccionable de Vegeta Ultra Ego, 30cm.')
let figuraDragon12 = new Figura('Freezer', 11500, './multimedia/freezer.jpg', 12, 'Figura coleccionable de Freezer, 25cm.')

let figuraAvenger13 = new Figura('Black Panter', 14500, './multimedia/black-panter.jpg', 13, 'Figura coleccionable de Black Panter, 32cm.')
let figuraAvenger14 = new Figura('Capitan America', 14500, './multimedia/capitan-america.jpg', 14, 'Figura coleccionable de Capitan America, 30cm.')
let figuraAvenger15 = new Figura('Thor', 15500, './multimedia/thor.jpg', 15, 'Figura coleccionable de thor, 30cm.')
let figuraAvenger16 = new Figura('Spiderman', 14500, './multimedia/spider-man.jpg', 16, 'Figura coleccionable de Spiderman, 30cm.')
let figuraAvenger17 = new Figura('Iron Man', 15000, './multimedia/iron-man.jpg', 17, 'Figura coleccionable de Iron Man, 30cm.')
let figuraAvenger18 = new Figura('Hulk', 14500, './multimedia/hulk.jpg', 18, 'Figura coleccionable de Hulk, 35cm.')

let figuraJustice19 = new Figura('Batman', 15500, './multimedia/batman-señal.jpg', 19, 'Figura coleccionable de Batman, 35cm.')
let figuraJustice20 = new Figura('Aquaman', 14500, './multimedia/aquaman.jpg', 20, 'Figura coleccionable de Aquaman, 30cm.')
let figuraJustice21 = new Figura('Wonder Woman', 14500, './multimedia/wonder-woman.jpg', 21, 'Figura coleccionable de Wonder Woman, 30cm.')
let figuraJustice22 = new Figura('Deadpool', 15000, './multimedia/deadpool.jpg', 22, 'Figura coleccionable de Deadpool, 30cm.')
let figuraJustice23 = new Figura('Flash', 14500, './multimedia/flash.jpg', 23, 'Figura coleccionable de Flash, 30cm.')
let figuraJustice24 = new Figura('Superman', 14500, './multimedia/superman.jpg', 24, 'Figura coleccionable de Superman, 30cm.')

productos.push(figuraDragon1, figuraDragon2, figuraDragon3, figuraDragon4, figuraDragon5, figuraDragon6, figuraDragon7, figuraDragon8, figuraDragon9, figuraDragon10, figuraDragon11, figuraDragon12, figuraAvenger13, figuraAvenger14, figuraAvenger15, figuraAvenger16, figuraAvenger17, figuraAvenger18, figuraJustice19, figuraJustice20, figuraJustice21, figuraJustice22, figuraJustice23, figuraJustice24)

prodDragonBall.push(figuraDragon1, figuraDragon2, figuraDragon3, figuraDragon4, figuraDragon5, figuraDragon6, figuraDragon7, figuraDragon8, figuraDragon9, figuraDragon10, figuraDragon11, figuraDragon12)

prodAvenger.push(figuraAvenger13, figuraAvenger14, figuraAvenger15, figuraAvenger16, figuraAvenger17, figuraAvenger18)

prodJustice.push(figuraJustice19, figuraJustice20, figuraJustice21, figuraJustice22, figuraJustice23, figuraJustice24)

console.log(productos)

const selecAvenger = document.getElementById('selecAvenger')
const selecDragonBall = document.getElementById('selecDragonBall')
const selecJustice = document.getElementById('selecJustice')
const showAll = document.getElementById('showAll')
const clean = document.getElementById('clean')

selecAvenger.onclick = () => {
    contain.innerHTML = ''
    prodAvenger.forEach(e => {
        e.cardFiguras()
    })
    prodAvenger.forEach(e => {
        e.eventoCarrito()
    })
}
selecDragonBall.onclick = () => {
    contain.innerHTML = ''
    prodDragonBall.forEach(e => {
        e.cardFiguras()
    })
    prodDragonBall.forEach(e => {
        e.eventoCarrito()
    })
}
selecJustice.onclick = () => {
    contain.innerHTML = ''
    prodJustice.forEach(e => {
        e.cardFiguras()
    })
    prodJustice.forEach(e => {
        e.eventoCarrito()
    })
}

showAll.onclick = () => {
    contain.innerHTML = ''
    productos.forEach(e => {
        e.cardFiguras()
    })
    productos.forEach(e => {
        e.eventoCarrito()
    })
}

clean.onclick = () => {
    contain.innerHTML = ''
}


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


const botonCarrito = document.getElementById('botonCarrito')
const modalBody = document.getElementById('modal-body')
const botonComprar = document.getElementById('comprar')

const actualizarCarrito = () => {
    modalBody.innerHTML = ''

        carrito.forEach((producto) => {
            const divCarrito = document.createElement('div')
            divCarrito.setAttribute('class', 'prodEnCarrito')            
            divCarrito.innerHTML = `                
                <p class="nombreDelProd">${producto.nombre}</p>
                <p class="cantidadProd">Cantidad: ${producto.cantidad}</p>
                <p class="precioProd">Precio: $${producto.precio}</p>
                <button onclick="eliminarDelCarrito(${producto.id})" class="eliminar" id="eliminarDelCarrito"><i class="fa-solid fa-trash-can"></i></button>
                `
            modalBody.append(divCarrito)
        })
}        

const carritoVacio = () => {
    modalBody.innerHTML = ''
    const sinCompra = document.createElement('h5')
    sinCompra.innerText = 'No tienes productos en tu carrito!!'    
    modalBody.append(sinCompra)
}

botonCarrito.onclick = () => {

    const saludoUss = document.getElementById('saludoUss')
    const infoUss = JSON.parse(localStorage.getItem('usuarioIngresado'))
    saludoUss.innerText = `Hola ${infoUss.nombre} ${infoUss.apellido}, esta es tu compra.`
    
    carritoVacio()
    


    if (carrito.length != 0) {

        actualizarCarrito()

        let totalCompra = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
        console.log(totalCompra)

        const compraTotal = document.createElement('h5')
        compraTotal.innerText = `El total de la compra es de $${totalCompra}`
        modalBody.append(compraTotal)

        //--- Operadores Avanzados ---

        function compraPorMayor(compra) {
            return compra <= 40000 ? 'No supera la compra minima.' : 'Califica como compra por mayor.'
        }
        console.log(compraPorMayor(totalCompra))

        let envioEnCaja = carrito.reduce((acc, prod) => acc + prod.cantidad, 0) >= 5 && 'Preparar caja para envio'
        console.log(envioEnCaja)

    }

}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1) 
        
    actualizarCarrito()    
}

const vaciarCarrito = document.getElementById('vaciarCarrito')
vaciarCarrito.onclick = () => {
    carrito.length = 0
    contador.innerHTML = '0'
    carritoVacio()
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


const btnTodos = document.getElementById('btn-todos')
const divPersonajes = document.getElementById('div-personajes')
const ingresarNombre = document.getElementById('name')
const botonName = document.getElementById('botonName')


botonName.onclick = async () => {
    const nombreValue = ingresarNombre.value
    if (nombreValue !== '') {
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
    } else {
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



function crearCards(result) {
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
