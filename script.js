let caixaTexto = document.querySelector("#texto-tarefa");
let botaoAdicionar = document.querySelector("#criar-tarefa");
let listTarefa = document.querySelector("#lista-tarefas");
let botaoLimpar = document.querySelector("#apaga-tudo");
let botaoFinalizado = document.querySelector("#remover-finalizados");
let botaoSalvarList = document.querySelector("#salvar-tarefas");
let botaoCima = document.querySelector("#mover-cima");
let botaoBaixo = document.querySelector("#mover-baixo");
let botaoDeletar = document.querySelector("#remover-selecionado");


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
//clicado limpa os itens da lista
botaoLimpar.addEventListener("click", btnLimpar);

function btnLimpar(){
	listTarefa.innerHTML = "";  
  	
}
//clicado remove somente os elementos finalizados ou marcado da sua lista
botaoFinalizado.addEventListener("click", btnFinalizar);

function btnFinalizar(){
  let listMarcado = document.querySelector("#lista-tarefas");
  let itemMarcado = document.querySelectorAll(".completed");
  for(let i = 0; i < itemMarcado.length; i++){
    listMarcado.removeChild(itemMarcado[i]);
    
  }
}
// que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
botaoSalvarList.addEventListener("click", btnSalvarList);

function btnSalvarList(){
  let listSalvar = document.querySelector("#lista-tarefas");
  let itemSalvar = document.querySelectorAll("li");
  let salvarLista = listSalvar.innerHTML;
  localStorage.setItem("lista", salvarLista);
  console.log(itemSalvar);
}
//Se você abrir a página novamente, a lista deve continuar no estado em que estava
if(localStorage.getItem("lista") != null){
  listTarefa.innerHTML = localStorage.getItem("lista");
}
//Mover para cima" deve mover o item selecionado para o topo da lista
botaoCima.addEventListener("click", btnCima);

function btnCima(){
  let itemCima = document.querySelectorAll("li");
  for(let i = 1; i < itemCima.length; i += 1){
    
    if(itemCima[i].style.backgroundColor == "rgb(128, 128, 128)"){
      listTarefa.insertBefore(itemCima[i], itemCima[i - 1]);
      console.log(itemCima[i]);
    }
  }
}
//Mover para baixo" deve mover o item selecionado para o final da lista
botaoBaixo.addEventListener("click", btnBaixo);

function btnBaixo(){
  let itemBaixo = document.querySelectorAll("li");
  for(let i = 1; i < itemBaixo.length; i -= 1){
    
    if(itemBaixo[i].style.backgroundColor == "rgb(128, 128, 128)"){
      listTarefa.insertBefore(itemBaixo[i], itemBaixo[i - 1]);
   //   console.log(itemBaixo[i]);
    }
  }
}
//Deve ser possível remover um item da lista
botaoDeletar.addEventListener("click", btnDeletar);

function btnDeletar(){
  let itemDeletar = document.querySelectorAll("li");
  for(let i = 0; i < itemDeletar.length; i += 1){
    
    if(itemDeletar[i].style.backgroundColor == "rgb(128, 128, 128)"){
      listTarefa.removeChild(itemDeletar[i]);
 //     console.log(itemDeletar[i]);
    }
  }
}




window.onload = () => {
  
}




   
    
  




// let itemBaixo = document.querySelectorAll("li");
//   for(let i = itemBaixo.length - 1 ; i >= 0; i -= 1){
    
//     if(itemBaixo[i].style.backgroundColor == "rgb(128, 128, 128)"){
//       listTarefa.insertBefore(itemBaixo[i], itemBaixo[i - 1]);
//       console.log(itemBaixo[i]);
//     }
//   }
// }
  









