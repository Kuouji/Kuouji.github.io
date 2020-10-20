var btn1 = document.querySelector("button.botao1")
var btn2 = document.querySelector("button.botao2")
var body = document.querySelector("body")
var container = document.querySelector("div.container-principal")

function createContainer(){
    var novo_cotainer = document.createElement("div")
    novo_cotainer.className = "container-principal"

    var texto = document.createElement("p")
    texto.innerHTML = "Quero Minha Resposta :3"
    texto.style.fontSize = "5rm"

    novo_cotainer.appendChild(texto)
    return novo_cotainer
}


btn1.onmouseover = () => {
    btn1.innerHTML = "Sim"
    btn2.innerHTML = "Não"
}

btn2.onmouseover = () => {
    btn1.innerHTML = "Não"
    btn2.innerHTML = "Sim"
}

btn1.onclick = () => {
    container.remove()
    body.appendChild(createContainer())
}


btn2.onclick = () => {
    container.remove()
    body.appendChild(createContainer())
}



