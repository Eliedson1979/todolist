let caixaTexto = document.querySelector("#texto-tarefa");
let botaoAdicionar = document.querySelector("#criar-tarefa");
let listTarefa = document.querySelector("#lista-tarefas");



//ADICIONANDO FUNÇÃO NO BOTAO
botaoAdicionar.addEventListener("click", btnAdicionar);

function btnAdicionar() {
  let tarefa = caixaTexto.value;
  let lista = document.querySelector("#lista-tarefas");
  let item = document.createElement("li");
  item.innerHTML = tarefa;
  caixaTexto.value = "";
//	item.addEventListener("click", mudaCor);
  lista.appendChild(item);
	console.log(item);
	
}
//ADICIONAR COR NO FUNDO 
listTarefa.addEventListener("click", mudaCor);	
function mudaCor(event) {
	event.target.style.backgroundColor = "rgb(128, 128, 128)";
		
	}


//LIMPAR ITEM SELECIONADO


