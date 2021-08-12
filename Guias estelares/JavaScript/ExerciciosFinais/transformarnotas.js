
 function nota(notaNumero) {
    let notaA = notaNumero > 89 && notaNumero <= 100
    let notaB = notaNumero > 79 && notaNumero < 90
    let notaC = notaNumero > 69 && notaNumero < 80
    let notaD = notaNumero > 59 && notaNumero < 70
    let notaF = notaNumero >= 0 && notaNumero < 60
    let notaFinal;
    
        if (notaA) {
            notaFinal = "A"
        } else if (notaB) {
            notaFinal = "B"
        } else if (notaC) {
            notaFinal = "C"
        } else if (notaD) {
            notaFinal = "D"
        } else if (notaF) {
            notaFinal = "F"
        } else {
            notaFinal = "Nota inválida"
        } return notaFinal;        
 }

 console.log(nota(101))
 console.log(nota(-54))
 console.log(nota(98))
 console.log(nota(87))
 console.log(nota(80))
 console.log(nota(75))
 console.log(nota(65,5))
 console.log(nota(55))
 console.log(nota(10))
 console.log(nota(0))
 console.log(nota(100))

    

