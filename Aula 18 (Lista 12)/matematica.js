function somar(n1, n2) {
    if (n1 == null || n1 == undefined) {
        console.log(`Parâmetro n1 não pode ser nulo ou indefinido`)
        return
    }
    if (n2 == null || n2 == undefined) {
        console.log(`Parâmetro n2 não pode ser nulo ou indefinido`)
        return
    }

    if (typeof n1 != "number") {
        console.log(`tipo inválido para o argumento n1`)
        return
    }
    if (typeof n2 != "number") {
        console.log(`tipo inválido para o argumento n2`)
        return
    }
    console.log(n1 + n2)
}

function calcularDistancia(x1, x2, y1, y2) {
    if (x1 == null || x1 == undefined) {
        console.log(`Parâmetro x1 não pode ser nulo ou indefinido`)
        return
    }
    if (x2 == null || x2 == undefined) {
        console.log(`Parâmetro x2 não pode ser nulo ou indefinido`)
        return
    }
    if (y1 == null || y1 == undefined) {
        console.log(`Parâmetro y1 não pode ser nulo ou indefinido`)
        return
    }
    if (y2 == null || y2 == undefined) {
        console.log(`Parâmetro y2 não pode ser nulo ou indefinido`)
        return
    }

    if (typeof x1 != "number") {
        console.log(`tipo inválido para o argumento x1`)
        return
    }
    if (typeof x2 != "number") {
        console.log(`tipo inválido para o argumento x2`)
        return
    }
    if (typeof y1 != "number") {
        console.log(`tipo inválido para o argumento y1`)
        return
    }
    if (typeof y2 != "number") {
        console.log(`tipo inválido para o argumento y2`)
        return
    }

    console.log((((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5)
}

function converterParaHoraMinutoSegundo(numero) {
    if (numero == null || numero == undefined) {
        console.log(`Parâmetro numero não pode ser nulo ou indefinido`)
        return
    }
    if (typeof numero != "number") {
        console.log(`tipo inválido para o argumento numero`)
        return
    }
    let seg = numero
    let min = 0
    let hr = 0
    if (seg >= 60) {
        min = Math.floor(seg / 60)
        seg = Math.floor(seg % 60)
    }
    if (min > 60) {
        hr = Math.floor(min / 60)
        min = Math.floor(min % 60)
    }
    console.log(`${hr}:${min}:${seg}`)
}

function ePrimo(numero) {
    if (numero == null || numero == undefined) {
        console.log(`Parâmetro numero não pode ser nulo ou indefinido`)
        return
    }
    if (typeof numero != "number") {
        console.log(`tipo inválido para o argumento numero`)
        return
    }
    let n = numero ** 0.5
    let primo = false
    if (Math.floor(n) != n) {
        primo = true
    }

    console.log(primo)
}

function calcularFatorial(numero) {
    if (numero == null || numero == undefined) {
        console.log(`Parâmetro numero não pode ser nulo ou indefinido`)
        return
    }
    if (typeof numero != "number") {
        console.log(`tipo inválido para o argumento numero`)
        return
    }
    let n = 0
    for (let i = 1; i <= numero; i++) {
        n += numero * i
    }
    console.log(n)
}

function calcularMedia(vetor) {
    console.log(vetor)
    if (vetor == null || vetor == undefined) {
        console.log(`Parâmetro vetor não pode ser nulo ou indefinido`)
        return
    }

    let media = 0
    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] != "number") {
            console.log(`tipo inválido para o argumento vetor`)
            return
        }
        media += vetor[i]
        console.log(media)
    }
    media = media / vetor.length
    console.log(media)
}

function calcularMediaPonderada(vetorMedias, vetorPesos) {
    if (vetorMedias == null || vetorMedias == undefined) {
        console.log(`Parâmetro vetorMedias não pode ser nulo ou indefinido`)
        return
    }

    if (vetorPesos == null || vetorPesos == undefined) {
        console.log(`Parâmetro vetorPesos não pode ser nulo ou indefinido`)
        return
    }

    let validacao = 0
    for (let j = 0; j < vetorPesos.length; j++) {
        if (typeof vetorPesos[j] != "number") {
            console.log(`tipo inválido para o argumento vetorPesos`)
            return
        }
        validacao += vetorPesos[j]
    }
    if (validacao < 1){
        console.log('A soma dos pesos deve ser 1')
    }

    let media = 0
    for (let i = 0; i < vetorMedias.length; i++) {
        if (typeof vetorMedias[i] != "number") {
            console.log(`tipo inválido para o argumento vetorMedias`)
            return
        }
        media += (vetorMedias[i] * vetorPesos[i])
    }
    media = media / vetorMedias.length
    console.log(media)
}