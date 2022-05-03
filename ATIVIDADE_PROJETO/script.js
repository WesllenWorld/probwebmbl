const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://random-recipes.p.rapidapi.com/ai-quotes/1");
xhr.setRequestHeader("X-RapidAPI-Host", "random-recipes.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9c2551b869mshc8173a28e9ebecdp14e04bjsne4e4b3f756f5");

xhr.send(data);

function newParagrafo(){

	const paragrafo = document.createElement("p");
	const texto = document.createTextNode(responseText);
	para.appendChild(texto);
	const element = document.getElementById("div1");
	element.appendChild(paragrafo);
	
	}

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
      event.stopPropagation();
      cont = 0; 
      document.getElementById(contP.id).innerHTML = cont;
    });
    novaDiv.appendChild(btn);  
    
    novaDiv.style.background = colorir();
    
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
