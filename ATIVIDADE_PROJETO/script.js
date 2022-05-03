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

function newparagrafo(){

	const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		var p = this.responseText;
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://random-recipes.p.rapidapi.com/ai-quotes/1");
xhr.setRequestHeader("X-RapidAPI-Host", "random-recipes.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9c2551b869mshc8173a28e9ebecdp14e04bjsne4e4b3f756f5");

xhr.send(data);

	const paragrafo = document.createElement("p");
	const texto = document.createTextNode(p);
	paragrafo.appendChild(texto);
	const element = document.getElementById("div1");
	element.appendChild(paragrafo);
	
	}


