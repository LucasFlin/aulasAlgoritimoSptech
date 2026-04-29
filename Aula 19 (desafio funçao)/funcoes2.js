let vetor2 = [1, 2, 3]
let vetor3 = [4, 5, 6]
console.log(vetor2)
console.log(vetor3)

console.log("Contém elemento:")
console.log(contemElemento(vetor2, 2))
function contemElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == elemento){
            return true
        }
    }
    return false
}

console.log("Primeira posição:")
console.log(buscarPrimeiraPosicao(vetor2, 2))
function buscarPrimeiraPosicao(lista, elemento){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == elemento){
            return i
        }
    }
    return -1
}

console.log("Última posição:")
console.log(buscarUltimaPosicao(vetor2, 2))
function buscarUltimaPosicao(lista, elemento){
    for (let i = lista.length-1; i >= 0; i--){
        if (lista[i] == elemento){
            return i
        }
    }
    return -1
}

console.log("Concatenar: ")
console.log(concatenar(vetor2, vetor3))
function concatenar(listaA, listaB){
    let novaLista = new Array(listaA.length + listaB.length)

    for(let i = 0; i < listaA.length; i++){
        novaLista[i] = listaA[i]
    }
    for(let j = 0; j < listaB.length; j++){
        novaLista[listaA.length + j] = listaB[j]
    }
    return novaLista
}
console.log("Comparar: ")
console.log(comparar(vetor2, vetor3))
function comparar(listaA, listaB){
    for(let i = 0; i < listaA.length; i++){
        if(listaA[i] != listaB){
            return false
        }
    }
    return true
}
