let bostero = prompt ("Hola, sos hincha de Boca??")

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

alert("Exacto, "+defensa +" tiene 15 goles en Boca!!")