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


let nombreEquipo = prompt("Ingresa el nombre de tu equipo!!")
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



    