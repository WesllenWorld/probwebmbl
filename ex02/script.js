let dolares = 0;
let reais = 0;

let taxaDeConversao = document.getElementById("taxa");
let valorDolar = document.getElementById("valorDolar");
let valorReal = document.getElementById("valorReal");



let botaoTaxa = document.getElementById("botaoTaxa")
let botaoTaxaLimpar = document.getElementById("botaoTaxaLimpar")
let botaoDolarReal = document.getElementById("botaoDolarReal")
let botaoRealDolar = document.getElementById("botaoRealDolar")

botaoDolarReal.disabled = true;
botaoRealDolar.disabled = true;


function dolarReal(){
  reais = taxaDeConversao.value * valorDolar;
  valorReal.value = reais;
}
function realDolar(){
  dolares = valorReal/taxaDeConversao.value;
  valorReal.value = dolares;
}

function taxaConfirmada(){
  if(taxaDeConversao.value === ""){
    document.getElementById("botaoTaxa").disabled = false;
  }else{
    document.getElementById("botaoTaxa").disabled = true;
    botaoRealDolar.disabled = true;
    botaoDolarReal.disabled = true;
    
  }
}

function taxaLimpar() {
  document.getElementsByName("real")[0].value = "";
  document.getElementsByName("taxa")[0].value = "";
  document.getElementsByName("dolar")[0].value = "";

  document.getElementById("botaoTaxa").disabled = false;
 
  botaoRealDolar.disabled = true;
  botaoDolarReal.disabled = true;

}