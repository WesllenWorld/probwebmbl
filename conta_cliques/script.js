let cont = 0;

let resetContador = document.querySelector("reset");

function reset(){
  cont = 0;
  printar(cont);
  
}

function somaCont(){
  printar(cont++);
}

function printar(variavel) {
  document.getElementById("counter-label").innerHTML = variavel;
}

