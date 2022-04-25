let caixaTexto = document.querySelector("#texto-tarefa");
let botaoAdicionar = document.querySelector("#criar-tarefa");
let listTarefa = document.querySelector("#lista-tarefas");

botaoAdicionar.addEventListener("click", btnAdicionar);

function btnAdicionar() {
    let tarefa = caixaTexto.value;
    let lista = document.querySelector("#lista-tarefas");
    let item = document.createElement("li");
    item.innerHTML = tarefa;
    lista.appendChild(item);
    caixaTexto.value = "";    
}




window.onload