let cont = 0;
let cont2 = 0;
let d1 = document.getElementById("contador1");
let d2 = document.getElementById("contador2");


function reset(div){
  if(div === "div1"){
    cont = 0;
  printar(cont);
  }else{
    cont2 = 0;
   printar(cont);
  }
 
}

function somaCont(div){
  if(div === "div1"){
    printar(cont++);
  }else{
    printar(cont2++);
  }

}

function printar(variavel) {
  
    document.getElementById("contador1").innerHTML = variavel;
  
    document.getElementById("contador2").innerHTML = variavel;
  

}

