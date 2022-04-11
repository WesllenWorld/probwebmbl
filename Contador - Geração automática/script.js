let divId = 0;
let contId = 0;
let cores = ['red', 'green', 'blue', 'yellow', 'chocolate', 'crimson', 'aqua', 'cyan', 'lime', 'lightpink', 'orange', 'gray'];

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
    contP.id="contId"+contId;
    let c = document.createTextNode(cont);
    contP.appendChild(c);
    

    novaDiv.setAttribute('divId', divId.toString());
    novaDiv.append(novo);
    novaDiv.append(contP);


    const btn = document.createElement('button');
    let lbl = document.createTextNode("Zerar");        
    btn.appendChild(lbl); 
    btn.addEventListener("click", function()
    {
      cont = -1; //como a div está somando +1 com o click, -1 previne que ela mostre 0+1 ao zerar
      document.getElementById(contP.id).innerHTML = cont;
    });
    novaDiv.appendChild(btn);  
    
    document.getElementById(novaDiv.id).style.backgroundColor = colorir();
    
    novaDiv.addEventListener("click", function() {
     cont++;
     document.getElementById(contP.id).innerHTML = cont;
   });
   

    novoDivId();
    novoContId();
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

function colorir() {
  let corIndice = Math.floor(Math.random() * 12);
  let cor = cores[corIndice];
  return cor;
}
