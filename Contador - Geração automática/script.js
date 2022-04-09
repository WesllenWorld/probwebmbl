let divId = 0;

const d1 = document.getElementById("contador1");
const d2 = document.getElementById("contador2");
let novoContador = document.querySelector("novoContador");
let nomeDoContador;

function reset(){
  cont = 0;
  printar(cont);
}

function somaCont(){
  printar(cont++);
}

function printar(variavel) {
  
    document.getElementById("contador1").innerHTML = variavel;
  
    document.getElementById("contador2").innerHTML = variavel;
  

}

function contadorNovo() {
  let novo = document.getElementById("novo").value;
  let cont = 0;
  let novaDiv = document.createElement("div");
  let divArmazenamento = document.getElementById("armazenar");
  novaDiv.setAttribute('divId', 'box', divId.toString())
  novaDiv.append('<h3>' + novo + '</h3>');
  ("<br>").appendTo("novaDiv");
  novaDiv.append('<h3>' + cont + '</h3>');
  novoDivId();
  

  divArmazenamento.appendChild(novaDiv);
}

function novoDivId() {
  divId += divId+1;
}

