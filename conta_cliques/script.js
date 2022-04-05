let cont = 0;
let cont2 = 0;

function reset(){
  cont = 0;
  cont2 = 0;
  printar(cont);
  
}

function somaCont(){
  printar(cont++);
}

function printar(variavel) {
  document.getElementById("counter-label").innerHTML = variavel;
}

