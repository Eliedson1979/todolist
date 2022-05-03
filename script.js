/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eqeqeq */
/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable sonarjs/no-duplicate-string */
const caixaTexto = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const listTarefa = document.querySelector('#lista-tarefas');
const botaoLimpar = document.querySelector('#apaga-tudo');
const botaoFinalizado = document.querySelector('#remover-finalizados');
const botaoSalvarList = document.querySelector('#salvar-tarefas');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');
const botaoDeletar = document.querySelector('#remover-selecionado');

// Adicionando item a lista
botaoAdicionar.addEventListener('click', btnAdicionar);

function btnAdicionar() {
  const tarefa = caixaTexto.value;
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.innerHTML = tarefa;
  caixaTexto.value = '';
  // item.addEventListener("click", mudaCor);
  lista.appendChild(item);
}
// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
listTarefa.addEventListener('click', mudaCor);

function mudaCor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
listTarefa.addEventListener('click', seleciona);

function seleciona(event) {
  const itemSelecionado = event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  for (let i = 0; i < listTarefa.children.length; i += 1) {
    listTarefa.children[i].style.backgroundColor = 'white';
  }
  if (itemSelecionado === 'rgb(128, 128, 128)') {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
listTarefa.addEventListener('dblclick', risca);

function risca(event) { // essa função tanto risca como também remove e add
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// clicado limpa os itens da lista
botaoLimpar.addEventListener('click', btnLimpar);

function btnLimpar() {
  listTarefa.innerHTML = '';
}
// clicado remove somente os elementos finalizados ou marcado da sua lista
botaoFinalizado.addEventListener('click', btnFinalizar);

function btnFinalizar() {
  const listMarcado = document.querySelector('#lista-tarefas');
  const itemMarcado = document.querySelectorAll('.completed');
  for (let i = 0; i < itemMarcado.length; i += 1) {
    listMarcado.removeChild(itemMarcado[i]);
  }
}
// que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
botaoSalvarList.addEventListener('click', btnSalvarList);

function btnSalvarList() {
  const listSalvar = document.querySelector('#lista-tarefas');
  const itemSalvar = document.querySelectorAll('li');
  const salvarLista = listSalvar.innerHTML;
  localStorage.setItem('lista', salvarLista);
  console.log(itemSalvar);
}
// Se você abrir a página novamente, a lista deve continuar no estado em que estava
if (localStorage.getItem('lista') != null) {
  listTarefa.innerHTML = localStorage.getItem('lista');
}
// Mover para cima" deve mover o item selecionado para o topo da lista
botaoCima.addEventListener('click', btnCima);

function btnCima() {
  const itemCima = document.querySelectorAll('li');
  for (let i = 1; i < itemCima.length; i += 1) {
    if (itemCima[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listTarefa.insertBefore(itemCima[i], itemCima[i - 1]);
      //     console.log(itemCima[i]);
    }
  }
}
// Mover para baixo" deve mover o item selecionado para o final da lista
botaoBaixo.addEventListener('click', btnBaixo);

function btnBaixo() {
  // let itemBaixo = document.querySelector(".selected");
  // console.log(itemBaixo);

  const itemBaixo = document.querySelectorAll('li');
  for (let i = 0; i < itemBaixo.length; i += 1) {
    if (itemBaixo[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listTarefa.insertBefore(itemBaixo[i], itemBaixo[i + 2]);
      console.log(itemBaixo[i]);
    }
  }
}
// Deve ser possível remover um item da lista
botaoDeletar.addEventListener('click', btnDeletar);

function btnDeletar() {
  const itemDeletar = document.querySelectorAll('li');
  for (let i = 0; i < itemDeletar.length; i += 1) {
    if (itemDeletar[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listTarefa.removeChild(itemDeletar[i]);
      //     console.log(itemDeletar[i]);
    }
  }
}




