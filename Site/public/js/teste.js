function cadPessoa(status, nome, cpu, memoria, disco) {

  var tabela = document.querySelector("#tbAlunos");

  var qtdLinhas = tabela.rows.length;

  var linha = tabela.insertRow(qtdLinhas);


  // var cellLinha = linha.insertCell(0);
  var cellStatus = linha.insertCell(0);
  var cellNome = linha.insertCell(1);
  var cellCpu = linha.insertCell(2);
  var cellMemoria = linha.insertCell(3);
  var cellDisco = linha.insertCell(4);

  // cellLinha.innerHTML = qtdLinhas;
  cellStatus.innerHTML = status;
  cellNome.innerHTML = nome;
  cellCpu.innerHTML = cpu;
  cellMemoria.innerHTML = memoria;
  cellDisco.innerHTML = disco;
}

let tabela = document.querySelector("#tbAlunos");

const criarTag = (elemento) => document.createElement(elemento);

const criarCelula = (tag, texto) => {
  tag = criarTag(tag);
  tag.textContent = texto;

  return tag;
}

let thead = criarTag("thead");
let tbody = criarTag("tbody");
let linhaHead = criarTag("tr");

let indices = ["Status", "Aluno", "CPU", "MEMORIA", "DISCO"];

for (let i = 0; i < indices.length; i++) {

  const th = criarCelula("th", indices[i]);
  linhaHead.appendChild(th);

}


for (let i = 0; i < listaAlunos.length; i++) {

  let linhaBody = criarTag("tr");

  if (i % 2 != 0) {

    linhaBody.setAttribute("class", "listrado")

  }

  for (let j = 0; j < listaAlunos[i].length; j++) {

    let cell = criarCelula("td", listaAlunos[i][j]);
    linhaBody.appendChild(cell);

  }

  tbody.appendChild(linhaBody);

}


thead.appendChild(linhaHead);

tabela.appendChild(thead);
tabela.appendChild(tbody);



