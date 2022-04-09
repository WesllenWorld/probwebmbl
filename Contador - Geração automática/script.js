let cont = 0;
let cont2 = 0;
let novoDivId = 0;

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

  let novaDiv = document.createElement("div");
  let divArmazenamento = document.getElementById("armazenar");
  novaDiv.setAttribute('divId', 'box', divId.toString())
  novoDivId();
  

  div.innerText = document.getElementById("getText").innerText;
  document.body.appendChild(div);
}

function novoDivId() {
  divId += divId+1;
}

