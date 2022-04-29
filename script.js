let caixaTexto = document.querySelector("#texto-tarefa");
let botaoAdicionar = document.querySelector("#criar-tarefa");
let listTarefa = document.querySelector("#lista-tarefas");
let botaoLimpar = document.querySelector("#apaga-tudo");



//Adicionando item a lista
botaoAdicionar.addEventListener("click", btnAdicionar);

function btnAdicionar() {
  let tarefa = caixaTexto.value;
  let lista = document.querySelector("#lista-tarefas");
  let item = document.createElement("li");
  item.innerHTML = tarefa;
  caixaTexto.value = "";
  //item.addEventListener("click", mudaCor);
  lista.appendChild(item);

}
//Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
listTarefa.addEventListener("click", mudaCor);

function mudaCor(event) {
  event.target.style.backgroundColor = "rgb(128, 128, 128)";

}

//Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
listTarefa.addEventListener("click", seleciona);

function seleciona(event) {
  let itemSelecionado = event.target.style.backgroundColor = "rgb(128, 128, 128)";
  for (let i = 0; i < listTarefa.children.length; i += 1) {
    listTarefa.children[i].style.backgroundColor = "white";
  }
  if (itemSelecionado == "rgb(128, 128, 128)") {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";

  }
}
//Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
listTarefa.addEventListener("dblclick", risca); 

function risca(event) { //essa função tanto risca como também remove e add
	if(event.target.className == "completed"){
		event.target.classList.remove('completed');
	}else {
		event.target.classList.add('completed');
	} 
}
// Adicionar um botão que quando clicado deve apagar todos os itens da lista
botaoLimpar.addEventListener("click", btnLimpar);

function btnLimpar(event){
	listTarefa.innerHTML = "";
		
}


