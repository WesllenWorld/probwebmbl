let cont = 0;
let cont2 = 0;
let d1 = document.getElementById("contador1");
let d2 = document.getElementById("contador2");


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

