let divId = 0;


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
    //let viewCont = document.createElement("h3");
   // let node = document.createElement('h3');
   // node.innerHTML('<h3>cont</h3>');
   let c = document.createTextNode(cont);
   contP.appendChild(c);
  

    novaDiv.setAttribute('divId', 'box', divId.toString())
    novaDiv.append(novo);
    novaDiv.append(contP);
    novaDiv.onclick = function(){
      cont = cont++;
    }
    
    

    let btn = document.createElement("button");
    btn.innerHTML = "Zerar";
    novaDiv.appendChild(btn); 
    btn.onclick = function(){
      contP.c = 1;
    }
    novaDiv.append(btn);
    

    novoDivId();
    divArmazenamento.appendChild(novaDiv);
    
}
}

function novoDivId() {
  divId += divId+1;
}

