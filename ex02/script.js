let taxa = 0;
let dolares = 0;
let reais = 0;

let inTaxaDeConversao = document.querySelector("taxa");
let inValorDolar = document.getElementById("valorDolar");
let inValorReal = document.getElementById("valorReal");

let botaoTaxa = document.querySelector("botaoTaxa")
let botaoTaxaLimpar = document.querySelector("botaoTaxaLimpar")
let botaoDolarReal = document.querySelector("botaoDolarReal")
let botaoRealDolar = document.querySelector("botaoRealDolar")

inValorDolar.disabled = true;
inValorReal.disabled = true;

botaoTaxaLimpar.disabled = true;
botaoRealDolar.disabled = true;
botaoDolarReal.disabled = true;
botaoTaxa.disabled = false;

function dolarReal(){
  if(inValorDolar.value > 0){
    dolares = inValorDolar.value;
    inValorReal.value = taxa * dolares;
  }else{
    alert("Falha ao preencher o campo.");
  }
  
}
function realDolar(){
  if(inValorReal.value > 0){
    reais = inValorReal.value;
    inValorDolar.value = reais/taxa;
  }else{
    alert("Falha ao preencher o campo.");
  }
}

function taxaConfirmada(){
  if(inTaxaDeConversao.value > 0){
    taxa = inTaxaDeConversao.value;
    inputReal.disabled = false;
    inputDolar.disabled = false;
    buttonReset.disabled = false;
    buttonToDolar.disabled = false;
    buttonToReal.disabled = false;
    buttonConfirmar.disabled = true;
    inputTaxa.disabled = true;
  }else{
    alert("Falha ao preencher o campo.");
  }
}

function taxaLimpar() {
  taxa = 0;
  inValorDolar.value = null;
  inValorReal.value = null;
  inTaxaDeConversao.disabled=false;
  inTaxaDeConversao.value = null;
  inValorDolar.disabled = true;
  inValorReal.disabled = true;
  taxaLimpar.disabled = true;
  botaoRealDolar.disabled = true;
  botaoDolarReal.disabled = true;
  botaoTaxa.disabled = true;botaoTaxaLimpar.disabled = true;
  document.querySelector("taxa").disabled = true;
  document.querySelector("botaoTaxa").disabled = true;
}