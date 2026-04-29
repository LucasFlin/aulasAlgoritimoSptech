let vetor = [1, 2, 3]
console.log(vetor)

console.log('Adicionar o Inicio:')
adicionarNoFinal(vetor, 4)
function adicionarNoFinal(lista, elemento) {
    lista[lista.length] = elemento
    console.log(lista)
    return lista
}

console.log('Remover do Final:')
console.log(vetor)
removerDoFinal(vetor)
function removerDoFinal(lista) {
    lista.length = lista.length - 1
    console.log(lista)
    return lista
}

console.log('Remover do Inicio:')
console.log(vetor)
removerDoInicio(vetor)
function removerDoInicio(lista) {
    for (let i = 1; i < lista.length; i++) {
        lista[i - 1] = lista[i]
    }
    lista.length = lista.length - 1
    console.log(lista)
    return lista
}

console.log('Adicionar no Inicio:')
console.log(vetor)
adicionarNoInicio(vetor, 1)
function adicionarNoInicio(lista, elemento) {
    lista.length = lista.length + 1
    for (let i = lista.length - 1; i > 0; i--) {
        lista[i] = lista[i - 1]
    }
    lista[0] = elemento
    console.log(lista)
    return lista
}

console.log('Alterar lista:')
console.log(vetor)
alterarLista(vetor, 1, 1)
function alterarLista(lista, indice, quantidade, elemento) {
    let placeholder = new Array(lista.length)
    let remover = indice + quantidade

    if (quantidade > lista.length) {
        return lista
    } else if (quantidade == 0) {
        lista[lista.length] = elemento
        return lista
    } else {
        for (let i = indice; i <= quantidade; i++){
        lista[i] = lista[i + quantidade]
        }
        if (elemento != null && elemento != undefined){
        lista.length = lista.length-(quantidade-1)
        }
        console.log(lista)
        return lista
    }
}

