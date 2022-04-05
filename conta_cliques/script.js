let cont = 0;

let resetContador = document.querySelector("reset");

function reset(){
  cont = 0;
  
}

function somaCont(){
  cont = cont++;
}

function updateDisplay(variavel) {
  document.getElementById("counter-label").innerHTML = variavel;
}

