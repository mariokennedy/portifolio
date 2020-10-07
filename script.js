var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
})

//Script Orcamento---------------

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    if(prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    }
    else{
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()})

function atualizarPreco(){
    const quantidade = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = quantidade * 100
    if(temJS) preco *= 1.1 // ou preco = preco * 1.1
    if(incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco = preco + (preco * taxaUrgencia)

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}