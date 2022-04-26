let caixaTexto = document.querySelector("#texto-tarefa");
let botaoAdicionar = document.querySelector("#criar-tarefa");
let listTarefa = document.querySelector("#lista-tarefas");
let estilo = document.querySelector("body");

//ADICIONANDO FUNÇÃO NO BOTAO
botaoAdicionar.addEventListener("click", btnAdicionar);

function btnAdicionar() {
    let tarefa = caixaTexto.value;
    let lista = document.querySelector("#lista-tarefas");
    let item = document.createElement("li");
    item.innerHTML = tarefa;
    lista.appendChild(item);
    caixaTexto.value = "";   
     
}
//ADICIONAR COR NO FUNDO DA PAGINA
listTarefa.addEventListener("click", mudaCor);

function mudaCor() {
    let cor = document.querySelector("body");
    cor.style.backgroundColor = "rgb(128, 128, 128)";

}
    

window.onload = () => {
  
}





