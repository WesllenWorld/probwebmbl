let divId = 0;
let contId = 0;

function contadorNovo() {
  if(document.getElementById("novo").value.length == 0 || document.getElementById("novo").value === " ")
{
    alert("ERRO: CONTADOR PRECISA DE UM NOME.")
}else{
    let novo = document.getElementById("novo").value;
    let cont = 0;
    let novaDiv = document.createElement("div");
    let divArmazenamento = document.getElementById("armazenar");
    let contP = document.createElement("p");
    contP.id="div"+divId;
    let c = document.createTextNode(cont);
    contP.appendChild(c);
    
    const btn = document.createElement('button');
    let lbl = document.createTextNode("Zerar");        
    btn.appendChild(lbl); 
    btn.onclick = function()
    {
      document.getElementById(contP.id).innerHTML = 0;
    }
    document.novaDiv.appendChild(btn);   


    novaDiv.setAttribute('divId', divId.toString());
    novaDiv.append(novo);
    novaDiv.append(contP);


   
    
    
    
    novaDiv.addEventListener("click", function() {
     // alert("You clicked this div");
     document.getElementById(contP.id).innerHTML = cont++;
   });
    novoDivId();
    divArmazenamento.appendChild(novaDiv);
    
}
}

function novoDivId() {
  divId = divId+1;
  return divId;
}

function novoContId() {
  contId = contId+1;
  return contId;
}

function createButton() {
     let btn = document.createElement('BUTTON');
     let lbl = document.createTextNode("Zerar");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}
