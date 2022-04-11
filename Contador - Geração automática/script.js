let divId = 0;
let contId = 0;

const d1 = document.getElementById("contador1");
const d2 = document.getElementById("contador2");


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
  if(document.getElementById("novo").value.length == 0 || document.getElementById("novo").value === "")
{
    alert("ERRO: CONTADOR PRECISA DE UM NOME.")
}else{
    let novo = document.getElementById("novo").value;
    let cont = 0;
    let novaDiv = document.createElement("div");
    let divArmazenamento = document.getElementById("armazenar");
    let contP = document.createElement("p");
       
    contP.setAttribute('contId', contId.toString);
    let c = document.createTextNode(cont);
    contP.appendChild(c);
    


    novaDiv.setAttribute('divId', divId.toString());
    novaDiv.append(novo);
    novaDiv.append(contP);
   
    
    
    
    novaDiv.addEventListener("click", function() {
     // alert("You clicked this div");
     document.getElementById("contId").innerHTML = cont++;
   });
    novoDivId();
    novoContId();
    divArmazenamento.appendChild(novaDiv);
    
}
}

function novoDivId() {
  divId = "d"+divId+1;
  return divId;
}

function novoContId() {
  contId = "c"+divId+1;
  return contId;
}

function createButton()
{
     let btn = document.createElement('BUTTON');
     let lbl = document.createTextNode("Zerar");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}
