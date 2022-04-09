let cont = 0;
let cont2 = 0;
let d1 = document.getElementById("contador1");
let d2 = document.getElementById("contador2");
let nomeContador = document.querySelector("novoContador");

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

function ccontadorNovo() {
  let div = document.createElement('div');
  div.innerText = document.getElementById('getText').innerText;
  document.body.appendChild(div);
}


