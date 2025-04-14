const URL = 'http://localhost:8080/turma';

window.onload = () => {
    getProducts();
}

function getProducts() {
    fetch(`${URL}/get`)
        .then((response) => response.json())
        .then((data) => formataComoTabela(data))
        .catch((error) => console.error('Erro:', error));
}

function formataComoTabela(data) {
  let tabelaProdutos = document.getElementById('tabela-produtos');
  for (let i = 0; i < data.length; i++) {
    let paraInserir =
      '<td>' +
      data[i].id +
      '</td>' +
      '<td>' +
      data[i].nome +
      '</td>';
    tabelaProdutos.innerHTML += paraInserir;
  }
}