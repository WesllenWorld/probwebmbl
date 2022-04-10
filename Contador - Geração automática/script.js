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
    let cont2 = document.createElement("p");
    //let viewCont = document.createElement("h3");
   // let node = document.createElement('h3');
   // node.innerHTML('<h3>cont</h3>');


    novaDiv.setAttribute('divId', 'box', divId.toString())
    novaDiv.append(novo);
    linebreak = document.createElement("br");
    novaDiv.appendChild(linebreak);
    
    let c = document.createTextNode(cont);
    cont2.appendChild(c);
    novaDiv.append(cont2);
    

    novoDivId();
    divArmazenamento.appendChild(novaDiv);
    
}
}

function novoDivId() {
  divId += divId+1;
}

